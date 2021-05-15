const sandbox = require('./sandbox.js');

let carArray = ["Saab", "Volvo", "BMW"];
let person = {firstName:"John", lastName:"Doe", age:46};
let objArray = [person]

describe('Create Array', function() {
    it('creates the cars array', function() {
        expect(sandbox.createArray()).toEqual(["Saab", "Volvo", "BMW"]);
    });
});

describe('Retrieve First Value', function() {
    it('gets the first element in the array', function() {
        expect(sandbox.getFirstElement(carArray)).toEqual("Saab");
    });
});

describe('Change First Value', function() {
    it('changes the first element in the array', function() {
        let carArrayLocal = ["Saab", "Volvo", "BMW"];
        expect(sandbox.changeElement(carArrayLocal, "Opel")).toEqual(["Opel", "Volvo", "BMW"]);
    });
});

describe('Get Object Member', function() {
    it('gets the value for the object member', function() {
        expect(person.firstName).toEqual("John");
    });
});

describe('Get Array Length', function() {
    it('gets the length of the array', function() {
        expect(sandbox.getArrayLength(objArray)).toEqual(1);
    });
});

describe('Get Sorted Array', function() {
    it('gets the sorted version of the array', function() {
        copyCarArray = carArray.slice();
        expect(sandbox.getSortedArray(copyCarArray)).toEqual(["BMW", "Saab", "Volvo"]);
    });
});

describe('Get Last Value', function() {
    it('gets the last element of the array', function() {
        expect(sandbox.getLastElement(carArray)).toEqual("BMW");
    });
});

describe('Add Value', function() {
    it('adds the element to the end of the array', function() {
        copyCarArray = carArray.slice();
        expect(sandbox.addElement(copyCarArray)).toEqual(["Saab", "Volvo", "BMW", "Honda"]);
    });
});

describe('Test Instance Of', function() {
    it('tests to see if the object is an array', function() {
        expect(sandbox.isInstanceArray(carArray)).toEqual(true);
    });
});