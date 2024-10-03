"use strict";
const plainText = "Hello";
//LOOK OUT FOR SPACES, FIX THAT
let keyword = "key";
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
const matchLength = (plainString, keyString) => {
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
const prepareStrings = (plainText, keyword) => {
    keyword = matchLength(plainText, keyword);
    let splitPlain = splitter(plainText);
    let plainNumRepresentation = matchCharsToNum(splitPlain);
    let splitKey = splitter(keyword);
    let keyNumRepresentation = matchCharsToNum(splitKey);
    return { plainNumRepresentation, keyNumRepresentation };
};
let { plainNumRepresentation, keyNumRepresentation } = prepareStrings(plainText, keyword);
const cipherText = () => {
    let cipherArr = plainNumRepresentation.map((num, index) => {
        const keyNum = keyNumRepresentation[index];
        let cipherCombinedArr = cipher(num, keyNum);
        return cipherCombinedArr;
    });
    let cipheredString = numToString(cipherArr);
    return cipheredString;
};
const decipherText = () => {
    let cipheredText = cipherText();
    let cipheredNumRepresentation = matchCharsToNum(splitter(cipheredText));
    let decipherArr = cipheredNumRepresentation.map((num, index) => {
        const keyNum = keyNumRepresentation[index];
        let decipherCombinedArr = decipher(num, keyNum);
        return decipherCombinedArr;
    });
    let decipheredString = numToString(decipherArr);
    return decipheredString;
};
