const productContainer = document.getElementById("productContainer");
const priceRangeFilter = document.getElementById("priceRange");
const stockFilter = document.getElementById("inStock");
const reviewFilter = document.getElementById("minReview");
const colorFilter = document.getElementById("color");

// Populate filters dynamically
const populateFilters = () => {
  // Populate price range
  priceRangeFilter.innerHTML = `
    <option value="all">All</option>
    <option value="100-500">₹100 - ₹500</option>
    <option value="500-1000">₹500 - ₹1000</option>
    <option value="1000-2000">₹1000 - ₹2000</option>
  `;

  // Populate stock filter
  stockFilter.innerHTML = `
    <option value="all">All</option>
    <option value="inStock">In Stock</option>
    <option value="outOfStock">Out of Stock</option>
  `;

  // Populate reviews filter
  reviewFilter.innerHTML = `
    <option value="all">All</option>
    <option value="4.0">4.0+</option>
    <option value="4.5">4.5+</option>
  `;

  // Populate color filter
  colorFilter.innerHTML = `
    <option value="all">All</option>
    <option value="Black">Black</option>
    <option value="White">White</option>
    <option value="Blue">Blue</option>
  `;
};

// Display items in the product container
const displayItems = (filteredItems) => {
  productContainer.innerHTML = "";
  if (filteredItems.length === 0) {
    productContainer.innerHTML =
      `<p class="col-span-full text-center text-gray-500">No items match your filter.</p>`;
    return;
  }
  filteredItems.forEach((item) => {
    productContainer.innerHTML += `
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-4">
          <h2 class="text-lg font-bold">${item.name}</h2>
          <p class="text-sm text-gray-500">Brand: ${item.specs.brand}</p>
          <p class="text-gray-800 font-semibold">₹${item.price} <span class="line-through text-gray-500">₹${item.compareAtPrice}</span></p>
          <p class="text-sm text-gray-500">${item.inStock ? "In Stock" : "Out of Stock"}</p>
          <p class="text-sm text-gray-500">Reviews: ${item.reviews}★</p>
        </div>
      </div>`;
  });
};

// Filter items based on selected filters
const filterItems = () => {
  let filteredItems = [...items];

      // Filter by price range
      const priceRangeValue = priceRangeFilter.value;
      if (priceRangeValue !== "all") {
        const [minPrice, maxPrice] = priceRangeValue.split("-").map(Number);
        filteredItems = filteredItems.filter(item => item.price >= minPrice && item.price <= maxPrice);
      }

      // Filter by stock status
      const stockValue = stockFilter.value;
      if (stockValue === "inStock") {
        filteredItems = filteredItems.filter(item => item.inStock);
      } else if (stockValue === "outOfStock") {
        filteredItems = filteredItems.filter(item => !item.inStock);
      }

      // Filter by reviews
      const minReviewValue = parseFloat(reviewFilter.value);
      if (!isNaN(minReviewValue)) {
        filteredItems = filteredItems.filter(item => item.reviews >= minReviewValue);
      }

      // Filter by color
      const colorValue = colorFilter.value;
      if (colorValue !== "all") {
        filteredItems = filteredItems.filter(item => item.colors.includes(colorValue));
      }


  // Display filtered items
  displayItems(filteredItems);
};

// Initialize page
populateFilters();
displayItems(items);

// Add event listeners for filters
priceRangeFilter.addEventListener("change", filterItems);
stockFilter.addEventListener("change", filterItems);
reviewFilter.addEventListener("change", filterItems);
colorFilter.addEventListener("change", filterItems);
