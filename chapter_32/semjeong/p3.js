function removeHTMLTag(html) {
    // return html.replace(/<(.*) ?.*>(.*\n*)<\/\1>/g, '$2');
    return html.replace(/<[^<>]*>/g, '');
}

console.log(removeHTMLTag(`<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>간단한 HTML 예제</title>
</head>
<body>
    <h1>안녕하세요, HTML 예제입니다!</h1>
    <p>이것은 HTML로 작성한 간단한 문단입니다.</p>

    <ul>
        <li>리스트 아이템 1</li>
        <li>리스트 아이템 2</li>
        <li>리스트 아이템 3</li>
    </ul>

    <a href="https://example.com">예시 링크</a>
</body>
</html>`));

/*
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>간단한 HTML 예제</title>
</head>
<body>
    <h1>안녕하세요, HTML 예제입니다!</h1>
    <p>이것은 HTML로 작성한 간단한 문단입니다.</p>

    <ul>
        <li>리스트 아이템 1</li>
        <li>리스트 아이템 2</li>
        <li>리스트 아이템 3</li>
    </ul>

    <a href="https://example.com">예시 링크</a>
</body>
</html>
*/
