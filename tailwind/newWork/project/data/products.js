
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
    },
    {
    id: 11,
    name: "Action Camera",
    price: 299,
    compareAtPrice: 349,
    specs: {
      brand: "BrandAC",
      resolution: "4K",
      waterproof: true,
    },
    colors: ["Black", "Silver", "Yellow"],
    variants: ["With Accessories", "Without Accessories"],
    inStock: true,
    reviews: 4.4,
  },
  {
    id: 12,
    name: "Robot Vacuum Cleaner",
    price: 499,
    compareAtPrice: 599,
    specs: {
      brand: "BrandRV",
      batteryLife: "120 minutes",
      smartNavigation: true,
    },
    colors: ["Black", "White"],
    variants: ["Standard", "Smart Edition"],
    inStock: true,
    reviews: 4.6,
  },
  {
    id: 13,
    name: "External SSD",
    price: 149,
    compareAtPrice: 179,
    specs: {
      brand: "BrandES",
      storage: "1TB",
      speed: "1050MB/s",
    },
    colors: ["Black", "Silver"],
    variants: ["500GB", "1TB", "2TB"],
    inStock: true,
    reviews: 4.7,
  },
  {
    id: 14,
    name: "Wireless Keyboard",
    price: 89,
    compareAtPrice: 119,
    specs: {
      brand: "BrandWK",
      connectivity: "Bluetooth",
      backlight: true,
    },
    colors: ["Black", "White"],
    variants: ["With Numpad", "Without Numpad"],
    inStock: false,
    reviews: 4.3,
  },
  {
    id: 15,
    name: "Fitness Tracker",
    price: 99,
    compareAtPrice: 129,
    specs: {
      brand: "BrandFT",
      waterproof: true,
      batteryLife: "10 days",
    },
    colors: ["Black", "Pink", "Green"],
    variants: ["Standard", "Pro"],
    inStock: true,
    reviews: 4.4,
  },
  {
    id: 16,
    name: "Smart Bulb",
    price: 29,
    compareAtPrice: 39,
    specs: {
      brand: "BrandSB",
      wattage: "9W",
      smartHomeCompatibility: true,
    },
    colors: ["White", "Multicolor"],
    variants: ["Standard", "Energy Efficient"],
    inStock: true,
    reviews: 4.6,
  },
  {
    id: 17,
    name: "Gaming Monitor",
    price: 499,
    compareAtPrice: 599,
    specs: {
      brand: "BrandGM",
      resolution: "1440p",
      refreshRate: "144Hz",
    },
    colors: ["Black"],
    variants: ["27-inch", "32-inch", "Curved"],
    inStock: true,
    reviews: 4.8,
  },
  {
    id: 18,
    name: "Drone",
    price: 899,
    compareAtPrice: 999,
    specs: {
      brand: "BrandD",
      range: "5 km",
      camera: "4K UHD",
    },
    colors: ["Black", "White"],
    variants: ["With Extra Battery", "Standard"],
    inStock: false,
    reviews: 4.5,
  },
  {
    id: 19,
    name: "Portable Projector",
    price: 249,
    compareAtPrice: 299,
    specs: {
      brand: "BrandPP",
      resolution: "1080p",
      brightness: "500 lumens",
    },
    colors: ["Black", "Gray"],
    variants: ["Battery Powered", "Standard"],
    inStock: true,
    reviews: 4.3,
  },
  {
    id: 20,
    name: "Smart Thermostat",
    price: 199,
    compareAtPrice: 249,
    specs: {
      brand: "BrandST",
      connectivity: "WiFi",
      energySaving: true,
    },
    colors: ["White", "Silver"],
    variants: ["Standard", "Pro"],
    inStock: true,
    reviews: 4.7,
  }
];