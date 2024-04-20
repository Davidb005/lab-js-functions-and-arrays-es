// ej 1 Max of 2 numbers
function maxOfTwoNumbers(num1, num2){
  if(num1>num2){
    console.log(num1);
  } else{
    console.log(num2)
  }
}
maxOfTwoNumbers(10,20)

// ej 2 find the longest word


const findLongestWord = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
let longestWord = "";
let maxLength = 0;

findLongestWord.forEach(word => {
    if (word.length > maxLength) {
        maxLength = word.length;
        longestWord = word;
    }
});

console.log("La palabra más larga es:", longestWord);

// ej 3 Sum numbers

function sumNumbers(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10){
  return num1+num2+num3+num4+num5+num6+num7+num8+num9+num10
}

console.log(sumNumbers(6, 12, 1, 18, 13, 16, 2, 1, 8, 10)
)

// ej 4. Numbers average

let values = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]
let sum=values.reduce((acc, curr)=> acc += curr);
let average = sum / values.length;
console.log(average)

// ej 5 arrays únicos

function uniquifyArray (array) {
  const uniqueArray =[];
  array.forEach(item=>{if(uniqueArray.indexOf(item)=== -1){uniqueArray.push(item);}});
  return uniqueArray;
}


const words2 = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

const uniqueWords = uniquifyArray(words2);
console.log(uniqueWords);

// ej 6. Find element

let words3 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"]

function doesWordExist(word){
  return words3.includes(word);
}

console.log(doesWordExist("machine"))

console.log(doesWordExist("subset"))

console.log(doesWordExist("trouble"))

console.log(doesWordExist("starting"))

console.log(doesWordExist("coding"))

console.log(doesWordExist(" "))

// ejercicio 7: Contar la repetición

const words = [  'machine',
'matter',
'subset',
'trouble',
'starting',
'matter',
'eating',
'matter',
'truth',
'disobedience',
'matter']

function howManyTimes(array2){
  const times ={};
  for(let name of array2){
    if(times[name]){
      times[name]++;
    } else {
      times[name]=1;
    }
  }
  return times
}
const nameTimes = howManyTimes(words);
console.log(nameTimes)