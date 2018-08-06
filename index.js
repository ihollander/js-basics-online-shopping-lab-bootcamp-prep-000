var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function addToCart(item) {
  var newItem = {
    itemName: item,
    itemPrice: getRandomInt(1, 100)
  }
  cart.push(newItem)
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
    var cartString = "In your cart, you have "
    for (var i = 0; i < cart.length; i++) {
      cartString += `${cart[i].itemName} at $${cart[i].itemPrice}`
      if (i === cart.length - 2) {
       cartString += ", and " 
      } else if (i < cart.length - 2) { 
       cartString += ", " 
      }
    }
    cartString += "."
    return cartString
  }
}

function total() {
  var totalPrice = 0
  for (var i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice    
  }
  return totalPrice
}

function removeFromCart(item) {
  var isInCart = false
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      isInCart = true
      cart.splice(i,1)
    }
  }
  if (isInCart) {
    return cart
  } else {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var totalCost = total()
    cart = []
    return `Your total cost is $${totalCost}, which will be charged to the card ${cardNumber}.`
  }
}