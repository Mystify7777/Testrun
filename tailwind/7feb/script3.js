const products = [];

document.getElementById("add-product").addEventListener("click", () => {
    const name = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const image = document.getElementById("product-image").value;
    const description = document.getElementById("product-description").value;

    if (name && price && image && description) {
        products.push({ name, price, image, description });
        document.getElementById("product-name").value = "";
        document.getElementById("product-price").value = "";
        document.getElementById("product-image").value = "";
        document.getElementById("product-description").value = "";
        displayProducts();
    } else {
        alert("Please fill in all fields!");
    }
});

function displayProducts() {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
        `;

        container.appendChild(card);
    });
}

const toggleButton = document.getElementById("toggle-cards");
const productContainer = document.getElementById("product-container");

toggleButton.addEventListener("click", () => {
    productContainer.classList.toggle("hidden");
    toggleButton.textContent = productContainer.classList.contains("hidden") ? "Show Cards" : "Hide Cards";
});
