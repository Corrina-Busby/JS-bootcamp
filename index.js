
// The following are in class JS teachings
// const - constance something where the value will not change

let name = 'Corrina'
console.log(name)

const numOne = 12
const numTwo = 5

const result = numTwo % numOne
console.log(result)

// switch statement

let groceryItem = 'papaya';

switch(groceryItem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'lime':
        console.log('limes are $1.49');
        break;
    case 'papaya':
        console.log('papayas are $1.29');
        break;
    default:
        console.log('Invalid item');
        break;
}
let isNightTime = false;

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the light!');

//DEFAULT PARAMETERS allow parameters to have a predetermined value in case there is 
//no argument passed into the function or if the argument is undefined when called.

function greeting (name = 'stranger'){
    console.log(`Hello, ${name}!`);
}

greeting('Nick');  //output; Hello, Nick!
greeting(); //output: Hello, stranger!

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

  makeShoppingList();

//In the terminal input 'node index.js' to run in terminal <don't forget to save>
// RETURN
function rectangleArea(width, height) {
    if (width < 1 || height < 1) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }
  console.log(rectangleArea(0, 0));

  // The return keyword is powerful because it allows functions to produce an output.
  // We can then save the output to a variable for later use. 

  function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  
  console.log(numOfMonitors);

  //Arrow functions - a shorter way to write functions by using the special “fat arrow” () => 
  const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
  };
// same as above
  const rectangleArea = function(width, height) {
    let area = width * height;
    return area;
  };
  //So if we have 
  const squareNum = (num) => {
    return num * num;
  };
  // we can refactor to 
  const squareNum = num => num * num;

  const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false;
  };
  //notice the code converted to the if/else to a ternery operator
  const plantNeedsWater = day => day === 'Wednesday' ? true : false;

//global scope
const color = 'blue'

const returnSkyColor = () => {
  return color; // blue 
};

console.log(returnSkyColor()); // blue

const satellite = 'The Moon';
const galaxy  = 'The Milky Way';
const stars  = 'North Star';

const callMyNightSky = () =>{
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky())

//block scope (local)
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

logSkyColor(); // blue 
//console.log(color); // ReferenceError

//If we try to log the same variable outside the function, 
//throws a ReferenceError.

const logVisibleLightWaves = () =>{
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves();
//console.log(lightWaves);  // reference error

//pollution coding - following is an eg mixture of bad and good 

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};

//console.log(color); // ReferenceError

// .pop() method removes the last item in the array

const newItemTracker = ['item 0', 'item 1', 'item 2'];

const removed = newItemTracker.pop();

console.log(newItemTracker); 
// Output: [ 'item 0', 'item 1' ]
console.log(removed);
// Output: item 2
//2nd example
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);

//remove 1st item on list .shift()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);
//console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

//nested array

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
//[1] is [2, 3] followed by [0] = the 1st element frm tht array





  