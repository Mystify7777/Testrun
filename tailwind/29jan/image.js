const carProducts = [
    {
        id: 1,
        name: "Car Model 1",
        description: "Description of the car 1.",
        image: "./car1/car1.jpg",
        hoverImage: "./car1/car2.png"
    },
    {
        id: 2,
        name: "Car Model 2",
        description: "Description of the car 2.",
        image: "./car1/car3.png",
        hoverImage: "./car1/car4.png"
    },
    {
        id: 3,
        name: "Car Model 3",
        description: "Description of the car 3.",
        image: "./car1/car5.png",
        hoverImage: "./car1/car6.png"
    },
    {
        id: 4,
        name: "Car Model 4",
        description: "Description of the car 4.",
        image: "./car1/car1.jpg", // Reusing image due to limited options
        hoverImage: "./car1/car2.png"
    },
    {
        id: 5,
        name: "Car Model 5",
        description: "Description of the car 5.",
        image: "./car1/car3.png", // Reusing image due to limited options
        hoverImage: "./car1/car4.png"
    }
];

const bikeProducts = [
    {
        id: 1,
        name: "Bike Model 1",
        description: "Description of the bike 1.",
        image: "./bike1/b1.jpg",
        hoverImage: "./bike1/b1-hover.jpg"
    },
    {
        id: 2,
        name: "Bike Model 2",
        description: "Description of the bike 2.",
        image: "./bike1/b2.png",
        hoverImage: "./bike1/b2-hover.jpg"
    },
    {
        id: 3,
        name: "Bike Model 3",
        description: "Description of the bike 3.",
        image: "./bike1/b1-hover.jpg",
        hoverImage: "./bike1/b1.jpg"
    },
    {
        id: 4,
        name: "Bike Model 4",
        description: "Description of the bike 4.",
        image: "./bike1/b2.png", // Reusing image due to limited options
        hoverImage: "./bike1/b2-hover.jpg"
    },
    {
        id: 5,
        name: "Bike Model 5",
        description: "Description of the bike 5.",
        image: "./bike1/b1.jpg", // Reusing image due to limited options
        hoverImage: "./bike1/b1-hover.jpg"
    }
];


// Function to create product cards dynamically
function createProductCards(products, containerId) {
    const container = document.getElementById(containerId);
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
        `;

        // Add hover effect to change image
        card.addEventListener('mouseover', () => {
            const img = card.querySelector('img');
            img.src = product.hoverImage;
        });

        card.addEventListener('mouseout', () => {
            const img = card.querySelector('img');
            img.src = product.image;
        });

        container.appendChild(card);
    });
}

// Generate product cards for cars and bikes
createProductCards(carProducts, 'car-grid-container');
createProductCards(bikeProducts, 'bike-grid-container');
