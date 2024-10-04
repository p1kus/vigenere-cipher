const plaintext = "";
const keyword = "";
export const processData = (plaintext, keyword) => {
    plaintext = plaintext;
    keyword = keyword;
};
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
export const matchLength = (plainString, keyString) => {
    const repeatCount = Math.ceil(plainString.length);
    keyString = keyString.repeat(repeatCount);
    keyString = keyString.slice(0, plainString.length);
    return keyString;
};
const splitter = (string) => {
    string = string.toLocaleUpperCase();
    let splitText = string.split("");
    return splitText;
};
const matchCharsToNum = (stringArray) => {
    let result = [];
    stringArray.forEach((char) => {
        let match;
        match = alphabet.indexOf(char);
        result.push(match);
    });
    return result;
};
const cipher = (num, keyNum) => {
    let cipherNumRepresentation = (num + keyNum + 26) % 26;
    return cipherNumRepresentation;
};
const decipher = (num, keyNum) => {
    let decipherNumRepresentation = (num - keyNum + 26) % 26;
    return decipherNumRepresentation;
};
const numToString = (numArr) => {
    let cipheredString = "";
    numArr.forEach((item) => {
        cipheredString += alphabet[item];
    });
    return cipheredString;
};
export const prepareStrings = (plainText, keywordInput) => {
    const keyword = matchLength(plainText, keywordInput);
    let splitPlain = splitter(plainText);
    let plainNumRepresentation = matchCharsToNum(splitPlain);
    let splitKey = splitter(keyword);
    let keyNumRepresentation = matchCharsToNum(splitKey);
    return { plainNumRepresentation, keyNumRepresentation };
};
export const cipherText = (plaintext, keyword) => {
    let { plainNumRepresentation, keyNumRepresentation } = prepareStrings(plaintext, keyword);
    let cipherArr = plainNumRepresentation.map((num, index) => {
        const keyNum = keyNumRepresentation[index];
        let cipherCombinedArr = cipher(num, keyNum);
        return cipherCombinedArr;
    });
    let cipheredString = numToString(cipherArr);
    return cipheredString;
};
export const decipherText = () => {
    let { keyNumRepresentation } = prepareStrings(plaintext, keyword);
    let cipheredText = cipherText(plaintext, keyword);
    let cipheredNumRepresentation = matchCharsToNum(splitter(cipheredText));
    let decipherArr = cipheredNumRepresentation.map((num, index) => {
        const keyNum = keyNumRepresentation[index];
        let decipherCombinedArr = decipher(num, keyNum);
        return decipherCombinedArr;
    });
    let decipheredString = numToString(decipherArr);
    return decipheredString;
};
