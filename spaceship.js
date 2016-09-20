class Spaceship {

  constructor (name, array, phasers, shields){
    this.name = name
    this.crew = array
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.docked = true
    this.charged = false
    this.phasersCharge = 'uncharged'

    array.forEach((shipCrew) => {

      shipCrew.currentShip = this

      this.docked = false

      

      // if (shipCrew.engageWarpDrive() !== 'had no effect') {
      //   this.warpDrive = "engaged"
      // }
      // if (shipCrew.chargePhasers() !== 'had no effect') {
      //   this.phasersCharge = 'charged!'
      // }
      // if (shipCrew.setsInvisibility() !== 'had no effect') {
      //   this.cloaked = "true"
      // }

    })
  }
}