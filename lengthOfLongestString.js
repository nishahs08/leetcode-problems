
let str = 'nishamisha';
let char = '';
let nextChar = '';
let tempStr = '';
let arrString = [];
let matched = false;

for (let i = 0; i < str.length; i++) {
    matched = false;
    for (let j = i; j < str.length; j++) {
        for (let k = 1; k < tempStr.length; k++) {
            if (str.charAt(j) === tempStr.charAt(k)) {
                matched = true;
                break;
            }
        }
        if (!matched) {
            tempStr = tempStr + str.charAt(j);
        }
    }
    if (matched) {
        arrString.push(tempStr);
        tempStr = '';
    }
}
console.log(arrString.sort(function (a, b) {
    return a - b
}));

let str12 = arrString.reduce((longest, string) => {
    if (string.length > longest.length)
        longest = string;
    return longest
})
console.log(str12);
