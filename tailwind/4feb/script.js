const Products = [
    {
        image: "a.jpg",
        name: "Smart Robot Vacuum Cleaner",
        features: ["Auto Charging", "Wi-Fi Control", "Multi-Surface Cleaning"],
        description: "Keep your floors spotless with this smart robotic vacuum cleaner.",
        price: 18999,
        compareAt: 26999,
        discount: 30
    },
    {
        image: "b.jpg",
        name: "Ultra HD Projector",
        features: ["4K Resolution", "HDR Support", "Built-in Speakers"],
        description: "Turn your home into a theater with crystal-clear 4K projection.",
        price: 32999,
        compareAt: 44999,
        discount: 27
    },
    {
        image: "c.jpg",
        name: "Smart LED Light Bulb",
        features: ["Wi-Fi Enabled", "Voice Control", "16 Million Colors"],
        description: "Customize your lighting with smart LED bulbs controlled via an app.",
        price: 1499,
        compareAt: 2299,
        discount: 33
    },
    {
        image: "d.jpg",
        name: "Ergonomic Office Chair",
        features: ["Adjustable Lumbar Support", "Breathable Mesh", "Reclining Function"],
        description: "Improve your posture and comfort with an ergonomic office chair.",
        price: 15999,
        compareAt: 21999,
        discount: 26
    },
    {
        image: "aa.jpg",
        name: "Smart Coffee Maker",
        features: ["Wi-Fi Connected", "Scheduled Brewing", "Compatible with Alexa"],
        description: "Start your day right with a coffee maker that brews on schedule.",
        price: 6499,
        compareAt: 9499,
        discount: 33
    },
    {
        image: "bb.jpg",
        name: "High-Speed External SSD",
        features: ["1TB Storage", "USB-C & USB 3.2", "Shock Resistant"],
        description: "Transfer files instantly with this high-speed external SSD.",
        price: 11999,
        compareAt: 15999,
        discount: 25
    },
    {
        image: "cc.jpg",
        name: "Electric Standing Desk",
        features: ["Adjustable Height", "Memory Presets", "Sturdy Frame"],
        description: "Switch between sitting and standing with a smooth electric desk.",
        price: 24999,
        compareAt: 34999,
        discount: 25
    },
    {
        image: "dd.jpg",
        name: "Wireless Home Theater System",
        features: ["5.1 Surround Sound", "Bluetooth & Wi-Fi", "Dolby Atmos"],
        description: "Immerse yourself in high-quality audio with a premium home theater setup.",
        price: 49999,
        compareAt: 66999,
        discount: 25
    },
    {
        image: "b.jpg",
        name: "Ultra HD Projector",
        features: ["4K Resolution", "HDR Support", "Built-in Speakers"],
        description: "Turn your home into a theater with crystal-clear 4K projection.",
        price: 32999,
        compareAt: 44999,
        discount: 27
    },
    {
        image: "c.jpg",
        name: "Smart LED Light Bulb",
        features: ["Wi-Fi Enabled", "Voice Control", "16 Million Colors"],
        description: "Customize your lighting with smart LED bulbs controlled via an app.",
        price: 1499,
        compareAt: 2299,
        discount: 33
    }
];

// Hero Section Slider
let currentSlide = 0;
function showSlides() {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? "block" : "none";
    });
    currentSlide = (currentSlide + 1) % slides.length;
}
setInterval(showSlides, 3000);
showSlides();

// Featured Products Carousel
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

displayProductsCarousel(Products, "featured-carousel");

// More Products Grid
function displayProductsGrid(productsArray, containerId) {
    let temp = "";
    const container = document.getElementById(containerId);

    for (const product of productsArray) {
        temp += `
            <div class="product-card">
                <div class="product-card-inner">
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-details">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p>
                        <p class="product-price">$${product.price.toFixed(2)}</p>
                        <p class="compare-price">$${product.compareAt.toFixed(2)}</p>
                        <p class="discount">${product.discount}% off</p>
                    </div>
                </div>
            </div>
        `;
    }
    container.innerHTML = temp;
}

displayProductsGrid(Products, "product-grid");
