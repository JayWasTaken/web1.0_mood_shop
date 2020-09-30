
const itemsContainer = document.getElementById('items')
import data from './data.js'
for (let i=0; i<data.length; ++i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'item'
    
    let img = document.createElement('img');
    img.src = data[i].image
    img.width = 300
    img.height = 300

    newDiv.appendChild(img)
    // console.log(img)
    itemsContainer.appendChild(newDiv)

    let desc = document.createElement('P')
    desc.innerText =data[i].desc
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)

   
    // example
    // const obj = {name: "Shoe", price: 9.99, qty:3}
    
}
const cart = []

const obj = {}

function addItem(name, price, qty) {
    for (let i = 0; i < cart.length; i+= 1) {
        if(cart[i].name === name) {
            cart[i].qty += 1
            return
        }
    }
    const item = { name, price, qty: 1 }
    cart.push(item)
}
function showItems() {
    //examples to show stuff in cart
    // console.log(cart[0])
    // console.log(cart.length)
    const qty = getQty()
    console.log(`You have ${qty} items in your cart`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(` - ${cart[i].name} $${cart[i].price} x ${cart[i].qty} `)
    }
    let total = 0.00
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    console.log(`Total in cart: $${getTotal()}`)
}

function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}
addItem('Apple', .98)
addItem('Apple', .98)
addItem('Orange', 1.50)
addItem('Opinion', .02)
addItem('Orange', 1.50)

showItems()