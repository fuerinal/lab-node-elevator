/* jshint esversion:6*/
const Elevator = require('./elevator.js');
const Person = require('./person.js');
let elevator = new Elevator();
let juan = new Person('Juan', 0, 2);
elevator.start();
elevator.call(juan);
