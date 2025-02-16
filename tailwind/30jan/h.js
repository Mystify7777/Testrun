const products = [
    {
        image: "cc.jpg",
        name: "Wireless Bluetooth Headphones",
        features: ["Noise Cancelling", "20 Hours Battery Life", "Bluetooth 5.0"],
        description: "Experience high-quality sound with noise cancellation and extended battery life.",
        price: 99.99,
        compareAt: 149.99,
        discount: 33
    },
    {
        image: "ccc.jpg",
        name: "Smart Fitness Watch",
        features: ["Heart Rate Monitor", "Sleep Tracking", "Water Resistant"],
        description: "Track your health and fitness with real-time heart monitoring and sleep analysis.",
        price: 79.99,
        compareAt: 119.99,
        discount: 33
    },
    {
        image: "ddd.jpg",
        name: "4K Ultra HD Smart TV",
        features: ["Dolby Vision", "HDR10+", "Voice Control"],
        description: "Immerse yourself in stunning 4K resolution with smart voice control features.",
        price: 499.99,
        compareAt: 699.99,
        discount: 29
    },
    {
        image: "dd.jpg",
        name: "Gaming Mechanical Keyboard",
        features: ["RGB Backlighting", "Hot-Swappable Switches", "Ergonomic Design"],
        description: "Enhance your gaming experience with tactile feedback and customizable lighting.",
        price: 129.99,
        compareAt: 179.99,
        discount: 28
    },
    {
        image: "aa.jpg",
        name: "Wireless Charging Stand",
        features: ["Fast Charging", "Multiple Device Support", "Sleek Design"],
        description: "Charge your phone and smartwatch wirelessly with a stylish, clutter-free design.",
        price: 39.99,
        compareAt: 59.99,
        discount: 33
    },
    {
        image: "a.jpg",
        name: "Noise Cancelling Earbuds",
        features: ["Active Noise Cancelling", "Touch Controls", "IPX5 Water Resistant"],
        description: "Enjoy music like never before with premium noise cancellation and a sleek fit.",
        price: 89.99,
        compareAt: 129.99,
        discount: 31
    },
    {
        image: "bb.jpg",
        name: "Portable Power Bank",
        features: ["20,000mAh Capacity", "USB-C & USB-A Ports", "Fast Charging"],
        description: "Stay powered on the go with a high-capacity portable power bank.",
        price: 49.99,
        compareAt: 79.99,
        discount: 38
    },
    {
        image: "b.jpg",
        name: "Smart Home Security Camera",
        features: ["1080p HD", "Night Vision", "Two-Way Audio"],
        description: "Keep your home secure with smart monitoring and remote access.",
        price: 59.99,
        compareAt: 89.99,
        discount: 33
    }
];


function displayProductsGrid(productsArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = productsArray.map(product => `
        <div class="product-card">
            <div class="product-card-inner">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <ul>
                        ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                <div class="product-price-section">
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <p class="compare-price">$${product.compareAt.toFixed(2)}</p>
                    <p class="discount">${product.discount}% off</p>
                </div>
            </div>
        </div>
    `).join('');
}

displayProductsGrid(products, "product-grid1");
displayProductsGrid(products, "product-grid2");
displayProductsGrid(products, "product-grid3");
