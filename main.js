// урок 1

// Задание номер-1

let yourname = prompt('Ваше имя?');
let surname =prompt('Ваше имя?');

alert('Здравствуйте, ' + yourname + " " + surname);

// Задание номер-2

let number1 = prompt('Первое число');
let number2 = prompt("Второе число");

let a = (number1 > number2) ? alert("Первое число больше"):
  (number1 < number2) ? alert("Второе число больше"):
  (number1 == number2) ? alert("Оба числа равны"):
alert(a);

//  Задание номер-3

const color = prompt("Напишите цвет сфетофора");

let ab = (color == "Зеленный") ? alert("Идти"):
  (color == "Красный") ? alert("Стоять!"):
  (color == "Желтый") ? alert("Ждать..."):
alert(ab);


// урок 2

// // задание 1

let str = "*";
while (str.length<=7){
    console.log(str + "\n");
    str+="*";
}

// // задание 2

for( let number = 1; number <= 100; number++ )
{  str = ''; if( number%3 == 0 ) { str += 'Fizz';
 } if( number%5 == 0 ){  str += 'Buzz';}console.log( str ? str : number );}

// задание 3

let number = prompt("Your number");

function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
   alert(sumTo(number) );

//   урок 3
// задание 1

let min = function(a,b){
    if (a < b){
      return a;
    }else{
      return b;
    }
  }
  // задание 2 сразу показывает сколько символов "a"
  
let addc = prompt("...");
  alert(addc.match(/a/g) || []).length

  // задание 3

let sum = [1,2,3,4,5].reduce((a, b) => a + b, 0);
let result = sum / [1,2,3,4,5].length;
console.log(result);

//   урок 4

// задание 1

let numbers = [2,5,7];
console.log(numbers.map(function(num){ return num * 2;}));

// заданик 2

let arr = [2,3,5,6,8,10];
console.log(arr.filter(function(even){ return even % 2 == 0;}));

// задание 3

console.log(arr.reduce(function(sum,elem){ if (elem >= 0){ return sum + elem;}else{return sum; }
}));

// задание 4
let car = ["honda","mazda","lexus","toyota","volkswagen","bmw",];

console.log(car.map(car => car.substr(0,3)));

// задание 5

console.log(car.filter(i =>/a$/.exec(i)));

// задание 6
 
console.log(car.reduce(function(a,b){ return a.length > b.length ? a:b}));