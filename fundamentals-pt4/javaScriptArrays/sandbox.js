function createArray() {
    let cars = ["Saab", "Volvo", "BMW"];
    return cars;
}

function getFirstElement(arr) {
    return arr[0];
}

function changeElement(arr, val) {
    arr[0] = val;
    return arr;
}

function getArrayLength(arr) {
    return arr.length;
}

function getSortedArray(arr) {
    return arr.sort();
}

function getLastElement(arr) {
    return arr[arr.length - 1];
}

function addElement(arr) {
    arr.push("Honda");
    return arr;
}

function isInstanceArray(arr) {
    return arr instanceof Array;
}

module.exports = {
    createArray,
    getFirstElement,
    changeElement,
    getArrayLength,
    getSortedArray,
    getLastElement,
    addElement,
    isInstanceArray
}