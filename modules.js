/*
// this runs whatever is in the people.js file
const peoplePath = require('./people');

// console.log(peoplePath.peeps, peoplePath.ageArray);

for(i = 0; i < peoplePath.peeps.length; i++) {
    console.log(peoplePath.peeps[i], peoplePath.ageArray[i]);
}
*/

// Destructuring
const { people, ages, youKnow } = require('./people');

youKnow(people, ages);

// console.log(people, ages);