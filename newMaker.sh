#!/bin/bash

# 챕터별 문제 내용을 담을 배열 생성
declare -A chapter_contents

# MD 파일에서 챕터와 문제 내용 추출
extract_contents() {
    local current_chapter=""
    local problem_number=0
    
    while IFS= read -r line; do
        # 새로운 챕터 시작 확인 (## XX장: 으로 시작하는 라인)
        if [[ $line =~ ^##[[:space:]]([0-9]+)장:[[:space:]](.+)$ ]]; then
            current_chapter="${BASH_REMATCH[1]}"
            problem_number=0
        # 문제 번호 확인 (### 문제 X로 시작하는 라인)
        elif [[ $line =~ ^###[[:space:]]문제[[:space:]]([0-9]+)$ ]] && [ ! -z "$current_chapter" ]; then
            problem_number="${BASH_REMATCH[1]}"
        # 문제 내용 저장
        elif [ ! -z "$current_chapter" ] && [ $problem_number -gt 0 ] && [ ! -z "$line" ] && [[ ! $line =~ ^### ]]; then
            key="${current_chapter}_${problem_number}"
            chapter_contents[$key]+="$line"$'\n'
        fi
    done < "README.md"  # MD 파일 이름을 적절히 변경하세요
}

# 현재 폴더에서 chapter_XX 형태의 폴더 찾기
last_chapter=$(ls -d chapter_* 2>/dev/null | sort -V | tail -n 1)

# 만약 폴더가 없다면 기본값으로 chapter_00 설정
if [ -z "$last_chapter" ]; then
    next_number=0
else
    # 마지막 폴더 이름에서 숫자 추출
    last_number=$(echo "$last_chapter" | sed 's/chapter_//')
    next_number=$((10#$last_number + 1))
fi

# 새로운 폴더 이름 생성 (숫자를 2자리로 맞추기)
new_folder=$(printf "chapter_%02d" "$next_number")

# MD 파일 내용 추출
extract_contents

# 새로운 폴더 생성
mkdir "$new_folder"
echo "Created folder: $new_folder"

# 서브폴더 생성 및 문제 파일 생성
subfolders=("jongmlee" "sabyun" "semjeong" "jimchoi" "somilee")
chapter_key="$next_number"

for subfolder in "${subfolders[@]}"; do
    mkdir "$new_folder/$subfolder"
    echo "Created subfolder: $new_folder/$subfolder"
    
    # 각 문제에 대한 JS 파일 생성
    for problem in {1..3}; do
        key="${chapter_key}_${problem}"
        content="${chapter_contents[$key]}"
        
        # JS 파일 생성 및 내용 작성
        cat > "$new_folder/$subfolder/answer$problem.js" << EOL
/*
문제 $problem
${content}
*/

// 여기에 답안을 작성하세요

EOL
        echo "Created file: $new_folder/$subfolder/answer$problem.js"
    done
done