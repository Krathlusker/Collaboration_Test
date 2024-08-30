const cartVisible = document.getElementById('cart-count').innerHTML;

// for (i=0; i < ;)

// Viser indholdet af localstorage
// console.log(localStorage.cart);

// Henter inholdet i localstorage
let cart = localStorage.getItem('cart');

// Læser indholdet, og tæller hvor mange der er af hvert id og gemmer det i et object 'count'
if (cart) {
    // 2. Konverter dataen til et array
    cart = cart.split(',').map(Number); // Split stringen ved ',' og konverter til tal

    // 3. Opret et objekt til at tælle antallet af hver værdi
    let count = {};

    // 4. Tæl hver værdi i arrayet
    cart.forEach(function(value) {
        count[value] = (count[value] || 0) + 1;
    });

    // console.log(typeof count)

    // 5. Log resultatet    
    console.log(count);

} else {
    console.log("Cart is empty or not found.");
}



// Det er jo bare gas. Og hvis det er for grovt, så må du sige det... <3 Jeg mener det i kærlig ånd <3