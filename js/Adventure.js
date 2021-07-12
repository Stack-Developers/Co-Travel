"use strict";

Tour.adventure = [];

function Tour(name, email, phone, packages, number, date, vaccine) {
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


const UserInput = document.getElementById("UserInput");
UserInput.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let newName = event.target.nameField.value;
  let newEmail = event.target.emailField.value;
  let newPhone = event.target.phoneField.value;
  let newPackages = event.target.package.value;
  let newNumber = event.target.touristField.value;
  let newDate = event.target.dateField.value;
  let newVaccine = event.target.vaccine.value;

  new Tour(newName, newEmail, newPhone, newPackages, newNumber, newDate, newVaccine);
  renderTicket();
}

function saveData() {
  let x = JSON.stringify(Tour.adventure);
  localStorage.setItem("User", x);
}

function loadData() {
  let y = localStorage.getItem("User");
  let parseData = JSON.parse(y);
  if (parseData) {
    Tour.adventure = parseData;
    
  }
}

loadData();


const Ticket = document.getElementById("ticketa");

function renderTicket() {
     Ticket.textContent = '';
        
        let lastIndexInArray = Tour.adventure.length-1;
        let ticket1 = document.createElement("div");
        Ticket.appendChild(ticket1);
        let par1 = document.createElement("pre");
        ticket1.appendChild(par1);
        par1.textContent = `Full Name: ${Tour.adventure[lastIndexInArray].name}                        E-mail: ${Tour.adventure[lastIndexInArray].email}                        PhoneNumber: ${Tour.adventure[lastIndexInArray].phone} `;
        let par2 = document.createElement("pre");
        ticket1.appendChild(par2);
        par2.textContent = `Desired Package: ${Tour.adventure[lastIndexInArray].packages}              Number of Tourists: ${Tour.adventure[lastIndexInArray].number}                                Tour Date: ${Tour.adventure[lastIndexInArray].date} `;
        let par3 = document.createElement("pre");
        ticket1.appendChild(par3);
        par3.textContent = `Vaccinated Against Covid-19: ${Tour.adventure[lastIndexInArray].vaccine} `;
        let par4 = document.createElement("pre");
        ticket1.appendChild(par4);
        par4.textContent = `BASED TO THE JORDANIAN GOVERNMENT REGULATION REGARDING TO COVID-19 YOU HAVE TO BE EITHER VACCINATED OR PROVIDE A PCR TEST IN THE LAST 72 HOURS `;
        let par6 = document.createElement("pre");
        ticket1.appendChild(par6);
        if (Tour.adventure[lastIndexInArray].packages ===  "3 Days & 2 Nights") {
            let total1 = Math.floor(Tour.adventure[lastIndexInArray].number * 150);
            par6.textContent = `Total Cost of Your Tour: ` + total1 + ' JOD';
        } else if (Tour.adventure[lastIndexInArray].packages === "5 Days & 4 Nights") {
            let total2 = Math.floor(Tour.adventure[lastIndexInArray].number * 250);
            par6.textContent = `Total Cost of Your Tour: ` + total2 + ' JOD';
        } else
        {   let total3 = Math.floor(Tour.adventure[lastIndexInArray].number * 350);
            par6.textContent = `Total Cost of Your Tour: ` + total3 + ' JOD';
        }
  
    if (Tour.adventure.length >= 1) {
        UserInput.removeEventListener("submit", handleSubmit);
        UserInput.reset();
    }
}

