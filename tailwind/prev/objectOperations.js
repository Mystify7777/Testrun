const items = [
    {
        id: 1,
        name: "Smartphone",
        price: 699,
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
        specs: {
            brand: "BrandZ",
            batteryLife: "24 hours",
            waterproof: true
        },
        colors: ["Black", "White", "Pink"],
        variants: ["Blue-Black", "White-Gold", "Blue-White","Black-Red"],
        inStock: true,
        reviews: 4.2
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 249,
        specs: {
            brand: "BrandW",
            screenSize: "1.5 inches",
            fitnessTracking: true
        },
        colors: ["Black", "Green", "Blue"],
        variants: ["Standard Edition", "Sport Edition","Pro Edition"],
        inStock: true,
        reviews: 4.4
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        price: 99,
        specs: {
            brand: "BrandQ",
            outputPower: "10W",
            batteryLife: "10 hours"
        },
        colors: ["Red", "Black", "Gray"],
        variants: ["Black-Gold", "Red-Black", "Gray-Black"],
        inStock: false,
        reviews: 4.3
    }
];


console.log(items);
console.log(" ");

//1.Display all product names and their price in a formatted string
for (const item of items) {
    console.log(`Product: ${item.name}, Price: Rs. ${item.price}`);
}
console.log(" ");


//2. List each product with all its specifications ??? dot use karne pe undefined kyu ho jaa rha hai
for (const item of items) {
    console.log(`Details for ${item.name}:`);
    for (const key in item) {
        if (typeof item[key] === "object" && !Array.isArray(item[key])) {
            console.log("  Specifications:");
            for (const specKey in item[key]) {
                console.log(`    ${specKey}: ${item[key][specKey]}`);
            }
        } else if (Array.isArray(item.key)) {
            console.log(`  ${key}: ${item[key].join(", ")}`);
        } else {
            console.log(`  ${key}: ${item[key]}`);
        }
    }
    console.log("-------------------------");
}
console.log(" ");


//3. List all in-stock items with their available colors
for (const item of items) {
    if (item.inStock) {
        console.log(`${item.name} is in stock with colors: ${item.colors.join(", ")}`);
    }
}
console.log(" ");


//4. Display each product and iterate through its colors
for (const item of items) {
    console.log(`Colors available for ${item.name}:`);
    for (const color of item.colors) {
        console.log(`  - ${color}`);
    }
    console.log("-------------------------");
}
console.log(" ");


//5. Count and display how many specifications each product has
for (const item of items) {
    const specKeys = Object.keys(item.specs);
    console.log(`${item.name} has ${specKeys.length} specifications:`);
    for (const specKey of specKeys) {
        console.log(`  ${specKey}: ${item.specs[specKey]}`);
    }
    console.log("-------------------------");
}
console.log(" ");


//6. Use of map method to create a new array of product names

const itemNames = items.map(item => item.name);
console.log("Item Names:", itemNames);
console.log(" ");


//7. Use map funtion to create a new array of product names with their prices
const priceTags = items.map(item => `${item.name}: Rs. ${item.price}`);
console.log("Price Tags:", priceTags);
console.log(" ");


//8. pretty print the items array
  for (let item of items){
    console.log(`
      Name: ${item.name}
      Price: Rs. ${item.price}
      Variants: ${(item.variants || []).join(", ")}
      Reviews: ${item.reviews}/5
      --------------------------
      `);
  }