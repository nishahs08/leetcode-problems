let str = 'tyualayalaiuikj';
let tempStr = '';
let matched = false;
let arrString = [];

for (let i = 0; i < str.length; i++) {
    for (let j = i; j <= str.length; j++) {
        tempStr = tempStr + str.charAt(j);
        if (pallindrome(tempStr) && tempStr.length > 1) {
            arrString.push(tempStr);
        }
    }
    tempStr = '';
}

let str12 = arrString.reduce((longest, string) => {
    if (string.length > longest.length)
        longest = string;
    return longest
})

console.log('longestString', str12)
function pallindrome(str) {
    if (str === reverse(str)) {
        return true;
    } else {
        return false;
    }
}
function reverse(str) {
    let reverseStr = ''
    for (let i = 0; i < str.length; i++) {
        reverseStr = str.charAt(i) + reverseStr
    }
    return reverseStr;
}




