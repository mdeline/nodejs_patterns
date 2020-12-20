// Revealing module pattern
const cartModule = (() => {
    const cart = []
    const rideCart = () => {} // :D

    // Julkiset funktiot tänne, kiitos
    const exported = {
      addItem: (item) => { cart.push(item) },
      getCartSize: () => { return cart.length },

      // Julkinen alias yksityiselle funkkarille
      rideMyCart: rideCart
    }
    return exported
  })() // IIFE

  // Funktio palauttaa ainoastaan julkisen rajapinnan. Muu sisältö on rajattu sulkeuman sisälle.
  console.log(cartModule)

  cartModule.addItem(101)
  console.log('Cart size: ' + cartModule.getCartSize())
