// Eloquent Javascript

// ch.1 : Values, Types, and Operators

// Values contain atomic elements of js, simple values

// Numbers.....................................................

13 // bit pattern for 13 comes into existence in memory

// 64 bits represent a single number value. This means only so
// many patterns can exists, thus the amount of different numbers
// that can be represented is limited. 

// For N decimal digits, the amount of numbers that can be represented
// is 10n

// Given 64 binary digits, you can represent 2^64 
// ... which is about 18 quintillion (18 with 18 zeros)
// ... but the actual range is 9 quadrillion(15 zeros)

9.81 // fractional number

2.998e8 // exponential

// Arithmetic..................................................

100 + 4 * 11 // 144, multp happens first

(100 + 4) * 11 // 1144, grouping happens first

// Special Numbers.............................................

Infinity
-Infinity
NaN

// Strings.....................................................

"Patch my boat with chewing gum" // dbl quote
'Monkeys wave goodbye'      // single quote

"This is the first line\nAnd this is the second" // newline

"A newline character is written like \"\\n\"."  // newline char

"con" + "cat" + "e" + "nate" // concated string

// Unary operators..............................................
console.log( typeof 4.5)

console.log(-(10 - 2)); // minus as unary and binary

// Boolean values..............................................

3 > 2;  // true

'Aardvark' < 'Zoroaster';   // true  a is greater than z

'Itchy' != 'Scratchy';      // true, not equal

NaN === NaN;        // false, only NaN is not equal to itself

// Logical Operators...........................................

true && false;  // false
true && true;   // true

false || true;  // true
false || false; // false

!false;     // true
!true;      // false

// Ternary......................................................

true ? 1 : 2;   // 1, since true is true
false ? 1 : 2;  // 2, since false, is not true

// Undefined Values..............................................

undefined

null

// Automatic Type Conversion.......................................

8 * null      // 0, since null is coerced to 0

"5" - 1       // 4, since "5" is coereced to 5

"5" + 1       // 51, concat happens first, 1 is coerced "1"

"Five" * 2    // NaN

false == 0    // true

// Short-circuiting of logical operators..........................

// ||    returns left if true, right if otherwise

    null || 'user';     // user
    'Karl' || 'user';   // Karl

// &&    returns left if false, right if otherwise

    null && 'user'      // null
    true && 'Karl'      // Karl


// ch.2 Program Structure //

// Expressions and statements..................................... 

// Expression: fragment of code that produces a value
// Statement: A full JS sentence

// Variables......................................................
// Variable: A container to hold values
// variable values can change
var joeDebt = 140;
joeDebt = joeDebt - 40;
console.log(joeDebt);  // logs 100


// Multiple variable definition
var one = 1, two = 2;
console.log(one + two);


// Keywords and Reserved words.........................................
/*
break case catch continue debugger default delete
do else false finally for function if implements
in instanceof interface let new null package private
protected public return static switch throw true
try typeof var void while with yield this
*/

// The Environment...................................................
// Collection of variables and their value that exist at a given time


// Function...........................................................
// a piece of program wrapped in a value
// executing a function is called invoking, calling, or applying 
// values given to functions are called arguments

// Console.log........................................................
//  console.log isn’t a simple variable, it is actually an expression that retrieves the log property from the value held by the
//  console variable
var x = 30;
console.log('The value of x is', x);


// Return values......................................................
// Functions may produce values, which it is said to 'return' that value
console.log(Math.min(2, 4) + 100);


// Prompt and Confirm...................................................
confirm('Shall we?'); // OK = true, Cancel = false

prompt('Tell me everything', '...');
// first argument: the question asked
// second argument: text the user starts with

// Control Flow........................................................
// Statements are excuted from top to bottom

// Conditional Execution...............................................
// Choosing between routes based on Boolean values

// if
var theNumber = prompt('Pick a number', '');
if(!isNaN(theNumber))
    alert('Your number is the square root of ' + theNumber * theNumber);

// else
var theNumber = prompt('Pick a number', '');
if(!isNaN(theNumber))
    alert('Your number is the square root of ' + theNumber * theNumber);
else
    alert('That is not a number');

// else if
if(num > 10)
    alert('Small');
else if(num < 100)
    alert('Medium');
else
    alert('Large');

// while and do loops...................................................

// while
var number = 0;
while (number <= 12){
    console.log(number);
    number = number + 2;
}
// logs 0 2 4 6 8 10

var result = 1;
var counter = 0;
while(counter < 10){
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
// 1024

// do
do{
    var name = prompt('Who are you?');
}while(!name);
console.log(name);

// for
// syntax: for(initialize; check; update)
for(var number = 0; number <= 12; number = number + 2){
    console.log(number);
}
// logs 0 2 4 6 8 10

// Breaking out of a loop................................................
// false and break will finish a loop

for(var current = 20; ; current++){
    if(current % 7 === 0)
        break;
}
console.log(current);   // logs 21

// does not have a check, would execute forever without break
// 'continue' breaks out of loop, continues to next iteration


// Update values succintly.............................................
counter = counter + 1;
    // same as
counter += 1;


// Dispatching on a value with 'switch'
switch(prompt('What is the weather like?')){
    case 'rainy':
        console.log('Remember to bring an umbrella.');
        break;
    case 'sunny':
        console.log('Dress lightly');
    case 'cloudy':
        console.log('Go outside');
        break;
    default:
        console.log('Unknown weather type.');
        break;
}

// Capitalization......................................................

// One-word variable: lowercase
// Multi-word variable: camelcase
// Constructor: Uppercase

// Comments...........................................................

// single line

/*
    Multi-line
*/

// ch.3 Functions......................................................

// Without parameters
var makeNoise = function(){
    console.log('Clang');
}

makeNoise();
// logs 'Clang'

// With parameters
var power = function(base, exponent){
    var result = 1;
    for(var count = 0; count < exponent; count++)
        result *= base;
    return result;
};

console.log(power(2, 10));
// logs 1024

// Parameters and Scopes...............................................
// parameters and variables are local to the function

// Nested scopes......................................................

var landscape = function() {
    var result = "";
    var flat = function(size) {
    for (var count = 0; count < size; count++)
        result += "_";
    };

    var mountain = function(size) {
        result += "/";
    for (var count = 0; count < size; count++)
        result += "'";
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

// Logs  ___/''''\______/'\_

// flat and mountain can see into landscape, but not vice versa
// and not each other's scopes (lexical scoping)

// Functions as values..................................................
// A variable that holds a function is still just a regular variable and
// can be assigned a new value

// Declaration Notation...............................................

// Declaration is using the function keyword
function square(x){
    return x * x;
}

// Declarations get hoisted

// The call stack......................................................

// call stack : place where execution context is stored

// function call : new execution context added to top of stack
// function return : removes top context from the stack

// stack can grow too big, overflow

function chicken(){
    return egg();
}

function egg(){
    return chicken();
}

console.log(chicken() + ' came first');

// Optional arguments...............................................

// alert expects one argument
alert('Hi there', 'Hello');

// 'Hello' will be ignored


// power can be called with one or two arguments
// if only one arg, exponent is assumed to be two

function power(base, exponent){
    if(exponent === undefined)
        exponent = 2;
    var result = 1;
    for(var count = 0; count < exponent; count++)
        result *= base;
    return result;
}

console.log(power(4));      // 16
console.log(power(4, 3));   // 64

// Closure............................................................

function multiplier(factor){
    return function(number){
        return number * factor;
    };
}

var twice = multiplier(2);

console.log(twice(5));      // 10

// the return function still has access to the factor variable from the
// multiplier() function that called it, and also gets access to the
// argument passed when unfreezing it through its number parameter

// Recursion.........................................................

// A function that calls itsel is called recursion

function power(base, exponent){
    if(exponent === 0)
        return 1;
    else
        return base * power(base, exponent - 1);
}

console.log(power(2, 3));       // 8

function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, "(" + history + " + 5)") ||
                    find(start * 3, "(" + history + " * 3)");
        }
        return find(1, "1");
}

console.log(findSolution(24));

/*
The inner function find does the actual recursing. It takes two arguments—the current number and a string that records how we reached this
number—and returns either a string that shows how to get to the target
or null.

To do this, the function performs one of three actions. If the current
number is the target number, the current history is a way to reach that target, so it is simply returned. If the current number is greater than the target,
there’s no sense in further exploring this history since both adding and multiplying will only make the number bigger. And finally, if we’re still below
the target, the function tries both possible paths that start from the current
number, by calling itself twice, once for each of the allowed next steps. If
the first call returns something that is not null, it is returned. Otherwise, the
second call is returned—regardless of whether it produces a string or null.
*/

/* psuedo-code
find(1, "1")
    find(6, "(1 + 5)")
        find(11, "((1 + 5) + 5)")
            find(16, "(((1 + 5) + 5) + 5)")
            too big
            find(33, "(((1 + 5) + 5) * 3)")
            too big
        find(18, "((1 + 5) * 3)")
        too big
    find(3, "(1 * 3)")
        find(8, "((1 * 3) + 5)")
            find(13, "(((1 * 3) + 5) + 5)")
found!
*/
/* 
The first time find
is called, it calls itself twice to explore the solutions that start with (1 + 5)
and (1 * 3). The first call tries to find a solution that starts with (1 + 5) and,
using recursion, explores every solution that yields a number less than or
equal to the target number. Since it doesn’t find a solution that hits the target, it returns null back to the first call. There the || operator causes the call
that explores (1 * 3) to happen. This search has more luck because its first
recursive call, through yet another recursive call, hits upon the target number, 13. This innermost recursive call returns a string, and each of the || operators in the intermediate calls pass that string along, ultimately returning
our solution.
*/

// Growing functions...................................................

function printFarmInventory(cows, chicken){
    var cowString = String(cows);
    while(cowString.length < 3){
        cowString = '0' + cowString;
    }
    console.log(cowString + ' Cows');
    var chickenString = String(chickens);
    while(chickenString.length < 3){
        chickenString = '0' + chickenString;
    }
    console.log(chickenString + ' Chickens');
}

printFarmInventory(7, 11);

// refactor add functionality to count pigs

function zeroPad(number, width){
    var string = String(number);
    while(string.length < width)
        string = '0' + string;
    return string;
}

function printFarmInventory(cows, chickens, pigs){
    console.log(zeroPad(cows, 3) + ' Cows');
    console.log(zeroPad(chickens, 3) + ' Chickens');
    console.log(zeroPad(pigs, 3) + ' Pigs');
}

printFarmInventory(7, 16, 3);


// ..... Functions and Side Effects.....
// Functions that return values are desirable
// Sometimes a side-effect is necessary
// Functions with no side-effects are called pure functions

// ch.4 Data Structures: Objects and Arrays.............................

// Numbers, Booleans, and Strings are the bricks that data structures
// are built on.

// Objects allow for grouping values, to build more complex structures

// Weresquirrel
//   8 - 10

// Data Sets

var listOfNumbers = [2, 3, 5, 7, 11];

listOfNumbers[1] // 3
listOfNumbers[1 - 1] // 2

// Properties

value.x 
    // and
value[x]

// access a property on value, but not necessarily the same property
// .x is interpreted as a valid variable name
// [x] the expression between the brackets is evaluated to get property name

// Method.....

value.pop()
value.push('y', 'z')

// Objects.....

var day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running', 'television']
};

// Journal.....

var journal = [
    { events: ['work', 'touched tree', 'pizza', 'running', 'television'],
      squirrel: false
    },
    { events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
      squirrel: false
    },
    {
      events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
      squirrel: true  
    },
];

var journal = [];

function addEntry(events, turned){
    journal.push({
        events: events,
        turned: turned
    });
}

addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);


// Correlation is a measure of dependencies between statistical variables
// Usually expressed as a coefficient that ranges from -1 to  1
// Zero means variables are not related
// 1 means perfectly related
// -1 means perfectly related, but opposite (one true, one false)

// The phi(φ) coefficient is provides a good measure of correlation for
// boolean values

// A table n that contains the number of times the various combos
// of two variables were observed


/*

     No pizza, squirrel  76  |   Pizza, no squirrel   9
     ------------------------|--------------------------
     No pizza, squirrel 4    |   Pizza, squirrel      1


n 01 = number of measurements where pizza if false(0), squirrel is true(1)
  n 01 = 4

n 1 = sum of all measurements where the first measurement is true(0) = 10

n 0 = sum of all measurements where squirrel is false = 9

dividend =  1 x 76 - 9 x 4 = 40
divisor = sqr[10 x 80 x 5 x 85] = 340000

φ ≈ 0.069 

No go on the pizza

*/
// Phi correlational formula
function phi(table){
    return(table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));
// 0.068599434

function hasEvent(event, entry){
    // if -1 not returned, we know event exists
    return entry.events.indexOf(event) !== -1;
}

function tableFor(event, journal){
    var table = [0, 0, 0, 0];
    for(var i = 0; i < journal.length; i++){
        var entry = journal[i], index = 0;
        if(hasEvent(event, entry)) index += 1;
        if(entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor('pizza', JOURNAL)); // [76, 9, 4, 1]

// Objects as maps.....

// Use object properties named after the event types. We can use the 
// square bracket access notation to create and read the properties
// and can use the in operator to test whether a given property exists.

var map = {};
function storePhi(event, phi){
    map[event] = phi;
}

storePhi("pizza", 0.069);
storePhi("touched tree", -0.081);
console.log("pizza" in map); // true

console.log(map["touched tree"]);


function gatherCorrelations(journal){
    var phis = {};
    for(var entry = 0; entry < journal.length; entry++){
        var events = journal[entry].events;
        for(var i = 0; i < events.length; i++){
            var events = events[i];
            if(!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        }
    }
    return phis;
}

var correlations = gatherCorrelations(JOURNAL);
console.log(correlations.pizza); // 0.068599434

for(var event in correlations)
    console.log(event + ": " + correlations[event]);
// carrot, exercise, and so on...

// Filter greater than 0.1 or less than -0.1

for (var event in correlations) {
    var correlation = correlations[event];
    if (correlation > 0.1 || correlation < -0.1)
    console.log(event + ": " + correlation);
}


for (var i = 0; i < JOURNAL.length; i++) {
    var entry = JOURNAL[i];
    if (hasEvent("peanuts", entry) &&
    !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}

// Further Arrayology.....

// .pop() and .push()
var todoList = [];
function rememberTo(task) {
    todoList.push(task);
}
function whatIsNext() {
    return todoList.shift();
}
function urgentlyRememberTo(task) {
    todoList.unshift(task);
}

// .indexOf() and .lastIndexOf()
console.log([1, 2, 3, 2, 1].indexOf(2));
// 1
console.log([1, 2, 3, 2, 1].lastIndexOf(2));
// 3

// .slice(start = inclusive, end = exclusive) 
console.log([0, 1, 2, 3, 4].slice(2, 4));
// [2, 3]
console.log([0, 1, 2, 3, 4].slice(2));
// [2, 3, 4]

// remove index of an array
function remove(array, index) {
    return array.slice(0, index)
    .concat(array.slice(index + 1));
    }
    console.log(remove(["a", "b", "c", "d", "e"], 2));
    // ["a", "b", "d", "e"]

// Strings.....

// .slice() and .indexOf()
console.log("coconuts".slice(4, 7)); //  nut

console.log("coconut".indexOf("u")); //  5

// .indexOf() with multiple characters
console.log("one two three".indexOf("ee"));  // 11

console.log("one two three four five six seven").indexOf("ix");

// .trim()
console.log(" okay \n ".trim());

// .length() .charAt()
var string = "abc";
console.log(string.length);
// 3
console.log(string.charAt(0));
// a
console.log(string[1]);
// b

// arguments Object
// added to any function that is called
// holds all the arguments passed to the function
// has a length property that tells numbers of arguments
// each argument has a property (0, 1, 2, 3, and so on)

function argumentCounter(){
    console.log("You gave me", arguments.length, "arguments.");
}

argumentCounter("Straw man", "Tautology", "Ad hominem");
// You gave me 3 arguments

// refactoring addEntry()

function addEntry(squirrel){
    var entry = {
        events: [],
        squirrel: squirrel
    };
    for(var i = 1; i < arguments.length; i++)
        entry.events.push(arguments[i]);
    journal.push(entry);
}

addEntry(true, "work", "touched tree", "pizza", "running", "televison");

// This version reads its first argument (squirrel) in the normal way and
// then goes over the rest of the arguments (the loop starts at index 1, skipping
// the first) to gather them into an array.

// Math object (number related utility functions)
Math.max();
Math.min();
Math.sqrt();

Math.cos();
Math.sin();
Math.tan();
Math.random(); // random number from 0(inc) to 1(exc)
Math.floor(); // rounds down to nearest whole number

// Global scope.....
// can also be approached as an object
// store in 'window' variable

var myVar = 10;
console.log("myVar" in window);  // true
console.log(window.myVar);  // 10

// Abstracting Array Traversal.....
function forEach(array, action) {
    for(var i = 0; i < array.length; i++)
        action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

// create a function value instead of predefined function
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number){
    sum += number;
});

// Refactor gatherCorrelations() function
function gatherCorrelations(journal){
    var phis = {};
    journal.forEach(function(entry){
        entry.events.forEach(function(event){
            if(!(event in phis))
                phis[event] = phi(tableFor(event, journal));
        });
    });
    return phis;
}


// Higher Order Functions.....

// Higher order functions: functions that operate on other functions by
// taking them as arguments or by returning them.

// Function that creates new function
function greaterThan(n){
    return function(m){
        return m > n;
    };
}
var greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// Function that , changes other functions
function noisy(f){
    return function(arg){
        console.log("calling with", arg);
        var val = f(arg);
        console.log("called with", arg, "- got", val);
        return val;
    };
}
noisy(Boolean)(0);

// Function that provides control flow

function unless(test, then){
    if(!test) then();
}
function repeat(times, body){
    for(var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
    unless( n % 2, function() {
        console.log(n, "is even");
    });
});

// Passing along arguments.....

// Using apply
function transparentWrapping(f){
    return function() {
        return f.apply(null, arguments);
    };
}

// JSON.....
// Widely used data storage and communications format on the web
// All property names surrounded by double quotes
// No function calls, variables, or computation
// Comments not allowed

// JSON.stringify
// Takes js value, returns JSON-encoded string

// JSON.parse
// Takes string, converts it to value it encodes

var string = JSON.stringify({name: "Me", born: 1975});
console.log(string); // {"name": "Me", "born":1975}
console.log(JSON.parse(string).born);


// Decode ANCESTRY_FILE
var ancestry = JSON.parse(ANCESTRY_FILE);
console.log(ancestry.length); // 39

// Filtering an array.....
function filter(array, test){
    var passed = [];
    for(var i = 0; i < array.length; i++){
        if(test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}

console.log(filter(ancestry, function(person){
    return person.born > 1900 && person.born < 1925;
}));
































































