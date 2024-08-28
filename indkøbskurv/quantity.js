

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

function addToCart() {
    for (let i=0; i < products.length; i++) {
        console.log(products[i].id)
        if (products[i].id == prodId) {
            localStorage.setItem('itemPrice', products[i].price)
            alert("TILFØJET!" + products[i].price)
        } 
    }
}