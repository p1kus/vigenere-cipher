import { cipherText, processData } from "./cipher.js";
const domElements = () => {
    const cipherInputElement = document.querySelector("#cipherInput");
    if (!cipherInputElement) {
        console.error("Cipher Input Element does not exist in document");
    }
    const keywordInputElement = document.querySelector("#keywordInput");
    if (!keywordInputElement) {
        console.error("Keyword input element does not exist in document");
    }
    const cipherButtonElement = document.querySelector("#cipherButton");
    if (!cipherButtonElement) {
        console.error("Cipher button element does not exist in document");
    }
    const cipherResultHeaderElement = document.querySelector(".result-header");
    if (!cipherResultHeaderElement) {
        console.error("Cipher result header element does not exist in document");
    }
    const cipherResultTextElement = document.querySelector(".result-text");
    if (!cipherResultTextElement) {
        console.error("Cipher result header element does not exist in document");
    }
    return {
        cipherInputElement,
        keywordInputElement,
        cipherButtonElement,
        cipherResultHeaderElement,
        cipherResultTextElement,
    };
};
const { cipherInputElement, keywordInputElement, cipherButtonElement, cipherResultHeaderElement, cipherResultTextElement, } = domElements();
console.log(cipherInputElement);
const domEvents = () => {
    let plaintext = "";
    let keyword = "";
    cipherInputElement.addEventListener("keyup", () => {
        plaintext = cipherInputElement.value;
    });
    keywordInputElement.addEventListener("keyup", () => {
        keyword = keywordInputElement.value;
    });
    cipherButtonElement.addEventListener("click", (e) => {
        e.preventDefault();
        processData(plaintext, keyword);
        const result = cipherText(plaintext, keyword);
        cipherResultHeaderElement.classList.remove("hidden");
        cipherResultTextElement.classList.remove("hidden");
        cipherResultTextElement.textContent = result;
    });
};
const main = () => {
    domElements();
    domEvents();
};
main();
