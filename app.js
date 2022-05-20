'use strict';

let storesSection = document.getElementById('stores');

let Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);

}

let seattle = {
  name: 'Seattle',
  custMin: 23,
  custMax: 65,
  avg: 6.3,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.custMin, this.custMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  },
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
    storesSection.appendChild(ulElem);

  }
};

seattle.render();

let tokyo = {
  name: 'Tokyo',
  custMin: 3,
  custMax: 24,
  avg: 1.2,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.custMin, this.custMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  },
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
}
};

tokyo.render(); 

let dubai = {
  name: 'Dubai',
  custMin: 11,
  custMax: 38,
  avg: 3.7,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.custMin, this.custMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  },
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  }
};

dubai.render();

let paris = {
  name: 'Paris',
  custMin: 20,
  custMax: 38,
  avg: 2.3,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.custMin, this.custMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  },
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  }
};

paris.render();

let lima = {
  name: 'Lima',
  custMin: 2,
  custMax: 16,
  avg: 4.6,
  cust: 0,
  total: 0,
  getCust: function (){
    this.cust = randomCust(this.custMin, this.custMax);
  },
  CookiesTotal: function (NumCookies){
    return Math.round(NumCookies * this.avg);
  },
  render: function () {
    let ulElem = document.createElement('ul');
    ulElem.textContent = this.name;
    storesSection.appendChild(ulElem);

    for (let i = 0; i < Hours.length; i++){
      let liElem = document.createElement('li');
      this.getCust();
      liElem.textContent = `${Hours[i]}: ${this.CookiesTotal(this.cust)} cookies`;
      this.total += this.CookiesTotal(this.cust);
      ulElem.appendChild(liElem);
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${this.total} cookies`;
    ulElem.appendChild(liElem);
  }
};

lima.render();

