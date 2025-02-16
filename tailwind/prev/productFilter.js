const products = [
    {
      "name": "Smartphone X1",
      "price": 699,
      "variants": ["128GB", "256GB", "512GB"],
      "weight": "200g",
      "dimension": "15.7 x 7.5 x 0.8 cm",
      "compare_at_price": 799,
      "review": 4.5,
      "comments": ["Great performance!", "Worth the price.", "Battery life could be better."]
    },
    {
      "name": "Wireless Earbuds Pro",
      "price": 149,
      "variants": ["Black", "White", "Blue"],
      "weight": "50g",
      "dimension": "6.5 x 4.5 x 3 cm",
      "compare_at_price": 179,
      "review": 4.2,
      "comments": ["Excellent sound quality.", "Fits comfortably.", "Noise cancelation is top-notch."]
    },
    {
      "name": "Gaming Laptop GT15",
      "price": 1299,
      "variants": ["16GB RAM, 512GB SSD", "32GB RAM, 1TB SSD"],
      "weight": "2.5kg",
      "dimension": "38 x 26 x 2.5 cm",
      "compare_at_price": 1499,
      "review": 4.8,
      "comments": ["Handles all games smoothly.", "Runs a bit hot.", "Fantastic display quality."]
    },
    {
      "name": "Smartwatch S5",
      "price": 249,
      "variants": ["Standard Edition", "Sport Edition"],
      "weight": "80g",
      "dimension": "4.4 x 3.8 x 1.1 cm",
      "compare_at_price": 299,
      "review": 4.4,
      "comments": ["Very accurate fitness tracking.", "Good battery life.", "Stylish design."]
    },
    {
      "name": "4K Ultra HD TV",
      "price": 799,
      "variants": ["43-inch", "55-inch", "65-inch"],
      "weight": "12kg",
      "dimension": "96 x 56 x 6 cm (43-inch model)",
      "compare_at_price": 899,
      "review": 4.6,
      "comments": ["Picture quality is amazing.", "Good value for the price.", "Sound could be improved."]
    },
    {
      "name": "Bluetooth Speaker B10",
      "price": 99,
      "variants": ["Black", "Red", "Gray"],
      "weight": "1.2kg",
      "dimension": "20 x 8 x 8 cm",
      "compare_at_price": 129,
      "review": 4.3,
      "comments": ["Loud and clear audio.", "Portable and durable.", "Battery lasts long."]
    },
    {
      "name": "Digital Camera CX400",
      "price": 599,
      "variants": ["18-55mm Lens", "18-135mm Lens"],
      "weight": "1.4kg",
      "dimension": "12.5 x 9.5 x 7.6 cm",
      "compare_at_price": 649,
      "review": 4.7,
      "comments": ["Great for beginners.", "Sharp image quality.", "Lightweight and compact."]
    },
    {
      "name": "Electric Scooter E200",
      "price": 499,
      "variants": ["Black", "White"],
      "weight": "14kg",
      "dimension": "110 x 45 x 100 cm",
      "compare_at_price": 599,
      "review": 4.5,
      "comments": ["Smooth ride.", "Easy to fold.", "Battery could last longer."]
    },
    {
      "name": "Running Shoes R5",
      "price": 120,
      "variants": ["Size 8", "Size 9", "Size 10"],
      "weight": "600g",
      "dimension": "32 x 18 x 12 cm",
      "compare_at_price": 140,
      "review": 4.6,
      "comments": ["Very comfortable.", "Good grip on surfaces.", "Stylish and lightweight."]
    },
    {
      "name": "Coffee Maker CM30",
      "price": 89,
      "variants": ["Black", "Silver"],
      "weight": "3kg",
      "dimension": "28 x 20 x 30 cm",
      "compare_at_price": 109,
      "review": 4.4,
      "comments": ["Makes coffee quickly.", "Easy to clean.", "Compact design."]
    }
  ];



function filter1(max_price, min_review) {
    return products.filter(product => {
      return product.price <= max_price && product.review >= min_review;
    });
  }

  function clac_discount(price, compare_at_price){
    return (1 - (price / compare_at_price)) * 100;
  }

  function filter2(discount) {
    return products.filter(product => {
      return clac_discount(product.price, product.compare_at_price) >= discount;
    });
  }
  
  let filtered_products = filter1(600, 4.5);

  console.log("Filtered Products by price and review:", filtered_products);

  console.log(" ");

  for(item of filtered_products){
    console.log(`Discount of ${item.name} is ${clac_discount(item.price, item.compare_at_price)}%`);

  }
  
  console.log(" ");

  filtered_products = filter2(15);

//   console.log("Filtered Products by discount:", filtered_products);

  console.log(" ");
  console.log("Filtered Products by discount:");
  console.log(" ");
  let i=1;
  for(item of filtered_products){
    console.log(`${i}. ${item.name} is available at Rs.${item.price} with ${clac_discount(item.price, item.compare_at_price)}% discount.`);
    i++;
    console.log(" ");
  }