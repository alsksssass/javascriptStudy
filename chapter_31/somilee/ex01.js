// Q. 신용카드 번호를 검증하는 정규표현식을 작성하세요.
//    다양한 카드사의 포맷(VISA, MasterCard, AMEX)을 지원해야 합니다.
// VISA: 4로 시작하고, 13자리 또는 16자리 숫자
// MasterCard: 51-55로 시작하거나, 2221-2720 범위의 숫자로 시작하며, 16자리 숫자
// AMEX: 34 또는 37로 시작하고, 15자리 숫자

function checkCreditCardNum(company, num) {
    switch(company) {
        case VISA:
            console.log(/^4(\d{12}|\d{15})/.test(num));
            break;
        case MasterCard:
            console.log(/(^[51-55]|^[2221-2720])\d{16}/.test(num));
            break;
        case AMEX:
            console.log(/(^34|^37)\d{15}/.test(num));
            break;
        default:
            console.log("Input Error");
    }
}