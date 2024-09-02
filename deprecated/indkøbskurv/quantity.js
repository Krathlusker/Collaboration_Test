const subtract = document.getElementById("itemValueSubtract");
const add = document.getElementById("itemValueAdd");
const quantity = document.getElementById("itemValue")
let prodId = document.querySelector(".productForm").id

/* parseInt bruges til at konvertere strings til values (integer) */
prodId = parseInt(prodId.substring(8, prodId.length))
    
add.addEventListener('click', function() {
    if (quantity.value == "") {
        quantity.value = "0";
    }

    let valueInt = parseInt(quantity.value)
    
    /* += eller ++ */
    valueInt += 1;

    quantity.value = valueInt       
});

subtract.addEventListener('click', function() {
    if (quantity.value == "") {
        quantity.value = "1";
    }

    let valueInt = parseInt(quantity.value)
    
    /* -= eller -- */
    if (valueInt <= 1) {
        valueInt = 1;
    } else {
        valueInt -= 1;
    }

    quantity.value = valueInt
}); 

function addToCart(val) {
    for (let i=0; i < products.length; i++) {
/*         console.log(products[i].id) */
        if (products[i].id == prodId) {
            let tempCart = Array();
            for (let j = 0; j < quantity.value; j++) {
                tempCart.push(parseInt(prodId));
            }
            if (localStorage.getItem('cart') == null) {
                localStorage.setItem('cart', tempCart);
            } else {
                let currentCart = localStorage.getItem('cart');
                console.log(currentCart);
                currentCart = currentCart.split(',');
                currentCart.push(tempCart);
                localStorage.removeItem('cart');
                localStorage.setItem('cart', currentCart);
            }
            
            location.reload()
        } 
    }
}

function addToCartSingle(event) {
    const form = event.target.closest('form');
    let prodId = form.id
    prodId = parseInt(prodId.substring(8, prodId.length))
    console.log(prodId)

    for (let i=0; i < products.length; i++) {
/*         console.log(products[i].id) */
        if (products[i].id == prodId) {
            let tempCart = Array();
            tempCart.push(parseInt(prodId));

            if (localStorage.getItem('cart') == null) {
                localStorage.setItem('cart', tempCart);
            } else {
                let currentCart = localStorage.getItem('cart');
                console.log(currentCart);
                currentCart = currentCart.split(',');
                currentCart.push(tempCart);
                localStorage.removeItem('cart');
                localStorage.setItem('cart', currentCart);
            }

            location.reload()
        } 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cart = localStorage.getItem('cart')?.split(',') || [];
    document.getElementById('cart-count').textContent = `${cart.length}`;
});