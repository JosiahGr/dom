'use strict';
var timeOfDay = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var cookieTable = document.getElementById('patsSalesTable');
var totalCookies = [];

function CookieStore(store, maxCust, minCust, cookieSold) {
  this.store = store;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.cookieSold = cookieSold;
  this.getEstimate = function() {
    var cookies = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;
    cookies *= this.cookieSold;
    cookies = Math.floor(cookies);
    return cookies;
  };
  totalCookies.push(this);
}

CookieStore.prototype.render = function () {
  var totalCookiesSold = 0;
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.store;
  trEl.appendChild(tdEl);

  for(var i = 0; i < timeOfDay.length; i++) {
    var cookiesSold = this.getEstimate();
    tdEl = document.createElement('td');
    tdEl.textContent = cookiesSold;
    trEl.appendChild(tdEl);
    totalCookiesSold += this.getEstimate();
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalCookiesSold;
  trEl.appendChild(tdEl);
  cookieTable.appendChild(trEl);
};

function makeHeaderRow (head) {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Store Location';
  trEl.appendChild(thEl);

  for(var i = 0; i < timeOfDay.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = head[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}

var pike = new CookieStore('Seattle', 100, 25, 6.3);
var seaTac = new CookieStore('Seatac Airport', 24, 3, 1.2);
var seattleCenter = new CookieStore('Seattle Center', 38, 11, 3.7);
var capHill = new CookieStore('Capital Hill', 38, 20, 2.3);
var alki = new CookieStore('Alki', 16, 2, 4.6);

makeHeaderRow(timeOfDay);
pike.render();
seaTac.render();
seattleCenter.render();
capHill.render();
alki.render();


