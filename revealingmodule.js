// Revealing module pattern
const cartModule = (() => {
    const cart = []
    const rideCart = () => {}
  
    // Public functions
    const exported = {
      addItem: (item) => { cart.push(item) },
      getCartSize: () => { return cart.length },
  
      // Public alias to a private function
      rideMyCart: rideCart
    }
    return exported
  })() // IIFE
  
  // Only a public API is returned, keeping everything else within the closure private
  console.log(cartModule)
  
  // Testing
  cartModule.addItem(101)
  console.log(cartModule.getCartSize())  