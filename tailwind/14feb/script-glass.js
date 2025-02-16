document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Neon Sneakers", image: "sneakers.jpg", price: 99 },
        { id: 2, name: "Holographic Watch", image: "watch.jpg", price: 199 },
        { id: 3, name: "Cyberpunk Glasses", image: "glasses.jpg", price: 149 },
        { id: 4, name: "Smart Backpack", image: "backpack.jpg", price: 179 },
        { id: 5, name: "Futuristic Jacket", image: "jacket.jpg", price: 249 },
        { id: 6, name: "LED Hoodie", image: "hoodie.jpg", price: 129 },
        { id: 7, name: "Tech Ring", image: "ring.jpg", price: 89 },
        { id: 8, name: "Augmented Reality Headset", image: "headset.jpg", price: 499 },
        { id: 9, name: "Wireless Earbuds", image: "earbuds.jpg", price: 149 },
        { id: 10, name: "Smartphone Stand", image: "stand.jpg", price: 39 }
    ];
    
    const productListContainer = document.querySelector(".product-list-container");
    
    function renderProducts() {
        productListContainer.innerHTML = "";
        for (const product of products) {
            productListContainer.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                    <p>$${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
        }
    }
    
    renderProducts();
});
