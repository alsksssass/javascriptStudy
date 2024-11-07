// Q. 로그 파일에서 특정 패턴의 데이터를 추출하는 함수를 구현하세요.
//    날짜, IP 주소, 에러 메시지 등을 정규표현식으로 파싱하세요.

function logParser(log) {
    const result = {
        date: log.match(/\d{4}-\d{2}-\d{2}/)[0],
        ip: log.match(/\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}/)[0],
        errorMessage: log.match(/ERROR: (.*)$/)[1]
    }
    return result;
}

// 로그 예시
const log = "2024-11-06 14:32:45 - Client 192.168.1.1 ERROR: Connection timed out";
console.log(logParser(log));