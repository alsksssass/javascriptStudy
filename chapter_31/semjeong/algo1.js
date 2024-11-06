// 신규 아이디 추천

function solution(new_id) {
    let id = new_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/[.]{2,}/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/g, 'a')
        .slice(0, 15).replace(/\.$/g, '')
    ;
    // if (id.length == 0) id = 'a';
    // if (id.length >= 16) id = id.match(/.{15}/)[0].replace(/\.$/g, '');
    if (id.length <= 2) id += id[id.length - 1].repeat(3 - id.length);
    return id;
}
