// Product Data
const products = [
    {
        image: "product1.jpg",
        name: "Wireless Headphones",
        price: "₹7999",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        image: "product2.jpg",
        name: "Smartwatch",
        price: "₹11999",
        description: "Feature-rich smartwatch with fitness tracking and notifications."
    },
    {
        image: "product3.jpg",
        name: "Bluetooth Speaker",
        price: "₹6499",
        description: "Portable Bluetooth speaker with rich sound quality."
    },
    {
        image: "product4.jpg",
        name: "Gaming Mouse",
        price: "₹2999",
        description: "Ergonomic gaming mouse with customizable RGB lighting."
    },
    {
        image: "product5.jpg",
        name: "Mechanical Keyboard",
        price: "₹6999",
        description: "Mechanical keyboard with tactile switches for an enhanced typing experience."
    },
    {
        image: "product6.jpg",
        name: "Wireless Charger",
        price: "₹1999",
        description: "Fast wireless charger compatible with multiple devices."
    },
    {
        image: "product7.jpg",
        name: "Portable Power Bank",
        price: "₹3499",
        description: "High-capacity power bank with fast charging support."
    },
    {
        image: "product8.jpg",
        name: "Smart LED Bulb",
        price: "₹1299",
        description: "WiFi-enabled smart bulb with adjustable brightness and colors."
    },
    {
        image: "product9.jpg",
        name: "4K Ultra HD Monitor",
        price: "₹24999",
        description: "Experience stunning visuals with a 4K UHD display and ultra-thin bezels."
    },
    {
        image: "product10.jpg",
        name: "Noise Cancelling Earbuds",
        price: "₹8999",
        description: "Compact and powerful earbuds with active noise cancellation and long battery life."
    }
];

// Cart functionality
let cart = [];

function displayProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; 
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;

        container.appendChild(productCard);

        productCard.querySelector(".add-to-cart").addEventListener("click", () => addToCart(product.name));
    });
}

displayProducts();

function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    const cartItem = cart.find(item => item.name === productName);
    
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({...product, quantity: 1});
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <p>${item.name} - ${item.price}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" data-index="${index}" data-action="decrease">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" data-index="${index}" data-action="increase">+</button>
                    <button class="quantity-btn" data-index="${index}" data-action="remove">Remove</button>
                </div>
            </div>
        `;
        cartContainer.appendChild(cartItem);
    });

    document.querySelectorAll(".quantity-btn").forEach(button => {
        button.addEventListener("click", handleCartAction);
    });
}

function handleCartAction(event) {
    const index = event.target.dataset.index;
    const action = event.target.dataset.action;

    if (action === "increase") {
        cart[index].quantity += 1;
    } else if (action === "decrease") {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
    } else if (action === "remove") {
        cart.splice(index, 1);
    }
    updateCartDisplay();
}

// Toggle Cart Visibility
const toggleCartBtn = document.getElementById("toggle-cart");
const cartSection = document.getElementById("cart-section");

toggleCartBtn.addEventListener("click", () => {
    cartSection.classList.toggle("hidden");
    toggleCartBtn.textContent = cartSection.classList.contains("hidden") ? "Show Cart" : "Hide Cart";
});

// Theme Switching Functionality
const toggleThemeBtn = document.getElementById("toggle-theme");

toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    toggleThemeBtn.textContent = document.body.classList.contains("light") ? "Dark Mode" : "Light Mode";
});
