document.addEventListener('DOMContentLoaded', () => {
    // Hent cart fra localStorage
    const cart = localStorage.getItem('cart');

    // Check om cart er null eller en tom streng
    const cartItems = cart ? cart.split(',').filter(item => item !== '') : [];

    // Opdater antallet i p-tag med id "cart-count"
    document.getElementById('cart-count').textContent = `${cartItems.length}`;
});


const cartcount = localStorage.getItem('cart');

if (cartcount === null || cartcount === '') {
    console.log('Kurven er tom')
} else {
    console.log('Der er stadig ting i kurven')
}