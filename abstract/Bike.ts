import AbstractVehicle from './AbstractVehicle'

class Bike extends AbstractVehicle {
  public ajust() {
    console.log('executado ajust()')
  }
  public clean() {
    console.log('executado clean()')
  }
  public listVerifications() {
    console.log('executado listVerifications()')
  }
}

export default Bike
