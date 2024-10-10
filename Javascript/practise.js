

//console.log("Using a for loop");

//const b = 10;

  /*for (let i = 0; i <=5; i++) {
   // console.log(i);
    
  }*/

  /* console.log("using a while loop");
   
  let i = 1;
  while (i<=5) {
    console.log(i);
    i++;
  }

  console.log("using do while loop");
  

  let j=1;
  do{
    console.log(j);
    j++;
  }while (j<=5) {
    
  }


  function addNumber(a,b) {
    return a+b;
    
  }
  console.log(addNumber(5,10));
  
  let calculateAreaOfRectangle = (wirth,height) => {
       return wirth*height;
  }
  let area = calculateAreaOfRectangle(5,70);

  console.log("Area of Rectangle is : "+area);

/*

let str = "hello ";

function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString(str));


function checkEvenOdd(num) {
    if (num % 2 == 0) {
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(checkEvenOdd(120));


let isLeapYear = (year) => {
  if ((year % 4 ===0 && year % 100 !==0) ||
  year % 400 === 0){
    return true;
  }
  else{
    return false;
  }
}

console.log(isLeapYear(2026));

let arr = [20, 30, 40, 10, 8];

let sum =0;
for (let i = 0; i < arr.length; i++) {
   sum+= arr[i];
  
}
console.log(sum);


let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022
}

car.startEngine = function(){
  console.log("Engine Started");
  
}
car.startEngine();


/*
let container = document.getElementById
("container");
let button = document.createElement
("button");
button.textContent = 'click me'
container.appendChild(button); 

function factorial(num) {
   if (num ===0 || num === 1) {
     return 1;
    
   }
   else{
    let fact =1;
    for (let i = 1; i < num; i++) {
      fact*=i;
      
    }
    return fact;
   }
}

console.log(factorial(5));

*/
/*

let arr = [10,15,20,30,35,40];

function filterEvenNumber(arr) {
  return arr.filter(num => num % 2 ===0);
  
}

console.log(filterEvenNumber(arr));
console.log(arr);



function duobleArrayElements(arr) {
 return arr.map((num)=> num *2)
}

let arr =[10,20,30,40,50]
console.log(duobleArrayElements(arr));
console.log(arr);

*/

  /*

function findLargestElement(arr){
 return arr.reduce((max,current)=>
  current > max ? current :max)
 }

let arr = [10,20,30,40,50]

let reduce = findLargestElement(arr);
console.log(reduce);
*/

function removeElementFromArray(arr,target){
 return arr.filter(item => item !== target);
}
let arr = [10,10,20,20,30,10]
let target = 10;

let removed =removeElementFromArray(arr,target);

console.log(removed);




function factorial(n) {
  if (n===1 ) {
    return 1;
    
  }else{
    return n*(factorial(n-1))
  }
  
}
 console.log(factorial(5));
 


 function fibonacci(n) {
  if (n<=1) {
    return n;
  }else{
    return fibonacci(n-1)+fibonacci(n-2)
  }
  
 }
 console.log(fibonacci(5));
 

function CreateCounter() {
  let count=0;
  return ++count
}
console.log(CreateCounter);

console.log(CreateCounter());
console.log(CreateCounter());
