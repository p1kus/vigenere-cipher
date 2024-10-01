const plainText: string = "Hello";
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
  matchChars(splitText);
  return splitText;
};

const matchChars = (stringArray: string[]): any => {
  stringArray.forEach((char) => {
    let match;
    match = alphabet.indexOf(char);
    console.log(match);
  });
};

const cipher = (plainText: string, keyword: string): Number[] => {
  const cipherText = [1, 2];
  keyword = matchLength(plainText, keyword);
  let splitPlain = splitter(plainText);
  let splitKey = splitter(keyword);
  console.log(splitPlain);
  console.log(splitKey);

  return cipherText;
};

cipher(plainText, keyword);
// const splitText = plainText.split("");

// const cipher = (cipher, keyword) => {};
