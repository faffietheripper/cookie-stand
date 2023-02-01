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
  td.textContent = this.name;
  tr.appendChild(td);

  // get data into the row
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
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
}

makeHeaderRow();

const seattle = new SalmonCookies("Seattle", 23, 65, 6.3);
const tokyo = new SalmonCookies("Tokyo", 3, 24, 1.2);
const dubai = new SalmonCookies("Dubai", 11, 38, 3.7);
const paris = new SalmonCookies("Paris", 20, 38, 2.3);
const lima = new SalmonCookies("Lima", 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

// Table time !!!
// const table = document.createElement("table");
//   article.appendChild(table);

//   // hedaer row
//   const headerRow = document.createElement("tr");
//   table.appendChild(headerRow);

//   // add header cells
//   const kidsHeaderCell = document.createElement("th");
//   const dogsHeaderCell = document.createElement("th");
//   const catsHeaderCell = document.createElement("th");

//   kidsHeaderCell.textContent = "Kids";
//   dogsHeaderCell.textContent = "Dogs";
//   catsHeaderCell.textContent = "Cats";

//   headerRow.appendChild(kidsHeaderCell);
//   headerRow.appendChild(dogsHeaderCell);
//   headerRow.appendChild(catsHeaderCell);

//   // add data row
//   const dataRow = document.createElement("tr");
//   tableElem.appendChild(dataRow);

//   // add data cells
//   const kidsDataCell = document.createElement("td");
//   const dogsDataCell = document.createElement("td");
//   const catsDataCell = document.createElement("td");

//   kidsDataCell.textContent = this.goodWithKids;
//   dogsDataCell.textContent = this.goodWithDogs;
//   catsDataCell.textContent = this.goodWithCats;

//   dataRow.appendChild(kidsDataCell);
//   dataRow.appendChild(dogsDataCell);
//   dataRow.appendChild(catsDataCell);

/*
const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

tokyo.getCustPerHour();
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

dubai.getCustPerHour();
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const paris = {
  name: "Paris",
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

paris.getCustPerHour();
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

lima.getCustPerHour();
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

*/
