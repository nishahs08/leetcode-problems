let num = 98767;
let reverse;

function numberOfDigits(number) {
    let digit = 0;
    let duplicateNum = number;
    let reverse = 0;
    while (duplicateNum != 0) {
        digit++;
        digit = parseInt(duplicateNum % 10);
        reverse = reverse * 10 + digit;
        duplicateNum = parseInt(duplicateNum / 10);
    }
    console.log(reverse);
}

numberOfDigits(1234);
