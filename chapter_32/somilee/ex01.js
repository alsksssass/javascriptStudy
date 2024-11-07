// Q. 이메일 주소를 파싱하는 함수를 작성하세요. 
// 정규표현식과 문자열 메서드를 사용하여 사용자 이름, 도메인, 최상위 도메인을 분리하세요.

function emailParser(email) {
    const result = {
        user: email.match(/(.*?)@/)[1],
        domain: email.match(/@(.*)\./)[1],
        topDomain: email.match(/\.(.*?)$/)[1]
    }
    return result;
}

const email = "somin990202@naver.com";
console.log(emailParser(email));