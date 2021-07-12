'use strict';


Tour.adventure = [];

function Tour(name, email, phone, packages, number, date, vaccine){
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.packages = packages;
    this.number = number;
    this.date = date;
    this.vaccine = vaccine;
    Tour.adventure.push(this);
    saveData();

}



const UserInput = document.getElementById('UserInput');
UserInput.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    let newName = event.target.nameField.value;
    let newEmail = event.target.emailField.value;
    let newPhone = event.target.phoneField.value;
    let newPackages = event.target.package.value;
    let newNumber = event.target.touristField.value;
    let newDate = event.target.dateField.value;
    let newVaccine = event.target.vaccine.value;

    new Tour(newName, newEmail, newPhone, newPackages, newNumber, newDate, newVaccine);

    // console.log(Tour.adventure)
}

function saveData(){
    let x = JSON.stringify(Tour.adventure);
    localStorage.setItem("User", x)
}


function loadData(){
    let y = localStorage.getItem ("User");
    let parseData = JSON.parse(y);
        if (parseData) {
            // Tour.adventure = parseData;
            for(let i = 0 ; i < parseData.length; i++){
                let reInst = new Tour(parseData[i].name, parseData[i].email, parseData[i].phone, parseData[i].packages, parseData[i].number, parseData[i].date, parseData[i].vaccine)
                console.log(reInst);
            }

        }
    }
    loadData();
    // UserInput.removeEventListener('submit', handleSubmit);
    // UserInput.reset();


    // Tour.prototype.adventure = function(){
//     let package1 = "3 Days & 2 Nights";
//     let package2 = "5 Days & 4 Nights";
//     let package3 = "7 Days & 6 Nights";
//         if (this.packages === package1) {
//             return Math.floor(this.number * 150);
        
//         } 
//         else if (this.packages === package2) 
//         {
//             return Math.floor(this.number * 250);
        
//         } 
//         else (this.packages === package3)
//          {
//             return Math.floor(this.number * 350);
//         }

// }


// function vac(){
//     let vaccine1 = this. vaccine ;
//     switch (vaccine1){
//         case 'Yes':
//             render();
//             break;
//             case 'No':
//                 textcontet
//                 'Based on the Jordanian government regulation regarding to Covid-19 you have to be either vaccinated or provide a PCR test in last 72 hours you can check: https://international.visitjordan.com/page/31/Covid-19Update'
//                 break;
//             }
// // }