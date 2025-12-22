// Task-1
console.log("My name is Murad");


// Task-2.
const name = 'Ramazan';

console.log(`My name is ${name}`);


// Task-3.

// let person = "sdzexcfygjvj";
// let $add = "xrcytvuhijk";


// Task-4.
let bookPrice = 750;
let bookAmount = 14;

console.log(bookPrice * bookAmount);


// Task-5.
let kmhSpeed = 220;
let msSpeed = kmhSpeed / 3.6;

console.log(msSpeed);


// Task-6.
let birthDate = +prompt("Doğum tarixini il olaraq daxil edin(YYYY)");
let result = (2025 - birthDate) * 365;

console.log(result);


// Task-7.
let num = 17;

let powerFive = num ** 5;

let remainder = num % 3;

console.log("Ədədin 5-ci dərəcə qüvvəti:", powerFive);
console.log("3-ə bölünmədən qalan qalığı:", remainder);


// Task-8.
let firstName = "Alan";
let lastName = "Turing";

console.log(`Sizin adınız ${firstName} ${lastName}. Tanışlığımıza çox şadam!`);


// Task-9.
let Name = prompt("Zəhmət olmasa adınızı daxil edin:");

console.log(`Salam, ${Name}!`);


// Task-10.
let num1 = +prompt("Birinci ədədi daxil edin:");
let num2 = +prompt("İkinci ədədi daxil edin:");

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

console.log("Toplama:", sum);
console.log("Çıxma:", difference);
console.log("Vurma:", product);
console.log("Bölmə:", quotient);


// Task-11.
let rate = 10;

let principal = +prompt("Əmanətin məbləğini daxil edin (AZN):");
let years = +prompt("Müddəti daxil edin (il olaraq):");

let profit = (principal * rate * years) / 100;
let total = principal + profit;

console.log(`${years} il müddətində qoyduğunuz məbləğin ${rate}% dərəcəsi ilə gözlənilən məbləğ ${total} AZN-dir.`);


// Task-12.
let age = +prompt("Yaşınızı daxil edin:");

if (age < 16) {
  alert("Access denied");
} else {
  alert("Access granted");
}


// Task-13.
let year = +prompt("Bir il daxil edin:");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " ili uzun ildir (366 gün).");
} else {
  console.log(year + " ili uzun il deyil (365 gün).");
}


// Task-14.
let id = prompt("enter product id:");

switch (id) {
  case "1":
    alert("Available 10 pcs.");
    break;
  case "2":
    alert("Available 256 pcs.");
    break;
  case "3":
    alert("Available 53 pcs.");
    break;
  case "4":
    alert("There are 3 available.");
    break;
  default:
    alert("Out of stock");
}


// Task-15.
let monthNumber = +prompt("Ayın nömrəsini daxil edin (1-12):");

switch (monthNumber) {
  case 1:
    console.log("Yanvar");
    break;
  case 2:
    console.log("Fevral");
    break;
  case 3:
    console.log("Mart");
    break;
  case 4:
    console.log("Aprel");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("İyun");
    break;
  case 7:
    console.log("İyul");
    break;
  case 8:
    console.log("Avqust");
    break;
  case 9:
    console.log("Sentyabr");
    break;
  case 10:
    console.log("Oktyabr");
    break;
  case 11:
    console.log("Noyabr");
    break;
  case 12:
    console.log("Dekabr");
    break;
  default:
    console.log("Düzgün ay nömrəsi daxil edilməyib!");
}