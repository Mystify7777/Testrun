const products = [
    { name: "Laptop", price: "₹74,999", image: "a.jpg", description: "A high-performance laptop for work and play." },
    { name: "Smartphone", price: "₹49,999", image: "aa.jpg", description: "Latest model with amazing camera and battery life." },
    { name: "Headphones", price: "₹4,999", image: "a.jpg", description: "Noise-canceling headphones for immersive sound." },
    { name: "Smartwatch", price: "₹14,999", image: "aa.jpg", description: "Stay connected with health and fitness tracking." },
    { name: "Tablet", price: "₹29,999", image: "a.jpg", description: "A powerful tablet for entertainment and work on the go." },
    { name: "Gaming Console", price: "₹39,999", image: "aa.jpg", description: "Next-gen gaming console for immersive experiences." },
    { name: "Camera", price: "₹59,999", image: "a.jpg", description: "Capture stunning photos and videos with this DSLR camera." },
    { name: "Wireless Earbuds", price: "₹2,499", image: "aa.jpg", description: "Compact and powerful earbuds with high-quality sound." },
    { name: "Bluetooth Speaker", price: "₹3,999", image: "./a.jpg", description: "Portable speaker with deep bass and crisp sound." },
    { name: "Mechanical Keyboard", price: "₹6,999", image: "aa.jpg", description: "RGB mechanical keyboard with fast response time." }
];

const container = document.getElementById("product-container");

let template = "";

for (const product of products) {
    template += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">${product.price}</div>
            <button>Add to Cart</button>
        </div>
    `;
}

container.innerHTML = template;
