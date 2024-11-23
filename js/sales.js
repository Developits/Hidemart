// Fetch products and display them
async function loadProducts() {
  const response = await fetch("/Wallmart/data/products.json");
  const products = await response.json();
  displayProducts(products);
}

function displayProducts(products) {
  const productsContainer = document.getElementById("products-container");
  products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
          <img src="${product.img}" alt="Product Image">
          <h4>${product.name}</h4>
          <p>Price: $${product.price}</p>
          <p>Seller: ${product.seller}</p>
          <p>Ratings: ${product.ratings}</p>
          <button class="btn-cart" onclick="addToCart('${product.id}', ${product.price}, ${product.shipping}, '${product.name}', '${product.img}')">Add to Cart</button>      `;
      productsContainer.appendChild(productDiv);
  });
}


let cart = [];
const TAX_RATE = 0.08; // Assuming an 8% tax rate

// Function to add product to cart
function addToCart(id, price, shipping, name, img) {
  const existingProduct = cart.find(item => item.id === id);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const product = { id, price, shipping, name, img, quantity: 1 };
    cart.push(product);
  }
  renderCart();
}

// Function to remove product from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

// Function to update quantity of a product
function updateQuantity(productId, newQuantity) {
  const product = cart.find(item => item.id === productId);
  if (product) {
    product.quantity = newQuantity;
    renderCart();
  }
}

// Function to render cart items and summary
function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear previous items

  let totalItems = 0;
  let totalShipping = 0;
  let totalPrice = 0;
  let totalTax = 0;

  cart.forEach(product => {
    const itemTotal = product.price * product.quantity;
    totalItems += product.quantity;
    totalShipping += product.shipping * product.quantity;
    totalPrice += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <img src="${product.img}" alt="${product.name}" class="cart-item-image">
      <div class="cart-item-details">
        <p>${product.name}</p>
        <p>Price: $${product.price}</p>
        <label>Quantity: 
          <input type="number" value="${product.quantity}" min="1" class="quantity-input" 
                 onchange="updateQuantity('${product.id}', parseInt(this.value))">
        </label>
        <button onclick="removeFromCart('${product.id}')" class="remove-button">Remove</button>
      </div>
      <p class="item-total">Total: $${itemTotal.toFixed(2)}</p>
    `;
    cartItemsContainer.appendChild(cartItem);
  });

  // Calculate tax
  totalTax = totalPrice * TAX_RATE;

  // Update summary
  document.getElementById("total-items").innerText = totalItems;
  document.getElementById("total-shipping").innerText = totalShipping.toFixed(2);
  document.getElementById("total-tax").innerText = totalTax.toFixed(2);
  document.getElementById("total-amount").innerText = (totalPrice + totalShipping + totalTax).toFixed(2);
}

// Function to clear the cart
function clearCart() {
  cart = [];
  renderCart();
}

// Load products on page load
document.addEventListener("DOMContentLoaded", loadProducts);