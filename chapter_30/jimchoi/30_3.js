/**
 * 특정 연도와 월을 입력받아 해당 월의 달력을 콘솔에 출력하는 함수를 만드세요.\
 *  주말은 다른 색으로 표시되도록 구현하세요.
 */

const printCalender = (y, m) => {
  const start = new Date(y, m - 1, 1);
  const end = new Date(y, m, 0);

  console.log(`
${y}년${m}월

\u001b[31m일 \u001b[0m월 화 수 목 금 \u001b[34m토 `);

  // const empty = '\u001b[0m0';

  let output = "";
  output += output.padStart(start.getDay() * 3, " "); // 공백맞추기

  for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
    const curr = day.getDate().toString();
    if (day.getDate().toString().length < 2) output += " ";
    if (day.getDay() == 6) output += `\u001b[34m${curr}\n`;
    else if (day.getDay() == 0) output += `\u001b[31m${curr} `;
    else output += `\u001b[0m${curr} `;
  }

  console.log(output);
};

printCalender("2024", "11");
