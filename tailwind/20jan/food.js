const products = [
    {
      name: "Choco Crunch Biscuits",
      brand: "SnackyTime",
      weight: [50, 100, 200],
      mrp: { 50: 25, 100: 45, 200: 80 },
      expiration_date: "2025-08-15",
      flavours: ["Chocolate", "Vanilla"],
      category: "Snacks",
      rating: 4.5,
      stock_available: true
    },
    {
      name: "Salted Potato Chips",
      brand: "CrunchBites",
      weight: [50, 100, 150],
      mrp: { 50: 20, 100: 40, 150: 60 },
      expiration_date: "2025-05-10",
      flavours: ["Classic Salted", "Sour Cream & Onion", "BBQ"],
      category: "Snacks",
      rating: 4.2,
      stock_available: true
    },
    {
      name: "Fruit Flavored Yogurt",
      brand: "DairyDelight",
      weight: [100, 200],
      mrp: { 100: 30, 200: 55 },
      expiration_date: "2025-02-20",
      flavours: ["Strawberry", "Mango", "Blueberry"],
      category: "Dairy",
      rating: 4.8,
      stock_available: true
    },
    {
      name: "Honey Almond Granola Bars",
      brand: "HealthFirst",
      weight: [30, 60],
      mrp: { 30: 20, 60: 35 },
      expiration_date: "2025-09-01",
      flavours: ["Honey Almond", "Chocolate Chip"],
      category: "Breakfast",
      rating: 4.7,
      stock_available: true
    },
    {
      name: "Spicy Masala Noodles",
      brand: "QuickBites",
      weight: [70, 140],
      mrp: { 70: 15, 140: 30 },
      expiration_date: "2025-06-15",
      flavours: ["Classic Masala", "Curry"],
      category: "Instant Food",
      rating: 4.3,
      stock_available: true
    },
    {
      name: "Rich Dark Chocolate",
      brand: "SnackyTime",
      weight: [50, 100],
      mrp: { 50: 60, 100: 110 },
      expiration_date: "2025-12-01",
      flavours: ["Dark Chocolate"],
      category: "Sweets",
      rating: 4.9,
      stock_available: true
    },
    {
      name: "Peanut Butter Jar",
      brand: "HealthFirst",
      weight: [250, 500],
      mrp: { 250: 150, 500: 280 },
      expiration_date: "2025-11-10",
      flavours: ["Classic Peanut Butter", "Honey Peanut Butter"],
      category: "Spreads",
      rating: 4.6,
      stock_available: true
    },
    {
      name: "Green Tea Bags",
      brand: "DairyDelight",
      weight: [25, 50],
      mrp: { 25: 90, 50: 170 },
      expiration_date: "2025-07-05",
      flavours: ["Mint", "Lemon"],
      category: "Beverages",
      rating: 4.4,
      stock_available: true
    },
    {
      name: "Whole Grain Crackers",
      brand: "CrunchBites",
      weight: [100, 200],
      mrp: { 100: 50, 200: 90 },
      expiration_date: "2025-03-25",
      flavours: ["Original", "Cheese"],
      category: "Snacks",
      rating: 4.1,
      stock_available: false
    },
    {
      name: "Tomato Soup",
      brand: "QuickBites",
      weight: [250, 500],
      mrp: { 250: 40, 500: 75 },
      expiration_date: "2025-04-15",
      flavours: ["Classic Tomato", "Tomato Basil"],
      category: "Soups",
      rating: 4.0,
      stock_available: true
    },
    {
      name: "Cheese Flavored Popcorn",
      brand: "SnackyTime",
      weight: [50, 100],
      mrp: { 50: 25, 100: 45 },
      expiration_date: "2025-06-01",
      flavours: ["Cheese", "Caramel"],
      category: "Snacks",
      rating: 4.5,
      stock_available: true
    },
    {
      name: "Energy Drink",
      brand: "DairyDelight",
      weight: [250, 500],
      mrp: { 250: 50, 500: 90 },
      expiration_date: "2025-01-30",
      flavours: ["Original", "Berry Blast"],
      category: "Beverages",
      rating: 4.7,
      stock_available: true
    },
    {
      name: "Mint Flavored Gum",
      brand: "CrunchBites",
      weight: [20, 50],
      mrp: { 20: 10, 50: 25 },
      expiration_date: "2026-01-10",
      flavours: ["Mint", "Spearmint"],
      category: "Snacks",
      rating: 4.3,
      stock_available: false
    },
    {
      name: "Multigrain Bread Loaf",
      brand: "HealthFirst",
      weight: [400, 800],
      mrp: { 400: 40, 800: 75 },
      expiration_date: "2025-01-25",
      flavours: ["Original"],
      category: "Breakfast",
      rating: 4.8,
      stock_available: true
    },
    {
      name: "Herbal Infusion Tea",
      brand: "DairyDelight",
      weight: [25, 50],
      mrp: { 25: 120, 50: 200 },
      expiration_date: "2025-08-20",
      flavours: ["Chamomile", "Lavender"],
      category: "Beverages",
      rating: 4.9,
      stock_available: true
    }
  ];
  

  //function to display products
  const productContainer = document.getElementById("product-container");

  function renderProducts(products) {
    // Clear the existing products in the container
    productContainer.innerHTML = "";
  
    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "card";
  
      card.innerHTML = `
        <div class="card-header">${product.name}</div>
        <div class="card-body">
          <ul>
            <li><strong>Brand:</strong> ${product.brand}</li>
            <li><strong>Category:</strong> ${product.category}</li>
            <li><strong>Flavours:</strong> ${product.flavours.join(", ")}</li>
            <li><strong>Weight Options:</strong> ${product.weight.join("g, ")}g</li>
            <li><strong>Prices:</strong> ${Object.entries(product.mrp)
              .map(([weight, price]) => `${weight}g: ₹${price}`)
              .join(", ")}</li>
            <li><strong>Expiration Date:</strong> ${product.expiration_date}</li>
            <li><strong>Rating:</strong> ${product.rating}</li>
            <li><strong>Stock Available:</strong> ${product.stock_available ? "Yes" : "No"}</li>
          </ul>
        </div>
        <div class="card-footer">
          <a href="#" class="button">Buy Now</a>
        </div>
      `;
  
      productContainer.appendChild(card);
    });
  }
  
  // Function to apply all selected filters and sorting
  function applyFilters() {
    let filteredProducts = [...products];
  
    // Filter by brand
    const brand = document.getElementById("brand").value;
    if (brand) {
      filteredProducts = filteredProducts.filter(product => product.brand === brand);
    }
  
    // Filter by category
    const category = document.getElementById("category").value;
    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
  
    // Filter by rating
    const rating = parseFloat(document.getElementById("rating").value);
    if (rating) {
      filteredProducts = filteredProducts.filter(product => product.rating >= rating);
    }
  
    // Filter by flavour
    const flavour = document.getElementById("flavour").value;
    if (flavour) {
      filteredProducts = filteredProducts.filter(product => product.flavours.includes(flavour));
    }
  
    // Filter by stock
    const inStock = document.getElementById("stock").checked;
    if (inStock) {
      filteredProducts = filteredProducts.filter(product => product.stock_available);
    }
  
    renderProducts(filteredProducts);
  }
  
  // Sort Functions
  function sortByExpirationDate() {
    const sortedProducts = [...products].sort((a, b) => {
      const dateA = new Date(a.expiration_date);
      const dateB = new Date(b.expiration_date);
      return dateA - dateB;
    });
    renderProducts(sortedProducts);
  }
  
  function sortByPrice() {
    const sortedProducts = [...products].sort((a, b) => {
      const minPriceA = Math.min(...Object.values(a.mrp));
      const minPriceB = Math.min(...Object.values(b.mrp));
      return minPriceA - minPriceB;
    });
    renderProducts(sortedProducts);
  }
  
  function sortByRating() {
    const sortedProducts = [...products].sort((a, b) => b.rating - a.rating);
    renderProducts(sortedProducts);
  }
  
  // Initial call to display all products
  renderProducts(products);
  