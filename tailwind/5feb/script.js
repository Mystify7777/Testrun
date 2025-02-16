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

// Function to Display Products
function displayProducts() {
    const container = document.getElementById("product-container");
    let content = "";
    
    for (const product of products) {
        content += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price}</p>
            </div>
        `;
    }
    
    container.innerHTML = content;
}

displayProducts();

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
