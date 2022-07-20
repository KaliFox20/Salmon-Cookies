'use strict';

let storesSection = document.getElementById('stores');

let Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let Totalcities = [];

//Table DOM Set-up
let tableElem = document.createElement('table');
storesSection.appendChild(tableElem);
// let row1 = document.createElement('tr');
// tableElem.appendChild(row1);
//let th1Elem = document.createElement('th');
//th1Elem.textContent = `6am, 7am, 8am, 9am, 10am, 11am, 12pm, 1pm, 2pm, 3pm, 4pm, 5pm, 6pm, 7pm, 8pm`;
//row1.appendChild(th1Elem);

//Methods, functions, constructors

function Cities(name, custMin, custMax, avg) {
  this.name = name;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avg = avg;
  this.cust = 0;
  this.total = 0;
  this.mysalesArr = [];

  Totalcities.push(this);
}
console.log(Cities);
function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}
Cities.prototype.getCust = function () {
  this.cust = randomCust(this.custMin, this.custMax);
};
Cities.prototype.getTotal = function () {
  let q1 = Math.round(this.cust * this.avg);
  this.mysalesArr.push(q1);
  return q1;
};
Cities.prototype.render = function () {
  let Nextrow = document.createElement('th');
  Nextrow.textContent = this.name;

  for (let i = 0; i < Hours.length; i++) {
    this.getTotal();
    let row1 = document.createElement('tr');
    tableElem.appendChild(row1);
    let NewRow = document.createElement('td');
    this.getCust();
    NewRow.textContent = `${this.mysalesArr[i]} cookies`;
    console.log(this.mysalesArr);
    row1.appendChild(NewRow);
    //   // this.total += this.getTotal();
    //   ulElem.appendChild(liElem);
  }
  storesSection.appendChild(Nextrow);
};

let seattle = new Cities('seattle', 23, 65, 6.3);
let tokyo = new Cities('tokyo', 3, 24, 1.2);
let dubai = new Cities('dubai', 11, 38, 3.7);
let paris = new Cities('paris', 20, 38, 2.3);
let lima = new Cities('lima', 2, 16, 4.6);
//Table Dom Rendering


function renderCitites() {
  for (let i = 0; i < Totalcities.length; i++) {
    let currentCity = Totalcities[i];
    currentCity.getCust();
    currentCity.render();
  }
}

renderCitites();
console.log(Totalcities);

//renderCitites();
// create a constructor that combines all of this info and makes a table out of it
// make an array in the constructor? 
// make a table in column zero for all of the cities
// make a table in row zero for all the times


// let seattle = {
//   name: 'Seattle',
//   custMin: 23,
//   custMax: 65,
//   avg: 6.3,
//   cust: 0,
//   total: 0,
//   getCust: function (){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   CookiesTotal: function (NumCookies){
//     return Math.round(NumCookies * this.avg);
//   },
//   render: function () {
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;

//     for (let i = 0; i < Hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
//       this.total += this.CookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//     storesSection.appendChild(ulElem);

//   }
// };

// seattle.render();

// let tokyo = {
//   name: 'Tokyo',
//   custMin: 3,
//   custMax: 24,
//   avg: 1.2,
//   cust: 0,
//   total: 0,
//   getCust: function (){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   CookiesTotal: function (NumCookies){
//     return Math.round(NumCookies * this.avg);
//   },
//   render: function () {
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for (let i = 0; i < Hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
//       this.total += this.CookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
// }
// };

// tokyo.render(); 

// let dubai = {
//   name: 'Dubai',
//   custMin: 11,
//   custMax: 38,
//   avg: 3.7,
//   cust: 0,
//   total: 0,
//   getCust: function (){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   CookiesTotal: function (NumCookies){
//     return Math.round(NumCookies * this.avg);
//   },
//   render: function () {
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for (let i = 0; i < Hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
//       this.total += this.CookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// dubai.render();

// let paris = {
//   name: 'Paris',
//   custMin: 20,
//   custMax: 38,
//   avg: 2.3,
//   cust: 0,
//   total: 0,
//   getCust: function (){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   CookiesTotal: function (NumCookies){
//     return Math.round(NumCookies * this.avg);
//   },
//   render: function () {
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for (let i = 0; i < Hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
//       this.total += this.CookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// paris.render();

// let lima = {
//   name: 'Lima',
//   custMin: 2,
//   custMax: 16,
//   avg: 4.6,
//   cust: 0,
//   total: 0,
//   getCust: function (){
//     this.cust = randomCust(this.custMin, this.custMax);
//   },
//   CookiesTotal: function (NumCookies){
//     return Math.round(NumCookies * this.avg);
//   },
//   render: function () {
//     let ulElem = document.createElement('ul');
//     ulElem.textContent = this.name;
//     storesSection.appendChild(ulElem);

//     for (let i = 0; i < Hours.length; i++){
//       let liElem = document.createElement('li');
//       this.getCust();
//       liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
//       this.total += this.CookiesTotal(this.cust);
//       ulElem.appendChild(liElem);
//     }

//     let liElem = document.createElement('li');
//     liElem.textContent = `Total: ${this.total} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// lima.render();

