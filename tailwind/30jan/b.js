const products = [
    { name: "Gaming Mouse", price: "₹3,999", image: "b.jpg", description: "Ergonomic design with RGB lighting and ultra-fast response." },
    { name: "Mechanical Keyboard", price: "₹5,499", image: "bb.jpg", description: "RGB backlit keyboard with customizable switches." },
    { name: "Smart Glasses", price: "₹19,999", image: "b.jpg", description: "Augmented reality glasses with voice control." },
    { name: "Portable Projector", price: "₹12,499", image: "bb.jpg", description: "Compact, high-resolution projector for entertainment on the go." },
    { name: "Wireless Charger", price: "₹2,999", image: "a.jpg", description: "Fast and efficient wireless charging for multiple devices." },
    { name: "VR Headset", price: "₹34,999", image: "aa.jpg", description: "Immersive virtual reality experience with high-resolution display." },
    { name: "Smart Home Hub", price: "₹8,999", image: "b.jpg", description: "Control all your smart devices from one central hub." },
    { name: "Drone", price: "₹44,999", image:"bb.jpg", description: "4K camera drone with long battery life and GPS navigation." },
    { name: "E-Reader", price: "₹11,999", image:"aa.jpg", description: "Lightweight and waterproof e-reader with adjustable lighting." },
    { name: "Noise Cancelling Headphones", price: "₹7,999", image: "bb.jpg", description: "Block out distractions and enjoy pure audio clarity." }
];

const container = document.getElementById("product-container");

let template = "";

for (const product of products) {
    template += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
                <button>Add to Cart</button>
            </div>
        </div>
    `;
}

container.innerHTML = template;
