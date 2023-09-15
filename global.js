// Global object

// This prints out the global object's methods/properties
// console.log(global);

console.log(`The directory path is: ${__dirname}`);
console.log(`The file path is: ${__filename}`);

// The global object is included in Node.js
// and with it, related methods and properties.
// global.setTimeout(() => {
//     console.log('in the 1st timeout');
// }, 1000);

// // Because of its global nature, we do not need
// // to precede its methods/properties with "global."
// setTimeout(() => {
//     console.log('in the 2nd timeout');
// }, 2000);

// // Instead, we can simply just call the methods.
// setTimeout(() => {
//     console.log('in the 3rd timeout');
// }, 3000);

// const interval = setInterval(() => {
//     console.log('in the interval');
// }, 1000);