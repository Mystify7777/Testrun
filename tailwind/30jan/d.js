const products = [
    { name: "Cyberpunk 2077", price: "₹2,999", image: "ddd.jpg", description: "An open-world RPG set in a dystopian future." },
    { name: "The Witcher 3", price: "₹1,999", image: "d.jpg", description: "A legendary RPG with a rich storyline." },
    { name: "Elden Ring", price: "₹3,499", image: "dd.jpg", description: "A challenging action RPG from FromSoftware." },
    { name: "God of War", price: "₹2,499", image: "ddd.jpg", description: "Kratos returns in this epic Norse adventure." },
    { name: "Horizon Forbidden West", price: "₹3,999", image: "d.jpg", description: "Explore a post-apocalyptic world with Aloy." },
    { name: "Call of Duty: Modern Warfare", price: "₹4,499", image: "dd.jpg", description: "Intense first-person shooter action." },
    { name: "Assassin's Creed Valhalla", price: "₹3,999", image: "ddd.jpg", description: "Lead your Viking clan to glory." },
    { name: "Red Dead Redemption 2", price: "₹3,499", image: "d.jpg", description: "A wild west adventure like no other." },
    { name: "Halo Infinite", price: "₹2,999", image: "dd.jpg", description: "Master Chief returns in this epic FPS." },
    { name: "Final Fantasy VII Remake", price: "₹4,999", image: "d.jpg", description: "A reimagining of the classic RPG." }
];

const container = document.getElementById("product-container");

let template = "";

for (const product of products) {
    template += `
        <div class="product-card" style="background-image: url('${product.image}');">
            <div class="card-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="price">${product.price}</div>
                <button>Add to Cart</button>
            </div>
        </div>
    `;
}

container.innerHTML = template;