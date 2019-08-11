
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



