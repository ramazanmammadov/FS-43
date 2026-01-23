// Task-1
// const names = ["Əli", "Tahir", "Aytən"];
// names.push("Sabir");
// names.shift();

// console.log(names); 


// Task-2
// const names = ["Əli", "Tahir", "Aytən"];
// names[1] = "Classified";

// console.log(names);


// Task-3
// const originalArray = [1, 2, 3, 4, 5];
// const newArray = originalArray.map(num => num * 2);

// console.log(newArray);
// console.log(originalArray);


// Task-4
// const arr = ['New Hope', 'The Empire Strikes Back', 'Return of the Jdi'];

// arr.forEach((item, index) => {
//   console.log(`Episode ${index + 4}: ${item}`);
// });


// Task-5
// const input = prompt("Vergüllə ayrılmış beş ədəd daxil edin:");

// const numbers = input.split(",");
// const min = Math.min(...numbers);

// console.log(min);


// Task-6
// const text = "32, 31, 34, 36, 31";

// const arr = text.split(",");
// const result = arr.join(";");

// console.log(result);


// Task-7
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = arr.filter(num => num % 2 === 0);

// console.log(evenNumbers);


// Task-8
// const names = ["Əli", "Tahir"];
// const ages = [20, 21];

// const result = names.concat(ages);

// console.log(result);


// Task-9
// const numbers = [5, 8, 3, 12, 6];

// const max = Math.max(...numbers);
// const min = Math.min(...numbers);

// const difference = max - min;

// console.log(difference);


// Task-10
// const words = ["alma", "armud", "heyva"];
// const upperWords = words.map(word => word.toUpperCase());

// console.log(upperWords);


// Task-11
// const numbers = [3, -1, 5, -7, 2];
// const result = numbers.map(num => num < 0 ? 0 : num);

// console.log(result);


// Task-12
const numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach(num => {
  sum += num;
});

console.log(sum);