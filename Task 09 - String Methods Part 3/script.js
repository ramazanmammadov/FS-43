// Tapşırıq-01
// function dnaComplement(dna) {
//   let result = "";

//   for (let i = 0; i < dna.length; i++) {
//     const c = dna[i];

//     if (c === "A") result += "T";
//     else if (c === "T") result += "A";
//     else if (c === "C") result += "G";
//     else if (c === "G") result += "C";
//   }

//   return result;
// }
// console.log(dnaComplement("ATCG"));
// console.log(dnaComplement("GTTA"));
// console.log(dnaComplement("CAGT"));


// Tapşırıq-02
// function replaceAll(text, char) {
//   if (!text || !char) return "";

//   let result = "";
//   for (let i = 0; i < text.length; i++) {
//     result += char;
//   }

//   return result;
// }
// console.log(replaceAll("hello", "*"));
// console.log(replaceAll("12345", "7"));
// console.log(replaceAll("abcd", "c"));


// Tapşırıq-03
// function extractNumber(text) {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     const c = text[i];

//     if (c >= "0" && c <= "9") {
//       result += c;
//     }
//   }
//   return +result;
// }
// console.log(extractNumber("ab1c2d3ef"));
// console.log(extractNumber("no digits here"));
// console.log(extractNumber("2026 is the year"));


// Tapşırıq-04
// function removeExclamationMarks(sentence) {
//   let result = "";

//   for (let i = 0; i < sentence.length; i++) {
//     const c = sentence[i];

//     if (c !== "!") {
//       result += c;
//     }
//   }

//   return result + "!";
// }
// console.log(removeExclamationMarks("Hi!"));
// console.log(removeExclamationMarks("Hi!!!"));
// console.log(removeExclamationMarks("!Hi"));
// console.log(removeExclamationMarks("!Hi!"));
// removeExclamationMarks("Hi! Hi!"); 
// console.log(removeExclamationMarks("Hi"));
    

// tapşırıq-05
// function removeDigits(text) {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     const c = text[i];

//     if (c < "0" || c > "9") {
//       result += c;
//     }
//   }

//   return result;
// }

// console.log(removeDigits("! !"));
// console.log(removeDigits("123456789"));
// console.log(removeDigits("This looks5 grea8t!"));
 

// Tapşırıq-06
// function alternatingString(n) {
//   let result = "";

//   for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//       result += "1";
//     } else {
//       result += "0";
//     }
//   }

//   return result;
// }
// console.log(alternatingString(6));
// console.log(alternatingString(4));
// console.log(alternatingString(12));


// Tapşırıq-07
// function isAllUpperCase(str) {
//   return str === str.toUpperCase();
// }
// console.log(isAllUpperCase("c"));
// console.log(isAllUpperCase("C"));
// console.log(isAllUpperCase("hello I AM DONALD"));
// console.log(isAllUpperCase("HELLO I AM DONALD"));
// console.log(isAllUpperCase("ACSKLDFJSgSKLDFJSKLDFJ"));
// console.log(isAllUpperCase("ACSKLDFJSGSKLDFJSKLDFJ"));


// Tapşırıq-08
// function repeatString(n, str) {
//   return str.repeat(n);
// }
// console.log(repeatString(6, "I"));
// console.log(repeatString(4, "Hello"));
// console.log(repeatString(3, "abc"));


// Tapşırıq-09
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("world"));
// console.log(reverseString("word"));  


// Tapşırıq-10
// function removeSpaces(str) {
//   let res = "";

//   for (let i = 0; i < str.length; i++) {
//     const c = str[i];

//     if (c !== " ") {
//       res += c;
//     }
//   }

//   return res;
// }
// console.log(removeSpaces("Lorem ipsum dolar sit"));
// console.log(removeSpaces("8aaaaa dddd r     "));


// Tapşırıq-11

//////////////////////////////////


// Tapşırıq-12

//////////////////////////////////

// Tapşırıq-13

/////////////////////////////////

// Tapşırıq-14
// function sumDigits(str) {
//   let sum = 0;

//   for (let i = 0; i < str.length; i++) {
//     const c = str[i];

//     if (c >= "0" && c <= "9") {
//       sum += +(c);
//     }
//   }
//   return sum;
// }
// console.log(sumDigits("a1b2c3"));   
// console.log(sumDigits("h3llo5"));    
// console.log(sumDigits("no digits")); 


// Tapşırıq-15
// function reverseWords(sentence) {
//   return sentence.split(" ").reverse().join(" ");
// }
// console.log(reverseWords("The sky is blue"));
// console.log(reverseWords("Hello World"));