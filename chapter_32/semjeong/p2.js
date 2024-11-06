function parseMd2Html(md) {
  return md.replace(/[*-] (.*)(\n|$)/g, '<li>$1</li>$2')
    // .replace(/(<li>(?:[^<>]*<\/li>[^<>]*<li>)*<\/li>)/g, '<ul>$1</ul>')
    .replace(/(<li>(?:[\w\d\s]*<\/li>\n?<li>[\w\d\s]*)*<\/li>)/g, '<ul>\n$1\n</ul>')
    .replace(/# (.*)(\n|$)/g, '<h1>$1</h1>$2')
    .replace(/> (.*)(\n|$)/g, '<blockquote>$1</blockquote>');
}

console.log(parseMd2Html(`
# title
* 1
* 2
- 3
- 4
> quote
`));

/*
# 헤더 1
## 헤더 2
### 헤더 3

**굵은 글씨**  
*기울임 글씨*  
~~취소선~~

---

- 리스트 아이템 1
  - 서브 아이템 1
  - 서브 아이템 2

1. 번호 있는 리스트 1
2. 번호 있는 리스트 2

[링크 텍스트](https://example.com)

```python
# 코드 블럭
def hello_world():
    print("Hello, World!")

> 이것은 인용문입니다.
*/
