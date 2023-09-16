// an array of strings
const people = ['Daniel', 'David', 'Lisa', 'Lauren'];
const ages = [33, 65, 64, 37];

function youKnow(people, ages) { 
    people = people;
    ages = ages;
    for(i = 0; i < people.length; i++) {
        console.log(people[i] + ' is ' + ages[i] + ' years old.');
    }
}


// console.log(people);

module.exports = {
    people, ages, youKnow,
};