// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    return drivers.slice(0,2);
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

returnFirstTwoDrivers(drivers)
console.log(returnFirstTwoDrivers(drivers));

//Return last 2 drivers
const returnLastTwoDrivers = function () {
    return drivers.slice(-2)
} 

returnLastTwoDrivers(drivers);
console.log(returnLastTwoDrivers(drivers));

//selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// console.log(selectingDrivers[0]);
// console.log(selectingDrivers[1]);

//creating fare multiplier

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(nameArray, returningDrivers) {
    return returningDrivers(nameArray);
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));