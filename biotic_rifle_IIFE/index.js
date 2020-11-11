const bioticRifle = (() => {
  const maxAmmo = 3
  var ammo = maxAmmo

  const useAmmo = () => { ammo = ammo - 1 }
  const loadAmmo = () => { ammo = maxAmmo }

  const exported = {
    shoot: () => {
      useAmmo()
      console.log("Take your medicine.")

      if (ammo == 0) {
        (function reload() {
          console.log("Pills here!")
          loadAmmo()
          console.log("Biotic Rifle reloaded.")
        })() // IIFE
      }
    }
  }
  return exported
})() // IIFE

console.log(bioticRifle)

bioticRifle.shoot()
bioticRifle.shoot()
bioticRifle.shoot()
