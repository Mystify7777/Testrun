document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Neon Sneakers", image: "sneakers.jpg", price: 99, description: "Glowing futuristic sneakers for style lovers." },
        { id: 2, name: "Holographic Watch", image: "watch.jpg", price: 199, description: "A next-gen watch with a holographic display." },
        { id: 3, name: "Cyberpunk Glasses", image: "glasses.jpg", price: 149, description: "Augmented reality glasses for a digital world." },
        { id: 4, name: "Smart Backpack", image: "backpack.jpg", price: 179, description: "A stylish backpack with charging capabilities." },
        { id: 5, name: "Futuristic Jacket", image: "jacket.jpg", price: 249, description: "A self-heating, water-resistant tech jacket." },
        { id: 6, name: "LED Hoodie", image: "hoodie.jpg", price: 129, description: "A hoodie with customizable LED patterns." },
        { id: 7, name: "Tech Ring", image: "ring.jpg", price: 89, description: "A smart ring with gesture control functionality." },
        { id: 8, name: "AR Headset", image: "headset.jpg", price: 499, description: "Experience the world in augmented reality." },
        { id: 9, name: "Wireless Earbuds", image: "earbuds.jpg", price: 149, description: "Crystal-clear sound with noise cancellation." },
        { id: 10, name: "Smartphone Stand", image: "stand.jpg", price: 39, description: "Adjustable stand with wireless charging." }
    ];
    
    const productListContainer = document.querySelector(".product-list-container");
    
    function renderProducts() {
        productListContainer.innerHTML = "";
        for (const product of products) {
            productListContainer.innerHTML += `
                <div class="product-card">
                    <div class="product-card-inner">
                        <div class="product-card-front">
                            <img src="${product.image}" alt="${product.name}">
                            <p>${product.name}</p>
                            <p>$${product.price}</p>
                        </div>
                        <div class="product-card-back">
                            <p>${product.description}</p>
                            <button class="buy-now">Buy Now</button>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    renderProducts();
});
