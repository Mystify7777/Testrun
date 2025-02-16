 const cars = [
    {
      name: "Sedan X1",
      details: [
        "Comfortable seating for 5",
        "Fuel efficiency: 25 mpg",
        "Automatic transmission",
        "Top speed: 120 mph",
        "Built-in navigation system",
      ],
      price: "$20,000"
    },
    {
      name: "SUV Pro",
      details: [
        "Spacious interior with 7 seats",
        "All-wheel drive",
        "Fuel efficiency: 22 mpg",
        "Advanced safety features",
        "Towing capacity: 5,000 lbs",
      ],
      price: "$35,000"
    },
    {
      name: "Hatchback ZR",
      details: [
        "Compact and easy to park",
        "Fuel efficiency: 30 mpg",
        "Top speed: 110 mph",
        "Sporty exterior design",
        "Affordable maintenance costs",
      ],
      price: "$18,000"
    },
    {
      name: "Electric Future EV",
      details: [
        "Zero emissions electric vehicle",
        "Range: 300 miles per charge",
        "Fast-charging capability",
        "Autonomous driving features",
        "Modern infotainment system",
      ],
      price: "$45,000"
    },
    {
      name: "Luxury Cruiser XL",
      details: [
        "Premium leather interior",
        "State-of-the-art sound system",
        "Fuel efficiency: 20 mpg",
        "Top speed: 150 mph",
        "Enhanced climate control system",
      ],
      price: "$60,000"
    },
    {
      name: "Pickup Master 500",
      details: [
        "Heavy-duty pickup truck",
        "Towing capacity: 10,000 lbs",
        "Fuel efficiency: 15 mpg",
        "Spacious truck bed",
        "Off-road capabilities",
      ],
      price: "$40,000"
    }
  ];
  
 const bikes = [
    {
      name: "Mountain Bike XT",
      details: [
        "Lightweight aluminum frame",
        "21-speed gear system",
        "Hydraulic disc brakes",
        "Dual suspension for rough terrains",
        "Ideal for off-road adventures",
      ],
      price: "$1,200"
    },
    {
      name: "City Commuter 500",
      details: [
        "Ergonomic design for daily rides",
        "7-speed gear system",
        "Puncture-resistant tires",
        "Comfortable saddle",
        "Built-in front and rear lights",
      ],
      price: "$800"
    },
    {
      name: "Hybrid Tracker Pro",
      details: [
        "Combines features of road and mountain bikes",
        "18-speed gear system",
        "Flat handlebars for better control",
        "Suitable for both city streets and trails",
        "Lightweight steel frame",
      ],
      price: "$1,000"
    },
    {
      name: "Road Racer Elite",
      details: [
        "Carbon fiber frame for ultra-lightweight",
        "Drop handlebars for aerodynamics",
        "27-speed gear system",
        "Designed for speed and endurance",
        "Slim tires for low rolling resistance",
      ],
      price: "$2,500"
    },
    {
      name: "Folding Bike Compact",
      details: [
        "Easily foldable for storage and transport",
        "Single-speed drivetrain for simplicity",
        "Durable steel frame",
        "Perfect for urban commuters",
        "Weighs just 22 lbs",
      ],
      price: "$700"
    },
    {
      name: "Electric Bike Glide",
      details: [
        "Integrated electric motor for assistance",
        "Range: 50 miles per charge",
        "7-speed gear system",
        "Comfortable padded saddle",
        "Removable lithium-ion battery",
      ],
      price: "$1,800"
    }
  ];
   
  const motorbikes = [
    {
      name: "Cruiser Thunderbolt 500",
      details: [
        "Powerful 500cc engine",
        "Classic cruiser design",
        "Comfortable seating for long rides",
        "Fuel efficiency: 40 mpg",
        "Advanced safety features with ABS",
      ],
      price: "$15,000"
    },
    {
      name: "Sportster ZX300",
      details: [
        "300cc liquid-cooled engine",
        "Aerodynamic design for speed",
        "Lightweight alloy frame",
        "Top speed: 140 mph",
        "Dual-channel ABS for enhanced braking",
      ],
      price: "$12,000"
    },
    {
      name: "Tourer GrandRide 650",
      details: [
        "650cc engine for high performance",
        "Large fuel tank for long trips",
        "Ergonomic seating and handlebars",
        "Built-in navigation system",
        "Windshield for better aerodynamics",
      ],
      price: "$18,000"
    },
    {
      name: "Adventure Hawk X700",
      details: [
        "700cc engine built for rugged terrains",
        "Dual-sport tires for on- and off-road use",
        "High ground clearance",
        "Durable crash guards",
        "Adjustable suspension system",
      ],
      price: "$20,000"
    },
    {
      name: "StreetRacer RS250",
      details: [
        "250cc engine for city performance",
        "Sporty and compact design",
        "Quick acceleration",
        "Fuel efficiency: 50 mpg",
        "LED lights for better visibility",
      ],
      price: "$10,000"
    },
    {
      name: "Electric Pulse X1",
      details: [
        "100% electric motorbike",
        "Range: 150 miles per charge",
        "Top speed: 90 mph",
        "Eco-friendly and low maintenance",
        "Quick-charge feature for convenience",
      ],
      price: "$14,000"
    }
  ];
  

function renderProducts(categoryArray, gridId) {
  const gridElement = document.getElementById(gridId);
  gridElement.innerHTML = ""; 
  for (const product of categoryArray) {
    gridElement.innerHTML += `
      <div class="product-card">
        <h3>${product.name}</h3>
        <ul>
          ${product.details.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
        <p><strong>Price:</strong> ${product.price}</p>
      </div>
    `;
  }
}

function renderAllProducts() {
  renderProducts(cars, "car-grid");
  renderProducts(bikes, "bike-grid");
  renderProducts(motorbikes, "truck-grid");
}

renderAllProducts();


