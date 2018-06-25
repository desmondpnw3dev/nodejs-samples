import carGarage from './es6-classes.js';

class carDealership extends carGarage {

  constructor(price, mileage) {
    // To call the parent constructor we use the super keyword
    super([15000, 50000])
    this.name = 'Ford Mustang';
    this.year = 2012;
  }

}

let carSale = new carDealership();

carSale.getCarModel();                            // Car model: Mustang
console.log(`Data is ${price} and ${mileage}`);   // Data is 15000 and 50000
