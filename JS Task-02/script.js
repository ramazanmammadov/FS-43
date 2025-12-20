// Task-1.
let score = Number(prompt("İmtahan nəticəsini daxil edin (0-100):"));

let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

let comment;
if (score > 85) {
  comment = "əla";
} else if (score >= 50 && score <= 85) {
  comment = "yaxşı";
} else {
  comment = "kərs";
}

console.log("Qiymət:", grade);
console.log("Şərh:", comment);


// Task-2.
let temp = Number(prompt("Havanın temperaturunu daxil edin (°C):"));

if (temp > 25) {
  alert("Hava isti");
} else if (temp >= 10 && temp <= 25) {
  alert("Hava normal");
} else if (temp >= 0 && temp < 10) {
  alert("Hava soyuq");
} else {
  alert("Hava şaxtalı");
}


// Task-3.
let num = Number(prompt("Bir rəqəm daxil edin:"));

if (num % 2 === 0) {
  console.log(num + " cüt ədəddir.");
} else {
  console.log(num + " tək ədəddir.");
}


// Task-4.
let username = "Ramazan";
let password = "12345";

let inputUsername = prompt("İstifadəçi adınızı daxil edin:");
let inputPassword = prompt("Şifrənizi daxil edin:");

if (inputUsername === username && inputPassword === password) {
  console.log("Məlumatlar doğrudur. Giriş uğurludur!");
} else {
  console.log("Məlumatlar yalnışdır. Giriş uğursuzdur!");
}