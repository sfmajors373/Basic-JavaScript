// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  return num * 10;
};

const subtractFive = (num) => {
  // return num after subtracting five
  return num - 5;
};

const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length) {
    return true;
  }
  return false;
};

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  }
  return false;
};

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  // add x and y together and return the value
  return x + y;
};

const subtract = (x, y) => {
  // subtract y from x and return the value
  return x - y;
};

const divide = (x, y) => {
  // divide x by y and return the value
  return x / y;
};

const multiply = (x, y) => {
  // multiply x by y and return the value
  return x * y;
};

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  return x % y;
};

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = (num) => {
  // return true if num is false
  // otherwise return false
  if (num % 2 !== 0) {
    return true;
  }
  return false;
};

const square = (num) => {
  // square num and return the new value
  return num * num;
};

const cube = (num) => {
  // cube num and return the new value
  return num ** 3;
};

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  return num ** exponent;
};

const roundNumber = (num) => {
  // round num and return it
  return Math.round(num);
};

const roundUp = (num) => {
  // round num up and return it
  return Math.ceil(num);
};

const addExclamationPoint = str => `${str}!`;
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'

const getGreeting = name => `Hello ${name}!`;
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here
  return length * width;
};

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  return ((base * height) / 2);
};

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  return Math.round(Math.PI * (radius ** 2));
};

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  return length * width * height;
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
