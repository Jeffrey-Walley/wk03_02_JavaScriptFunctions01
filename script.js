//console.log("Script is loaded!");
//let a = 1;
//let b = 2;
//console.log(a + b);

//function add() {
//    if (a > 5) {
//        return a + b;
//    } else return 0

//}
//console.log(add()); 

//Define a function

function saySomething(something) {
    console.log(something);
}

saySomething("Yippee"); // ogs "Yippee"
saySomething("Hello function!"); //logs "Hello function!"

// return keyword
function add(number1, number2) {
    return number1 + number2;
}

let sum = add(1, 2);
console.log(sum); // 3

// argument array
function add() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

add(1, 2, 3, 4, 5, 6, 7, 8);

// rest operator

// function addAll(a, b, ...rest) {
// let sum = 0;
//for (let i = 0; i < rest.lenth; i++) {
//sum += rest[i];
//  }
//}

//console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9));

function addTwoNumbers(a, b, ...rest) {
    console.log("Adding " + a + " + " + b);
    if (rest.length > 0) {
        console.log("Not adding the rest: " + rest);
    }
    return a + b;
}
console.log(addTwoNumbers(1, 2));
console.log(rest);



// Function Decleration vs Function Assignment

hoisted();

function hoisted() {
    console.log("I'm hoisted"):
}

notHoisted(); // TypeError: notHoisted is not a function

let notHoisted = function() {
    console.log("bar");
};


// Anonymous Function
let calculator = {
    add: function(a, b) {
        return a + b;
    }
}

console.log(calculator.add(2, 3)); // 5

// Array of Mystery example

let arrayOfMystery = [
    ['anonymous', 'array'], { name: 'anonymous object' },
    function() { return 'Anonymous Function!' }
];

console.log(arrayOfMystery[0][1]);
console.log(arrayOfMystery[1].name);
console.log(arrayOfMystery[2]());

// focus

function getGreeting(name) {
    let greeting = "hello ";
    return greeting + name;
}
getGreeting('Shane'); // 'Hello Shane'
console.log(greeting) //undefined

// IIFE (immediately invoked function expression)

(function() {
    let myVar = "look mom, private variables!";

    //Do some stuff with myVar...
})();

console.log(myVar); //undefined;

// When a scope is created, it is nested inside another scope. To resolve a variable, JS looks at the immediate scope, then parent scopes in order.
// A closure is an inner function that has access to the outer function’s variables. Both scopes together are the **scope chain**.

//for example, the `city` variable is visible inside the `greet` function because the greet function creates a closure.

let city = 'New Orleans';
let greet = function() {
    console.log('Hello ' + city);
}

greet(); // Hello New Orleans
//Accessing `city` inside the greet function will first look for a variable named `city` in the greet function, then to the parent scope, and so on up the scope chain.


// nested scope
let landscape = function() {
    let result = "";

    let flat = function(size) {
        for (let count = 0; count < size; count++)
            result += " _ ";
    };

    let mountain = function(size) {
        result += "/";
        for (let count = 0; count < size; count++)
            result += " '";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};

console.log(landscape());