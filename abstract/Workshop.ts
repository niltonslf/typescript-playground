import AbstractVehicle from './AbstractVehicle'
import Bike from './Bike'
import Automobile from './Automobile'

class Workshop {
  private vehicle

  public maintenace(v: AbstractVehicle) {
    this.vehicle = v

    this.listVerifications()
    this.ajust()
    this.clean()
    this.changeOil()
  }

  private ajust() {
    this.vehicle.ajust()
  }

  private clean() {
    this.vehicle.clean()
  }

  private listVerifications() {
    this.vehicle.listVerifications()
  }

  private changeOil() {
    if (this.vehicle instanceof Automobile) this.vehicle.changeOil()
  }
}
export default Workshop
