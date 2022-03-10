const findTheOldest = function(people) {
    let total = 0;
    let oldestPerson = {};
    let thisYear = new Date().getFullYear();
    people.reduce((prev, curr) => {
            if(((curr.yearOfDeath || thisYear) - curr.yearOfBirth) > total) {
                total = ((curr.yearOfDeath || thisYear) - curr.yearOfBirth);
                oldestPerson = curr;
            }
            return prev;
            // console.log(prev);
    }, 0);
    return oldestPerson;
    // console.log(oldestPerson);
  };



// Do not edit below this line
module.exports = findTheOldest;
