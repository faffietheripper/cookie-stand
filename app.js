function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

//Constructor function
function SalmonCookies(shopname, minCust, maxCust, avgSale) {
  this.shopName = shopname;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.custPerHour = [];
  this.cookiesPerHour = [];
}

// methods get access to prototype
SalmonCookies.prototype.getCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let numCusts = randomNum(this.minCust, this.maxCust); // this takes things in current object
    this.custPerHour.push(numCusts);
  }
};

SalmonCookies.prototype.getCookiesPerHour = function () {
  for (i = 0; i < this.custPerHour.length; i++) {
    this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
  }
};

SalmonCookies.prototype.render = function () {
  this.getCustPerHour();
  this.getCookiesPerHour();
  console.log(this);

  /*const parentElement = document.getElementById("cookiestand");
  console.log(parentElement);
  // creating a div element
  const div = document.createElement("div");
  parentElement.appendChild(div);

  // create ul element
  const ul = document.createElement("ul");
  div.appendChild(ul);

  //create li element

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const li = document.createElement("li");
    li.textContent = this.cookiesPerHour[i];
    ul.appendChild(li);
  }
*/

  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // table cell
  let td = document.createElement("td");
  td.textContent = this.shopName;
  tr.appendChild(td);

  let total = 0;

  // get data into the row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);

    total = total + this.cookiesPerHour[i];
  }

  // total cell
  td = document.createElement("td");
  td.textContent = total;
  tr.appendChild(td);
};

function makeHeaderRow() {
  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // starting cell
  let th = document.createElement("th");
  tr.appendChild(th);
  // get data into the row
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }

  // total cell
  th = document.createElement("th");
  th.textContent = "Totals";
  tr.appendChild(th);
}

makeHeaderRow();

const seattle = new SalmonCookies("Seattle", 23, 65, 6.3);
const tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2);
const dubai = new SalmonCookies("Dubai", 11, 38, 3.7);
const paris = new SalmonCookies("Paris", 20, 38, 2.3);
const lima = new SalmonCookies("Lima", 2, 16, 4.6);

//const stores = [seattle, tokyo, dubai, paris, lima];

const stores = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < stores.length; i++) {
  stores[i].render();
}

// bottom totals row code
function totalRow() {
  // table
  const table = document.getElementById("myTable");

  // table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  // table cell
  let td = document.createElement("td");
  td.textContent = "Totals";
  tr.appendChild(td);
  let fullTotal = 0;
  // loop round every hour to get each hours total
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    // loop through each store to help get the hours total
    for (let k = 0; k < stores.length; k++) {
      hourlyTotal = hourlyTotal + stores[k].cookiesPerHour[i];
    }

    // hoursly total cell
    let td = document.createElement("td");
    td.textContent = hourlyTotal;
    tr.appendChild(td);

    fullTotal = fullTotal + hourlyTotal;
  }

  // total total
  td = document.createElement("td");
  td.textContent = fullTotal;
  tr.appendChild(td);
}
totalRow();

//Event listeners ... Form

const submitButtonEl = document.getElementById("new-store-form");

submitButtonEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeNameInput = event.target.name.value;
  const maxCustInput = event.target.maxCust.value;
  const minCustInput = event.target.minCust.value;
  const avgCookiesInput = event.target.avgCookies.value;

  console.log(storeNameInput);
  console.log(maxCustInput);
  console.log(minCustInput);
  console.log(avgCookiesInput);

  submitButtonEl.reset();

  const newStore = new SalmonCookies(
    storeNameInput,
    minCustInput,
    maxCustInput,
    avgCookiesInput
  );

  console.log(newStore);
  newStore.render();
});

