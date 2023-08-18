const products = [
    { name: "ดินสอ6B", price: 150 },
    { name: "ดินสอกด2B", price: 200 },
    { name: "ดินสอไม้HB", price: 180 },
    { name: "ดินสอกด0.5มม.", price: 120 },
];

const productCards = document.querySelector(".product-cards");
const cartItemsList = document.querySelector(".cart-items");
const totalPriceDisplay = document.getElementById("total-price");
const orderDetailsList = document.getElementById("orderDetails");
const totalPriceModal = document.getElementById("totalPriceModal");
const confirmOrderButton = document.querySelector(".confirm-order-button");

products.forEach((product, index) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        <img src="product${index + 1}.jpg" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button class="add-to-cart btn btn-primary" data-index="${index}">Add to Cart</button>
    `;
    productCards.appendChild(productCard);
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", addToCart);
});

let cartItems = [];

function addToCart(event) {
    const productIndex = event.target.getAttribute("data-index");
    cartItems.push(products[productIndex]);
    updateCart();
}

function updateCart() {
    cartItemsList.innerHTML = "";

    let totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement("li");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
            <button class="remove-from-cart btn btn-danger" data-index="${index}">Remove</button>
        `;
        cartItemsList.appendChild(cartItem);
    });

    if (totalPrice > 1000) {
        const discount = totalPrice * 0.1;
        totalPrice -= discount;
    }

    totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
    totalPriceModal.textContent = `Total: $${totalPrice.toFixed(2)}`;
    
}

document.addEventListener("click", event => {
    if (event.target.classList.contains("remove-from-cart")) {
        const productIndex = event.target.getAttribute("data-index");
        cartItems.splice(productIndex, 1);
        updateCart();
    }
});

const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.addEventListener("click", () => {
    cartItems = [];
    updateCart();
    $('#orderModal').modal('show');
});

confirmOrderButton.addEventListener("click", () => {
    if (cartItems.length > 0) {
        alert("Order successful");
        cartItems = [];
        updateCart();
    } else {
        alert("No items in the cart");
    }
});
