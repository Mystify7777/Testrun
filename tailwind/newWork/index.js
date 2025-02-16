const items = [
    {
        id: 1,
        name: "Smartphone",
        price: 699,
        compareAtPrice: 799,
        specs: {
            brand: "BrandX",
            storage: "128GB",
            battery: "4000mAh"
        },
        colors: ["Black", "Blue", "White"],
        variants: ["128GB", "256GB", "512GB"],
        inStock: true,
        reviews: 4.5
    },
    {
        id: 2,
        name: "Laptop",
        price: 1299,
        compareAtPrice: 1499,
        specs: {
            brand: "BrandY",
            storage: "512GB SSD",
            RAM: "16GB"
        },
        colors: ["Gray", "Silver"],
        variants: ["16GB RAM, 512GB SSD", "32GB RAM, 1TB SSD"],
        inStock: false,
        reviews: 4.8
    },
    {
        id: 3,
        name: "Wireless Earbuds",
        price: 149,
        compareAtPrice: 199,
        specs: {
            brand: "BrandZ",
            batteryLife: "24 hours",
            waterproof: true
        },
        colors: ["Black", "White", "Pink"],
        variants: ["Blue-Black", "White-Gold", "Blue-White", "Black-Red"],
        inStock: true,
        reviews: 4.2
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 249,
        compareAtPrice: 299,
        specs: {
            brand: "BrandW",
            screenSize: "1.5 inches",
            fitnessTracking: true
        },
        colors: ["Black", "Green", "Blue"],
        variants: ["Standard Edition", "Sport Edition", "Pro Edition"],
        inStock: true,
        reviews: 4.4
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 99,
        compareAtPrice: 129,
        specs: {
            brand: "BrandQ",
            outputPower: "10W",
            batteryLife: "10 hours"
        },
        colors: ["Red", "Black", "Gray"],
        variants: ["Black-Gold", "Red-Black", "Gray-Black"],
        inStock: false,
        reviews: 4.3
    },
    {
        id: 6,
        name: "Gaming Console",
        price: 499,
        compareAtPrice: 599,
        specs: {
            brand: "BrandG",
            storage: "1TB",
            supportedResolution: "4K"
        },
        colors: ["Black", "White"],
        variants: ["1TB Standard", "1TB Pro"],
        inStock: true,
        reviews: 4.7
    },
    {
        id: 7,
        name: "Tablet",
        price: 399,
        compareAtPrice: 449,
        specs: {
            brand: "BrandT",
            screenSize: "10.5 inches",
            stylusSupport: true
        },
        colors: ["Silver", "Gold", "Rose Gold"],
        variants: ["WiFi Only", "WiFi + Cellular"],
        inStock: true,
        reviews: 4.6
    },
    {
        id: 8,
        name: "Camera",
        price: 899,
        compareAtPrice: 999,
        specs: {
            brand: "BrandC",
            resolution: "24MP",
            lens: "Kit Lens 18-55mm"
        },
        colors: ["Black", "Gray"],
        variants: ["Body Only", "With Kit Lens", "With Prime Lens"],
        inStock: false,
        reviews: 4.4
    },
    {
        id: 9,
        name: "Gaming Headset",
        price: 199,
        compareAtPrice: 249,
        specs: {
            brand: "BrandH",
            microphone: true,
            surroundSound: "7.1"
        },
        colors: ["Black", "Red", "Blue"],
        variants: ["Standard", "RGB Edition"],
        inStock: true,
        reviews: 4.5
    },
    {
        id: 10,
        name: "Electric Scooter",
        price: 799,
        compareAtPrice: 899,
        specs: {
            brand: "BrandE",
            range: "30 miles",
            topSpeed: "20 mph"
        },
        colors: ["Black", "White", "Blue"],
        variants: ["Standard", "Pro"],
        inStock: true,
        reviews: 4.3
    }
];


console.log("===============================================");
//filter by price range
function filterByPriceRange(items, minPrice, maxPrice) {
    return items.filter(item => item.price >= minPrice && item.price <= maxPrice);
}

console.log(filterByPriceRange(items, 100, 500));
console.log("===============================================");


//filter by stock
function filterInStock(items) {
    return items.filter(item => item.inStock);
}

console.log(filterInStock(items));
console.log("===============================================");


//filter by review
function filterByReview(items, minReview) {
    return items.filter(item => item.reviews >= minReview);
}

console.log(filterByReview(items, 4.5));
console.log("===============================================");

//filter by variants
function filterByVariants(items, variant) {
    return items.filter(item => item.variants.includes(variant));
}

console.log(filterByVariants(items, "Standard"));
console.log("===============================================");

//filter by brand
function filterByBrand(items, brandName) {
    return items.filter(item => item.specs.brand === brandName);
}

console.log(filterByBrand(items, "BrandX"));
console.log("===============================================");

//filter by color
function filterByColor(items, color) {
    return items.filter(item => item.colors.includes(color));
}

console.log(filterByColor(items, "Black"));
console.log("===============================================");


//==============================================================//


// Function to calculate the discount percentage
const calculateDiscount = (price, compareAtPrice) => {
    return ((compareAtPrice - price) / compareAtPrice) * 100;
};

const discountedItems = [];

// Function to populate the discountedItems array
const populateDiscountedItems = (items) => {
    discountedItems.length = 0; 
    items.forEach((item) => {
        if (item.compareAtPrice && item.price < item.compareAtPrice) {
            const discount = calculateDiscount(item.price, item.compareAtPrice);
            discountedItems.push({
                name: item.name,
                discount: discount.toFixed(2) + "%" 
            });
        }
    });
};
populateDiscountedItems(items);
console.log("All discounted items:", discountedItems);
console.log("===============================================");


// Function to return items with discounts greater than a certain percentage
const getItemsWithDiscount = (threshold) => {
    return discountedItems.filter((item) => parseFloat(item.discount) > threshold);
};
console.log("Items with discounts greater than 20%:", getItemsWithDiscount(20));
console.log("===============================================");


