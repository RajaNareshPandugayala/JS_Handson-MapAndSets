
//Q1
function removeDuplicates(str) {
    let uniqueChars = '';
    for (let char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars += char;
        }
    }
    return uniqueChars;
}

const inputStr1 = 'abcadeecfb';
const output1 = removeDuplicates(inputStr1);
document.getElementById('output1').textContent = output1;
console.log(output1);


//Q2
function countAlphabet(str) {
    const charCountMap = new Map();
    for (let char of str) {
        if (charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char) + 1);
        } else {
            charCountMap.set(char, 1);
        }
    }
    return charCountMap;
}

const inputStr2 = 'abcadeecfb';
const charCountMap = countAlphabet(inputStr2);
const output2 = [];
charCountMap.forEach((count, char) => {
    output2.push(`${char}=${count}`);
});
document.getElementById('output2').textContent = output2.join('\n');
console.log(charCountMap);
