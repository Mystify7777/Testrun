let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to Display Cart Items
function displayCart() {
    const container = document.getElementById("cart-container");
    container.innerHTML = "";
    
    if (cart.length === 0) {
        container.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    
    for (const item of cart) {
        container.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-details">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity('${item.name}', -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.name}', 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    }
}

displayCart();

// Function to Update Quantity
function updateQuantity(productName, change) {
    const cartItem = cart.find(item => item.name === productName);
    
    if (cartItem) {
        cartItem.quantity += change;
        if (cartItem.quantity <= 0) {
            cart = cart.filter(item => item.name !== productName);
        }
    }
    
    saveCart();
    displayCart();
    updateCartCount();
}

// Empty Cart Function
function emptyCart() {
    cart = [];
    saveCart();
    displayCart();
    updateCartCount();
}

// Save Cart to Local Storage
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Update Cart Count in Navbar
function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.reduce((total, item) => total + item.quantity, 0);
}

updateCartCount();


// Theme Switching Functionality
const themes = {
    dark: {
        bgcolor: "#181818", 
        navbar: "#252525", 
        text: "#e0e0e0", 
        card: "#2c2c2c", 
        footer: "#1a1a1a", 
        accent: "#ff5722"
    },
    light: {
        bgcolor: "#f5f5f5", 
        navbar: "#ffffff", 
        text: "#212121", 
        card: "#eeeeee", 
        footer: "#d6d6d6", 
        accent: "#3f51b5"
    },
    dusk: {
        bgcolor: "#3a1c71", 
        navbar: "#512b81", 
        text: "#f8e1f4", 
        card: "#7a4988", 
        footer: "#4a1765", 
        accent: "#ff4081"
    },
    dawn: {
        bgcolor: "#ffefba", 
        navbar: "#ffb347", 
        text: "#5a3d2b", 
        card: "#ffd27d", 
        footer: "#ff8c42", 
        accent: "#d84315"
    },
    moonlight: {
        bgcolor: "#1c2541", 
        navbar: "#2a3b5d", 
        text: "#d1d5db", 
        card: "#3e5069", 
        footer: "#1f2937", 
        accent: "#00bcd4"
    }
};

function changeTheme(theme) {
    document.body.style.background = themes[theme].bgcolor;
    document.documentElement.style.setProperty("--navbar-bg", themes[theme].navbar);
    document.documentElement.style.setProperty("--text-color", themes[theme].text);
    document.documentElement.style.setProperty("--card-bg", themes[theme].card);
    document.documentElement.style.setProperty("--footer-bg", themes[theme].footer);
    document.documentElement.style.setProperty("--accent-color", themes[theme].accent);
}

// Mobile Menu Toggle
function toggleMenu() {
    document.querySelector(".navbar").classList.toggle("active");
}
