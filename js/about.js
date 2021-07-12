'use strict';
/* This Part Made by Sam Al-Haj*/
let person1 = {
    name: "Jehad Abu Awwad",
    currentYear: 2021,
    yearBorn: 1997,
    address: "Amman, Jordan",
    likes: ["Programming", "Dabke"],
    study: "Mechatronics Engineering",
    age: function(yearBorn, currentYear) {
        return currentYear - yearBorn;
    },
};


let person2 = {
    name: "Marwan Al-Rawashdeh",
    currentYear: 2021,
    yearBorn: 1998,
    address: "Madaba, Jordan",
    likes: ["Sports", "Watching Movies"],
    study: "Civil Engineering",
    age: function(yearBorn, currentYear) {
        return currentYear - yearBorn;
    },
}

let person3 = {
    name: "Malak Al-Khasawneh",
    currentYear: 2021,
    yearBorn: 1996,
    address: "Irbid,Jordan",
    likes: ["Novels", "Scientific Programs"],
    study: "Pharmacy",
    age: function(yearBorn, currentYear) {
        return currentYear - yearBorn;
    },
}



let person4 = {
    name: "Faisal Kushha",
    currentYear: 2021,
    yearBorn: 1989,
    address: "Amman, Jordan",
    likes: ["Swimming", "Writing"],
    study: "Programming",
    age: function(yearBorn, currentYear) {
        return currentYear - yearBorn;
    },
}

let person5 = {
    name: "Qais Alshorman",
    currentYear: 2021,
    yearBorn: 1989,
    address: "Irbid, Jordan",
    likes: ["Adventure", "Meditation"],
    study: "Programming",
    age: function(yearBorn, currentYear) {
        return currentYear - yearBorn;
    },

}

let person6 = {
    name: "Sam Alhaj",
    currentYear: 2021,
    yearBorn: 1994,
    address: "Irbid, Jordan",
    likes: ["Swimming", "Writing", "Football"],
    study: "programming, Translaion",
    age: function(yearBorn, currentYear) {
        return currentYear - yearBorn;
    },

}

/* This Part Made by Jehad Abu Awwad*/
let arrayOfPersons = [person1, person2, person3, person4, person5, person6]
let arrayOfInfo = ["jehadInfo", "marwanInfo", "malakInfo", "faisalInfo", "qaisInfo", "samInfo"]

for (let j = 0; j < arrayOfInfo.length; j++) {
    let ul = document.getElementById(`${arrayOfInfo[j]}`);
    let list = document.createElement('li');
    ul.appendChild(list);
    list.textContent = `Name :${arrayOfPersons[j].name}`;
}

for (let j = 0; j < arrayOfInfo.length; j++) {
    let ul = document.getElementById(`${arrayOfInfo[j]}`);
    let list = document.createElement('li');
    ul.appendChild(list);
    list.textContent = `Age :${arrayOfPersons[j].age(arrayOfPersons[j].yearBorn, arrayOfPersons[j].currentYear)}`;
}

for (let j = 0; j < arrayOfInfo.length; j++) {
    let ul = document.getElementById(`${arrayOfInfo[j]}`);
    let list = document.createElement('li');
    ul.appendChild(list);
    list.textContent = `Address :${arrayOfPersons[j].address}`;
}

for (let j = 0; j < arrayOfInfo.length; j++) {
    let ul = document.getElementById(`${arrayOfInfo[j]}`);
    let list = document.createElement('li');
    ul.appendChild(list);
    list.textContent = `Interests :${arrayOfPersons[j].likes}`;
}

for (let j = 0; j < arrayOfInfo.length; j++) {
    let ul = document.getElementById(`${arrayOfInfo[j]}`);
    let list = document.createElement('li');
    ul.appendChild(list);
    list.textContent = `Study :${arrayOfPersons[j].study}`;
}


var card = document.querySelector('.card');
card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
});