// 파일명 정렬

function solution(files) {
    return files.map(v => /([\D]+)([\d]+)(.*)/.exec(v)).sort((a, b) => {
        a[1] = a[1].toLowerCase();
        b[1] = b[1].toLowerCase();
        if (a[1] === b[1]) {
            return parseInt(a[2]) - parseInt(b[2]);
        }
        return a[1].localeCompare(b[1]);
    }).map(v => v[0]);
}
