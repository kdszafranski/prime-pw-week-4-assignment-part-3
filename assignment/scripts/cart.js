console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// function definition
// expects to be given a string called 'name'
function sayHello( name ) {
  // let name = 'Tate';

  // name only exists in here
  console.log('Hello, ' + name);
}

// "call" the function, makes it actually run
sayHello('Tate');
sayHello('Dane');
sayHello('Chad');


function doubleIt(number) {
  // return provides output from the function
  return number * 2;
}

let answer = doubleIt(3);
console.log('the answer is: ' + answer);
console.log(`the answer is ${answer}`);

// versatile
console.log('the answer is: ', answer);

console.log('the answer is: ', doubleIt(7));



// CART STUFF

let basket = []; // global
const MAX_ITEMS = 3; // constant global
const DAYS_OF_THE_WEEK = 7;
const PI = 3.1415;///

function addItem( item ) {
  if( isFull() ) {
    // already is full
    console.log('No more room!');
  } else {
    // there is room, add the item
    basket.push(item);
  }

}
//
// if( /* something evaluates to true */) {
//   // do true
// } else {
//   // do false
// }

function isFull() {
  // 3
  if(basket.length < MAX_ITEMS) {
    // can have more items
    return false;
  } else {
    // yes, basket is full
    return true;
  }
}

// add some items
addItem('sushi');
addItem('pizza');
addItem('ice cream');
console.log(basket);


addItem('watermelon');

// when in doubt, log it out --Chris
console.log(basket);



// function expression
let tripleIt = function(num){
  return num * 3;
}

// call setInterval(function () {
console.log( tripleIt(3) );

console.log( tripleIt );
