// Task-04 
// const price = prompt("Qiyməti daxil edin (məs: 530.90):");

// const parts = price.split(".");
// const wholePart = parts[0];
// const fractionalPart = parts[1] || "00";

// console.log(`${wholePart} manat ${fractionalPart} qəpik`);


// Task-05
// const fullName = prompt("soyad, ad və ata adını daxil edin (məs: Məmmədov Ramil Qurban):");

// const nameParts = fullName.split(" ");
// const firstName = nameParts[1].charAt(0);
// const fatherName = nameParts[2].charAt(0);

// console.log(`${nameParts[0]} ${firstName}. ${fatherName}.`);


// Task-06
// const dateInput = prompt("«YYYY.MM.DD» formatında tarix daxil edin:");

// const months = ["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"];

// const dateParts = dateInput.split(".");
// const monthIndex = parseInt(dateParts[1], 10) - 1;
// const monthNumber = months[monthIndex];

// console.log(`${dateParts[2]} ${monthNumber} ${dateParts[0]}`);


// Task-07
// function findFirstDotIndex(text) {
//     return text.indexOf(".");
// }

// console.log(findFirstDotIndex("Salam. Necəsiz?"));


// Task-08



// Task-09
// function repeatedSymbolCounter(string, char) {
//     let count = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === char) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(repeatedSymbolCounter("exspresso", "s"));


// Task-10
// function capitalize(str) {
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
// }

// console.log(capitalize("lOreM")); 
// console.log(capitalize("IPSUM"));


// Task-11
// function snakeToKebab(str) {
//     return str.toLowerCase().replaceAll("_", "-");
// }

// console.log(snakeToKebab("HELLO_WORD")); 
// console.log(snakeToKebab("JavaScript_is_Awesome"));


// Task-12
// function changeFirstWord(word, firstLetter) {
//     return firstLetter + word.slice(1);
// }

// console.log(changeFirstWord("Kamil", "Ş"));


// Task-13
// function removeCharacterFromString(str) {
//     return str.slice(1);
// }

// console.log(removeCharacterFromString("Lorem ipsum dolar sit amet"));
// console.log(removeCharacterFromString("JavaScript is awesome"));


// Task-14
