// Hent antallet af varer i kurven
const cartVisible = document.getElementById('cart-count').innerHTML;

// Henter indholdet i localStorage
let cart = localStorage.getItem('cart');

// Definer addCartItems til path
const addCartItems = document.getElementById("cartlistItems");


// Hvis der er varer i kurven
if (cart) {
    // Konverter dataen til et array af IDs
    cart = cart.split(',').map(Number); // Split stringen ved ',' og konverter til tal

    // Opret et objekt til at tælle antallet af hver værdi
    let count = {};

    // Tæl hver værdi i arrayet
    cart.forEach(function(value) {
        count[value] = (count[value] || 0) + 1;
    });

    // Log resultatet    
    console.log(count);

    // Loop gennem hvert produkt ID i `count` objektet
    for (let id in count) {
        const product = products.find(item => item.id == id);

        if (product) {
            const quantity = count[id]; // Antal af dette produkt

            addCartItems.insertAdjacentHTML("beforeend", `
                <hr class="cartlist__divider">
                <div class="cartlist__content-wrapper">
                    <div class="cartlist__content">
                        <div class="cartlist__details">
                            <div class="cartlist__img-wrapper">
                                <img class="cartlist__img" src="${product.imgpath}" alt="${product.titel}">
                            </div>
                            <div class="cartlist__desc">
                                <div class="cartlist__titel">${product.titel}</div>
                                <div class="cartlist__blankspace"></div>
                                <div class="cartlist__priceamount">
                                    <div class="cartlist__price">${product.price.toFixed(2)} kr.</div>
                                    <div class="cartlist__amount">
                                        <button class="cartlist__btn-subtract" id="itemValueSubtract" type="button"
                                            aria-label="subtract">-</button>
                                        <input class="cartlist__quantity" id="itemValue" type="number" min="0"
                                            value="${quantity}">
                                        <button class="cartlist__btn-add" id="itemValueAdd" type="button"
                                            aria-label="add">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cartlist__wish-wrapper1">
                            <div class="cartlist__wish">
                                <div class="cartlist__wishicon">
                                    <img class="cartlist__wishimg" src="./img/like-o.svg" alt="">
                                </div>
                                <p class="cartlist__wishtext">Skriv på ønskeliste</p>
                            </div>
                        </div>
                        <div class="cartlist__remove">
                            <div class="cartlist__wish-wrapper2">
                                <div class="cartlist__wish">
                                    <div class="cartlist__wishicon">
                                        <img class="cartlist__wishimg" src="./img/like-o.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="cartlist__removeicon-wrapper">
                                <button class="cartlist__removeicon" data-id="${id}"></button>
                            </div>
                        </div>
                    </div>
                </div>
            `);
        }
    }

} else {
    window.location.href = "./empty-cart.html";
}

document.addEventListener("DOMContentLoaded", function() {
    // Tilføjer en event listener for remove-knappen
    addCartItems.addEventListener('click', function(event) {
        if (event.target && event.target.matches(".cartlist__removeicon")) {
            const productId = event.target.getAttribute('data-id');

            // Henter kurven fra localStorage
            let cart = localStorage.getItem('cart');
            if (cart) {
                cart = cart.split(',').map(Number);
                
                // Filtrer alle forekomster af det pågældende produkt-ID ud af kurven
                cart = cart.filter(id => id !== Number(productId));
                
                // Opdater localStorage med den nye kurv
                console.log(cart)
                localStorage.setItem('cart', cart.join(','));

                // Fjern produktet fra DOM'en
                const productElement = document.querySelector(`.cartlist__content-wrapper[data-id="${productId}"]`);
                if (productElement) {
                    productElement.remove();
                }

                location.reload()
            }
        }
    });
});