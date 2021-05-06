export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id)

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  return cartItems
    .map(item => {
      if (item.id !== cartItemToRemove.id) {
        return item
      }
      if (item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return null
    })
    .filter(i => i !== null)
}
