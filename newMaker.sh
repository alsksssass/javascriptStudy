#!/bin/bash

# 기본 README.md 경로 설정
DEFAULT_README_PATH="./README.md"
readme_path=""
specific_subfolder=""

# 사용법 출력 함수
usage() {
    echo "Usage: $0 [-r README_PATH] [-n SUBFOLDER_NAME]"
    echo "  -r: Path to README.md file (default: ${DEFAULT_README_PATH})"
    echo "  -n: Specific subfolder name to create (optional)"
    echo "Available subfolder names: jongmlee, sabyun, semjeong, jimchoi, somilee"
    exit 1
}

# 커맨드 라인 인자 처리
while getopts "r:n:h" opt; do
    case $opt in
        r)
            readme_path="$OPTARG"
            ;;
        n)
            specific_subfolder="$OPTARG"
            ;;
        h)
            usage
            ;;
        \?)
            usage
            ;;
    esac
done

# README 경로가 지정되지 않았다면 기본값 사용
if [ -z "$readme_path" ]; then
    readme_path="$DEFAULT_README_PATH"
fi

# README 파일 존재 확인
if [ ! -f "$readme_path" ]; then
    echo "Error: README file not found at: $readme_path"
    exit 1
fi

# 서브폴더 배열 정의
subfolders=("jongmlee" "sabyun" "semjeong" "jimchoi" "somilee")

# 특정 서브폴더가 지정된 경우 유효성 검사
if [ ! -z "$specific_subfolder" ]; then
    is_valid=0
    for subfolder in "${subfolders[@]}"; do
        if [ "$specific_subfolder" == "$subfolder" ]; then
            is_valid=1
            break
        fi
    done
    if [ $is_valid -eq 0 ]; then
        echo "Error: Invalid subfolder name: $specific_subfolder"
        usage
    fi
fi

# README.md에서 해당 챕터의 문제들을 추출하는 함수
extract_problems() {
    chapter_num=$1
    problem_num=$2
    
    # 챕터 섹션을 찾아 문제 추출
    awk -v ch="## ${chapter_num}장:" -v prob="### 문제 ${problem_num}" '
        $0 ~ ch {p=1; next}
        p==1 && $0 ~ prob {
            print $0
            in_problem=1
            next
        }
        p==1 && in_problem==1 {
            if ($0 ~ /^###/ || $0 ~ /^##/) {
                in_problem=0
                exit
            }
            print $0
        }
    ' "$readme_path"
}

# README에서 모든 챕터 번호 추출
chapters=$(awk '/^## [0-9]+장:/ {gsub(/[^0-9]/, "", $2); print $2}' "$readme_path" | sort -n)

# 각 챕터에 대해 처리
for chapter_num in $chapters; do
    chapter_folder="chapter_${chapter_num}"
    echo "Processing chapter: $chapter_folder"
    
    # 서브폴더 생성 및 파일 생성
    for subfolder in "${subfolders[@]}"; do
        # 특정 서브폴더가 지정되었고, 현재 서브폴더가 아닌 경우 스킵
        if [ ! -z "$specific_subfolder" ] && [ "$specific_subfolder" != "$subfolder" ]; then
            continue
        fi

        subfolder_path="${chapter_folder}/${subfolder}"
        
        # 서브폴더가 없는 경우에만 처리
        if [ ! -d "$subfolder_path" ]; then
            echo "Creating subfolder: $subfolder_path"
            mkdir -p "$subfolder_path"
            
            # answer 파일 생성
            for i in {1..3}; do
                answer_file="${subfolder_path}/answer${i}.js"
                
                echo "Creating file: $answer_file"
                echo "/*" > "$answer_file"
                echo "Chapter ${chapter_num}" >> "$answer_file"
                echo "" >> "$answer_file"
                extract_problems ${chapter_num} ${i} >> "$answer_file"
                echo "*/" >> "$answer_file"
                echo "" >> "$answer_file"
                echo "// Your solution" >> "$answer_file"
            done
        else
            echo "Subfolder already exists: $subfolder_path"
        fi
    done
done

echo "Finished creating/updating folder structure."
echo "Used README file: $readme_path"