'use strict';

let StoreSection = document.getElementById('Stores');

let Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function RandomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

let Seattle = {
  name: 'Seattle',
  custMin: 23,
  custMax: 65,
  avg: 6.3,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.CustMin, this.CustMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  }
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  },
};

Seattle.render();

let Tokyo = {
  name: 'Tokyo',
  custMin: 3,
  custMax: 24,
  avg: 1.2,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.CustMin, this.CustMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  }
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
},
};

Tokyo.render(); 

let Dubai = {
  name: 'Dubai',
  custMin: 11,
  custMax: 38,
  avg: 3.7,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.CustMin, this.CustMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  }
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  },
};

Dubaie.render();

let Paris = {
  name: 'Paris',
  custMin: 20,
  custMax: 38,
  avg: 2.3,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.CustMin, this.CustMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  }
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  },
};

Paris.render();

let Lima = {
  name: 'Lima',
  custMin: 2,
  custMax: 16,
  avg: 4.6,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.CustMin, this.CustMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  }
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  },
};

Lima.render();

