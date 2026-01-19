// Tapşırıq-01
// function hasEnding(text, ending) {
//   return text.endsWith(ending);
// }
// console.log(hasEnding("abc", "bc"));
// console.log(hasEnding("abc", "d")); 


// Tapşırıq-02
// function countCase(str) {
//   for (let char of str) {
//     if (char >= "A" && char <= "Z")
//         return str.toUpperCase();
//     else if (char >= "a" && char <= "z")
//         return str.toLowerCase();
//     else if ((char >= "A" && char <= "Z") === (char >= "a" && char <= "z"))
//         return str.toLowerCase();
//   }
// }
// console.log(countCase("coDe"));
// console.log(countCase("CODe"));
// console.log(countCase("coDE"));


// Tapşırıq-03
// function splitByFirstChar(str, word, char) {
//   const index = str.indexOf(char);
//   const index2 = word.indexOf(char);
//   return str.slice(0, index) + word.slice(index2);
// }
// console.log(splitByFirstChar("hello", "world", "l"));
// console.log(splitByFirstChar("coding", "anywhere", "n"));
// console.log(splitByFirstChar("jason", "samson", "s"));
// console.log(splitByFirstChar("wonderful", "people", "e"));


// Tapşırıq-04
// function solve(a, b) {
//   let res = "";

//   for (let i = 0; i < a.length; i++) {
//     if (!b.includes(a[i])) {
//       res += a[i];
//     }
//   }

//   for (let i = 0; i < b.length; i++) {
//     if (!a.includes(b[i])) {
//       res += b[i];
//     }
//   }

//   return res;
// }
// console.log(solve("xyab", "xzca")); 
// console.log(solve("abc", "cde"));


//Tapşırıq-05

///////////////////////////////