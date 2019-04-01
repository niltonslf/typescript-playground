import AbstractVehicle from './AbstractVehicle'

class Automobile extends AbstractVehicle {
  public ajust() {
    console.log('executado ajust()')
  }
  public clean() {
    console.log('executado clean()')
  }
  public listVerifications() {
    console.log('executado listVerifications()')
  }

  public changeOil() {
    console.log('óleo trocado')
  }
}

export default Automobile
