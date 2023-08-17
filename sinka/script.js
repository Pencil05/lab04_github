// Define DOM elements
const orderButton = document.getElementById("orderButton");
const orderModal = document.getElementById("orderModal");
const closeButton = document.querySelector(".close-button");
const productCards = document.querySelectorAll(".product-card");

// Display order modal
orderButton.addEventListener("click", () => {
    orderModal.style.display = "block";
});

// Close order modal
closeButton.addEventListener("click", () => {
    orderModal.style.display = "none";
});

// Calculate total price and apply discount if over $1000
function calculateTotalPrice() {
    let totalPrice = 0;
    productCards.forEach((card) => {
        const priceText = card.querySelector("p").textContent;
        const price = parseInt(priceText.substring(priceText.indexOf("$") + 1));
        totalPrice += price;
    });

    if (totalPrice > 1000) {
        totalPrice *= 0.9; // Apply 10% discount
    }

    return totalPrice.toFixed(2);
}

// Validate form data
function validateForm() {
    // Validation logic
}
