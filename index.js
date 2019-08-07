let name = 'Corrina'
console.log(name)

const numOne = 12
const numTwo = 5

const result = numTwo % numOne
console.log(result)

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
