let cartCount = 0;

document.addEventListener("DOMContentLoaded", () => {
  const cartSpan = document.getElementById("cart-count");

  // Listen for click on all "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      cartSpan.textContent = cartCount;
    });
  });
});




