const cartVisible = document.getElementById('cart-count').innerHTML;

// for (i=0; i < ;)

console.log(localStorage.cart);

let cart = localStorage.getItem('cart');

if (cart) {
    // 2. Konverter dataen til et array
    cart = cart.split(',').map(Number); // Split stringen ved ',' og konverter til tal

    // 3. Opret et objekt til at tælle antallet af hver værdi
    let count = {};

    // 4. Tæl hver værdi i arrayet
    cart.forEach(function(value) {
        count[value] = (count[value] || 0) + 1;
    });

    console.log(typeof count)

    // 5. Log resultatet    
    console.log(count);
    // Eksempel output: {0: 2, 1: 3, 2: 1} 
    // (Dette betyder, at der er to 0'ere, tre 1'ere og én 2'er i cart)
} else {
    console.log("Cart is empty or not found.");
}

// F*** dig Thomas <3 Funk you Thomas