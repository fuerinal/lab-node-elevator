/* jshint esversion:6 */
class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waiting = [];
    this.passengers = [];
    this.direction = 0;
  }

  start() {

    this.cont = setInterval(() => this.update(), 1000);
  }
  stop() {
    clearInterval(this.cont);
  }
  update() {

    this.floorUp();
    this.log();
      

  }
  _passengersEnter() {}
  _passengersLeave() {}


  floorUp() {
    this.floor++;
    if (this.floor > this.MAXFLOOR) {
      this.floor = this.MAXFLOOR;
    }
  }
  floorDown() {
    this.floor--;
    if (this.floor < 0) {
      this.floor = 0;
    }
  }

  call(person) {
    this.requests.push(person);
    console.log(this.requests);
  }

  log() {
    console.log(`Floor : ${this.floor} | direction : ${this.direction}`);
  }
}

module.exports = Elevator;
