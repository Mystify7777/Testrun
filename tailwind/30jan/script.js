const products = [
    {
        image: "",
        name: "Product 1",
        features: "Feature 1, Feature 2, Feature 3",
        price: 49.99,
        compareAt: 69.99
    },
    {
        image: "",
        name: "Product 2",
        features: "Feature A, Feature B, Feature C",
        price: 39.99,
        compareAt: 59.99
    }
];

const productGrid = document.getElementById("product-grid");

for (const product of products) {
    const discount = ((product.compareAt - product.price) / product.compareAt * 100).toFixed(0);
    
    productGrid.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <h3>${product.name}</h3>
                <p>${product.features}</p>
                <p class="product-price">$${product.price}</p>
                <p class="compare-price">$${product.compareAt}</p>
                <p class="discount">${discount}% off</p>
            </div>
        </div>
    `;
}
