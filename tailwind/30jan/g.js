const Products = [
    {
        image: "a.jpg",
        name: "Smart Robot Vacuum Cleaner",
        features: ["Auto Charging", "Wi-Fi Control", "Multi-Surface Cleaning"],
        description: "Keep your floors spotless with this smart robotic vacuum cleaner.",
        price: 229.99,
        compareAt: 329.99,
        discount: 30
    },
    {
        image: "b.jpg",
        name: "Ultra HD Projector",
        features: ["4K Resolution", "HDR Support", "Built-in Speakers"],
        description: "Turn your home into a theater with crystal-clear 4K projection.",
        price: 399.99,
        compareAt: 549.99,
        discount: 27
    },
    {
        image: "c.jpg",
        name: "Smart LED Light Bulb",
        features: ["Wi-Fi Enabled", "Voice Control", "16 Million Colors"],
        description: "Customize your lighting with smart LED bulbs controlled via an app.",
        price: 19.99,
        compareAt: 29.99,
        discount: 33
    },
    {
        image: "d.jpg",
        name: "Ergonomic Office Chair",
        features: ["Adjustable Lumbar Support", "Breathable Mesh", "Reclining Function"],
        description: "Improve your posture and comfort with an ergonomic office chair.",
        price: 199.99,
        compareAt: 269.99,
        discount: 26
    },
    {
        image: "aa.jpg",
        name: "Smart Coffee Maker",
        features: ["Wi-Fi Connected", "Scheduled Brewing", "Compatible with Alexa"],
        description: "Start your day right with a coffee maker that brews on schedule.",
        price: 79.99,
        compareAt: 119.99,
        discount: 33
    },
    {
        image: "bb.jpg",
        name: "High-Speed External SSD",
        features: ["1TB Storage", "USB-C & USB 3.2", "Shock Resistant"],
        description: "Transfer files instantly with this high-speed external SSD.",
        price: 149.99,
        compareAt: 199.99,
        discount: 25
    },
    {
        image: "cc.jpg",
        name: "Electric Standing Desk",
        features: ["Adjustable Height", "Memory Presets", "Sturdy Frame"],
        description: "Switch between sitting and standing with a smooth electric desk.",
        price: 299.99,
        compareAt: 399.99,
        discount: 25
    },
    {
        image: "dd.jpg",
        name: "Wireless Home Theater System",
        features: ["5.1 Surround Sound", "Bluetooth & Wi-Fi", "Dolby Atmos"],
        description: "Immerse yourself in high-quality audio with a premium home theater setup.",
        price: 599.99,
        compareAt: 799.99,
        discount: 25
    }
];

function displayProductsCarousel(productsArray, containerId) {
    let temp = ""; 
    const container = document.getElementById(containerId);

    for (const product of productsArray) {
        temp += `
            <div class="carousel-card">
                <div class="carousel-card-inner">
                    <div class="carousel-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="carousel-details">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p class="carousel-price">$${product.price.toFixed(2)} <span class="compare-price">$${product.compareAt.toFixed(2)}</span></p>
                        <p class="carousel-discount">${product.discount}% off</p>
                    </div>
                </div>
            </div>
        `;
    }

    container.innerHTML = `<div class="product-carousel">${temp}</div>`;
}

displayProductsCarousel(Products, "product-carousel1");
displayProductsCarousel(Products, "product-carousel2");
displayProductsCarousel(Products, "product-carousel3");
displayProductsCarousel(Products, "product-carousel4");
displayProductsCarousel(Products, "product-carousel5");