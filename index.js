// Write your solution here!

// assigned divers an initial value
const drivers = ["Milo", "Otis", "Garfield"]

//appends driver to end of the array
function destructivelyAppendDriver (name) {
    drivers.push(name);
}

// prepend driver to the beginning of array
function destructivelyPrependDriver (name) {
    drivers.unshift(name);
}

// removes last driver from array
function destructivelyRemoveLastDriver () {
    drivers.pop();
}

// removes the first driver from array
function destructivelyRemoveFirstDriver () {
    drivers.shift();
}

// appends a driver to the array and returns a new one leaving the array unchanged
function appendDriver(name) {
    return [...drivers, name];
}

// prepends a driver to the array and returns a new one leaving the array unchanged
function prependDriver(name) {
    return [name, ... drivers];
}

// removes last driver, returns a new array leaving it unchanged
function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
}

// removes first driver, returns a new array leaving it unchanged
function removeFirstDriver() {
    return drivers.slice(1);
}
