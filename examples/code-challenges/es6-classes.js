class carGarage {

  // our class constructor
  constructor(price = {}, mileage = []) {
    this.car     = 'Ford';
    this.model   = 'Mustang';
    this.color   = 'blue';
    this.price   = price;
    this.mileage = mileage;
  }

  // our class method
  getCarModel() {
    console.log(`Car model: ${this.model}`);
  }
}
