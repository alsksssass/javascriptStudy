// Q. URL을 파싱하여 프로토콜, 호스트, 경로, 쿼리 파라미터, 해시 등을 
//    분리하는 함수를 정규표현식을 사용하여 구현하세요.
// <프로토콜>://<호스트>/<경로>?<쿼리 파라미터>#<해시></해시>

function urlParser(url) {
    const result = {
        protocol: url.match(/(.*?):\/\//)[1],
        host: url.match(/\/\/(.*?)(\/|\?|#|$)/)[1],
        path: url.match(/\/\/[^\/]+(\/[^?#]*)/)[1],
        query: url.match(/\?([^#]*)/)[1],
        hash: url.match(/#(.*)$/)[1]
    };
    return result;
}

const url = "https://example.com/path/to/page?name=JohnDoe&age=25#section2";
console.log(urlParser(url));