const plainText: string = "Hello";
//LOOK OUT FOR SPACES, FIX THAT

let keyword: string = "key";

const alphabet: string[] = [
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

const matchLength = (plainString: string, keyString: string): string => {
  const repeatCount = Math.ceil(plainString.length);
  keyString = keyString.repeat(repeatCount);
  keyString = keyString.slice(0, plainString.length);
  return keyString;
};

const splitter = (string: string): string[] => {
  string = string.toLocaleUpperCase();
  let splitText = string.split("");
  return splitText;
};

const matchCharsToNum = (stringArray: string[]): number[] => {
  let result: number[] = [];
  stringArray.forEach((char) => {
    let match;
    match = alphabet.indexOf(char);
    result.push(match);
  });
  return result;
};

const cipher = (num: number, keyNum: number) => {
  let cipherNumRepresentation: number = (num + keyNum + 26) % 26;
  return cipherNumRepresentation;
};

const numToChar = (numArr: number[]): string => {
  let cipheredString: string = "";
  numArr.forEach((item) => {
    cipheredString += alphabet[item];
  });
  return cipheredString;
};

const prepareStrings = (plainText: string, keyword: string): number[] => {
  keyword = matchLength(plainText, keyword);
  let splitPlain = splitter(plainText);
  let plainNumRepresentation = matchCharsToNum(splitPlain);
  let splitKey = splitter(keyword);
  let keyNumRepresentation = matchCharsToNum(splitKey);
  let cipherText: number[] = plainNumRepresentation.map((num, index) => {
    const keyNum = keyNumRepresentation[index];
    cipherText = numToChar(cipher(num, keyNum));
    // fun to know about the index trick
    // let cipherNumArr = cipher(num, keyNum);
  });
  numToChar(cipherText);
  //   cipherText = numToChar(cipherText);
  return cipherText;
};

console.log(prepareStrings(plainText, keyword));
// const splitText = plainText.split("");

// const cipher = (cipher, keyword) => {};
