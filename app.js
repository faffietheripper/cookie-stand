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

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [], //multiple pieces of data going here
  cookiesPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust); // this takes things in current object
      this.custPerHour.push(numCusts);
    }
    this.getCookiesPerHour();
  },
  getCookiesPerHour: function () {
    for (i = 0; i < this.custPerHour.length; i++) {
      this.cookiesPerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
    }
  },
  render: function () {
    this.getCustPerHour();
    const parentElement = document.getElementById("cookiestand");
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
  },
};

seattle.render();
console.log(seattle);

/*const tokyo = {
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
