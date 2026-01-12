// Task-01

// const client = {
//     fullName: "Vasif Yusifov",
//     creditLimit: 5000,
//     balans: 2500,
//     percentOfMinPayment: 10,
//     getBalance: function() {
//         if (this.balans < 0) {
//             return `Borcunuz: ${-this.balans} AZN`;
//         }
//         else if (this.balans > 0) {
//             return `Balansınız: ${this.balans} AZN`;
//         }
//         else {
//             return "Balansınız sıfırdır.";
//         }
//     },
//     getMinPaymant: function() {
//         if (this.balans < 0) {
//             const minPayment = (-this.balans) * (this.percentOfMinPayment / 100);
//             return `Minimum ödənişiniz: ${minPayment} AZN`;
//         }
//         else {
//             return "Sizin borcunuz yoxdur.";
//         }
//     },
//     withdraw: function(amount) {
//         if (amount <= this.creditLimit + this.balans) {
//             this.balans -= amount;
//             return `Uğurla ${amount} AZN çəkildi. Yeni balans: ${this.balans} AZN`;
//         }
//         else {
//             return "Çəkilmə məbləği kredit limitinizi aşır.";
//         }
//     },
//     refill: function(amount) {
//         this.balans += amount;
//         return `Uğurla ${amount} AZN əlavə edildi. Yeni balans: ${this.balans} AZN`;
//     }
// }

// console.log(client.getBalance());
// console.log(client.getMinPaymant());
// console.log(client.withdraw(2000));
// console.log(client.refill(1500));


// Task-02

const calculator = {
  memory: 0,
  sum(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return b === 0 ? "0-a bölmək olmaz" : a / b;
  },
  clearMemory() {
    this.memory = 0;
  },
  addToMemory(value) {
    this.memory += value;
  },
  recallMemory() {
    return this.memory;
  }
}

console.log(calculator.sum(5, 3));      
console.log(calculator.minus(10, 4)); 
console.log(calculator.multiply(6, 7)); 
console.log(calculator.divide(20, 4)); 
console.log(calculator.divide(10, 0)); 
console.log(calculator.addToMemory(25));
console.log(calculator.recallMemory()); 