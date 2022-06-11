function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}

function updateQuantity2(displayQuantity) {
    let quantity = document.querySelector('.total-quantity2')
    quantity.innerHTML = displayQuantity
}

let quantity = 1
let quantity2 = 1
const cost = 15
const cost2 = 20
const quantityUpBtn = document.getElementById("quantity-up")
const quantityDownBtn = document.getElementById("quantity-down")

quantityUpBtn.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

quantityDownBtn.addEventListener('click', function(){
    if (quantity > 0) {
        quantity--
    }

    updateQuantity(`Quantity: ${quantity}`)
});

const quantityUpBtn2 = document.getElementById("quantity-up2")
const quantityDownBtn2 = document.getElementById("quantity-down2")

quantityUpBtn2.addEventListener('click', function(){
    quantity2++
    updateQuantity2(`Quantity: ${quantity2}`)
})

quantityDownBtn2.addEventListener('click', function(){
    if (quantity2 > 0) {
        quantity2--
    }

    updateQuantity2(`Quantity: ${quantity2}`)
});

let removeItemBtn = document.querySelector('.remove')
let removeItemBtn2 = document.querySelector('.remove2')

removeItemBtn.addEventListener('click', function(){
    let item = document.querySelector('.cart-item')
    quantity = 0
    item.parentNode.removeChild(item)
})

removeItemBtn2.addEventListener('click', function(){
    let item = document.querySelector('.cart-item2')
    quantity2 = 0
    item.parentNode.removeChild(item)
})

const checkoutBtn = document.querySelector('.btn-checkout')

checkoutBtn.addEventListener('click', function(){
    let total = 0
    let newWin = window.open("checkout", "checkout", "width = 200,height=200")
    total = (cost * quantity) + (cost2 * quantity2)
    newWin.document.write(`Your total is $${total}`)
})