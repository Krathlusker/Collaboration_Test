document.addEventListener('DOMContentLoaded', () => {
    // Hent cart fra localStorage
    const cart = localStorage.getItem('cart');

    // Check om cart er null eller en tom streng
    const cartItems = cart ? cart.split(',').filter(item => item !== '') : [];

    // Beregn antallet af varer
    const numberOfItems = cartItems.length;

    // Opdater antallet i alle elementer med klassen "cart-count"
    const allCartCount = document.querySelectorAll(".cart-count");

    allCartCount.forEach(function (cartUpdate) {
        cartUpdate.innerHTML = numberOfItems; // Opdaterer innerHTML med antallet af varer
    });
});


const cartcount = localStorage.getItem('cart');

if (cartcount === null || cartcount === '') {
    console.log('Kurven er tom')
} else {
    console.log('Der er stadig ting i kurven')
}