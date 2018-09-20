// Introduction to the Functional Programming Challenges
// Functional programming is an approach to software development based around the evaluation of functions. Like mathematics, functions in programming map input to output to produce a result. You can combine basic functions in many ways to build more and more complex programs.

// Functional programming follows a few core principles:


// Functions are independent from the state of the program or global variables. They only depend on the arguments passed into them to make a calculation

// Functions try to limit any changes to the state of the program and avoid changes to the global objects holding data

// Functions have minimal side effects in the program


// The functional programming software development approach breaks a program into small, testable parts. This section covers basic functional programming principles in JavaScript.

// 1. Learn About Functional Programming

/**
 * A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';

/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
  const teaCups = [];
  
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4TeamFCC = getTea(40); // :(

// Add your code above this line

// console.log(tea4TeamFCC);

// 2. Understanding Functional Programminbg Terminology

/**
 * A long process to prepare green tea.
 * @return {string} A cup of green tea.
 **/
const prepareGreenTea = () => 'greenTea';

/**
 * A long process to prepare black tea.
 * @return {string} A cup of black tea.
 **/
const prepareBlackTea = () => 'blackTea';

/**
 * Get given number of cups of tea.
 * @param {function():string} prepareTea The type of tea preparing function.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea1 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27); // :(
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13); // :(

// Add your code above this line

// console.log(
//   tea4GreenTeamFCC,
//   tea4BlackTeamFCC
// );

