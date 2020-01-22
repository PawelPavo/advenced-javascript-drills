// Hoisting 

name = 'Pawel';
var name;
console.log(name);


setName();
function setName() {
    var name = 'Covalance';
    console.log(name);
}


console.log('some text');
let avg = findAvg(2, 2);
console.log('some text', avg);
function findAvg(a, b) {
    var answer = (a + b) / 2;
    return answer;
}

// Scoping

let fruits = ['apple', 'tomato', 'banana'];


function printFruits() {
    let favFruit = fruits[2];
    console.log(fruits[0]);
    function printFavFruit() {
        let leastFav = fruits[1];
        console.log(leastFav);
    }
    // console.log(leastFav);
    printFavFruit();
}

printFruits()


hello();
function hello (){
    console.log('Hello');
}


myFun()
function myFun (){
    alert('This is an alert!')
}

