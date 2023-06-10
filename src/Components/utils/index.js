// This fuction calculates total price of a new order
// @param {Array} products cardProduct: Array of Objets
// Return {number} Total Price

export const totalPrice = (products) => {
    return products.reduce((sum,product) => sum + product.price, 0)
}