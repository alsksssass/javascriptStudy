/*
Chapter 46

### 문제 3
제너레이터를 사용하여 비동기 작업을 동기적으로 처리하는 예제를 구현하세요.

*/

function* fetchData() {
    try {
        const user = yield fetch('api/user');
        const posts = yield fetch(`api/posts/${user.id}`);
        const comments = yield fetch(`api/comments/${posts[0].id}`);
        
        return { user, posts, comments };
    } catch (error) {
        console.error('데이터 fetching 실패:', error);
    }
}

// 제네레이터 실행을 제어하는 함수
function runGenerator(generator) {
    const iterator = generator();
    
    function handle(result) {
        if (result.done) return result.value;
        
        return Promise.resolve(result.value)
            .then(res => res.json())
            .then(data => handle(iterator.next(data)))
            .catch(error => iterator.throw(error));
    }
    
    return handle(iterator.next());
}







// ????????????