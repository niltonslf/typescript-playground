import Bike from './Bike'
import WorkShop from './Workshop'
import Automobile from './Automobile'

const myBike = new Bike()
const car = new Automobile()
const myWorkShop = new WorkShop()
// tests

console.log('Bike:')
myWorkShop.maintenace(myBike)

console.log('Car:')
myWorkShop.maintenace(car)
