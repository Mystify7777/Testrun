const vehicles = [
    {
      name: "Sedan X1",
      category: "car",
      capacity: 5,
      details: [
        "Comfortable seating for 5",
        "Fuel efficiency: 25 mpg",
        "Automatic transmission",
        "Top speed: 120 mph",
        "Built-in navigation system",
      ],
      rentalPricePerDay: 50,
      retailPrice: "$20,000",
      availability: true
    },
    {
      name: "SUV Pro",
      category: "car",
      capacity: 7,
      details: [
        "Spacious interior with 7 seats",
        "All-wheel drive",
        "Fuel efficiency: 22 mpg",
        "Advanced safety features",
        "Towing capacity: 5,000 lbs",
      ],
      rentalPricePerDay: 80,
      retailPrice: "$35,000",
      availability: false
    },
    {
      name: "Hatchback ZR",
      category: "car",
      capacity: 4,
      details: [
        "Compact and easy to park",
        "Fuel efficiency: 30 mpg",
        "Top speed: 110 mph",
        "Sporty exterior design",
        "Affordable maintenance costs",
      ],
      rentalPricePerDay: 40,
      retailPrice: "$18,000",
      availability: true
    },
    {
      name: "Electric Future EV",
      category: "car",
      capacity: 5,
      details: [
        "Zero emissions electric vehicle",
        "Range: 300 miles per charge",
        "Fast-charging capability",
        "Autonomous driving features",
        "Modern infotainment system",
      ],
      rentalPricePerDay: 100,
      retailPrice: "$45,000",
      availability: true
    },
    {
      name: "Luxury Cruiser XL",
      category: "car",
      capacity: 5,
      details: [
        "Premium leather interior",
        "State-of-the-art sound system",
        "Fuel efficiency: 20 mpg",
        "Top speed: 150 mph",
        "Enhanced climate control system",
      ],
      rentalPricePerDay: 150,
      retailPrice: "$60,000",
      availability: false
    },
    {
      name: "Pickup Master 500",
      category: "car",
      capacity: 2,
      details: [
        "Heavy-duty pickup truck",
        "Towing capacity: 10,000 lbs",
        "Fuel efficiency: 15 mpg",
        "Spacious truck bed",
        "Off-road capabilities",
      ],
      rentalPricePerDay: 70,
      retailPrice: "$40,000",
      availability: true
    },
    {
      name: "Mountain Bike XT",
      category: "bike",
      capacity: 1,
      details: [
        "Lightweight aluminum frame",
        "21-speed gear system",
        "Hydraulic disc brakes",
        "Dual suspension for rough terrains",
        "Ideal for off-road adventures",
      ],
      rentalPricePerDay: 25,
      retailPrice: "$1,200",
      availability: true
    },
    {
      name: "City Commuter 500",
      category: "bike",
      capacity: 1,
      details: [
        "Ergonomic design for daily rides",
        "7-speed gear system",
        "Puncture-resistant tires",
        "Comfortable saddle",
        "Built-in front and rear lights",
      ],
      rentalPricePerDay: 20,
      retailPrice: "$800",
      availability: false
    },
    {
      name: "Hybrid Tracker Pro",
      category: "bike",
      capacity: 1,
      details: [
        "Combines features of road and mountain bikes",
        "18-speed gear system",
        "Flat handlebars for better control",
        "Suitable for both city streets and trails",
        "Lightweight steel frame",
      ],
      rentalPricePerDay: 22,
      retailPrice: "$1,000",
      availability: true
    },
    {
      name: "Road Racer Elite",
      category: "bike",
      capacity: 1,
      details: [
        "Carbon fiber frame for ultra-lightweight",
        "Drop handlebars for aerodynamics",
        "27-speed gear system",
        "Designed for speed and endurance",
        "Slim tires for low rolling resistance",
      ],
      rentalPricePerDay: 35,
      retailPrice: "$2,500",
      availability: true
    },
    {
      name: "Folding Bike Compact",
      category: "bike",
      capacity: 1,
      details: [
        "Easily foldable for storage and transport",
        "Single-speed drivetrain for simplicity",
        "Durable steel frame",
        "Perfect for urban commuters",
        "Weighs just 22 lbs",
      ],
      rentalPricePerDay: 15,
      retailPrice: "$700",
      availability: true
    },
    {
      name: "Electric Bike Glide",
      category: "bike",
      capacity: 1,
      details: [
        "Integrated electric motor for assistance",
        "Range: 50 miles per charge",
        "7-speed gear system",
        "Comfortable padded saddle",
        "Removable lithium-ion battery",
      ],
      rentalPricePerDay: 40,
      retailPrice: "$1,800",
      availability: false
    },
    {
      name: "Cruiser Thunderbolt 500",
      category: "motorbike",
      capacity: 2,
      details: [
        "Powerful 500cc engine",
        "Classic cruiser design",
        "Comfortable seating for long rides",
        "Fuel efficiency: 40 mpg",
        "Advanced safety features with ABS",
      ],
      rentalPricePerDay: 80,
      retailPrice: "$15,000",
      availability: true
    },
    {
      name: "Sportster ZX300",
      category: "motorbike",
      capacity: 2,
      details: [
        "300cc liquid-cooled engine",
        "Aerodynamic design for speed",
        "Lightweight alloy frame",
        "Top speed: 140 mph",
        "Dual-channel ABS for enhanced braking",
      ],
      rentalPricePerDay: 70,
      retailPrice: "$12,000",
      availability: true
    },
    {
      name: "Tourer GrandRide 650",
      category: "motorbike",
      capacity: 2,
      details: [
        "650cc engine for high performance",
        "Large fuel tank for long trips",
        "Ergonomic seating and handlebars",
        "Built-in navigation system",
        "Windshield for better aerodynamics",
      ],
      rentalPricePerDay: 90,
      retailPrice: "$18,000",
      availability: false
    },
    {
      name: "Adventure Hawk X700",
      category: "motorbike",
      capacity: 2,
      details: [
        "700cc engine built for rugged terrains",
        "Dual-sport tires for on- and off-road use",
        "High ground clearance",
        "Durable crash guards",
        "Adjustable suspension system",
      ],
      rentalPricePerDay: 100,
      retailPrice: "$20,000",
      availability: true
    },
    {
      name: "StreetRacer RS250",
      category: "motorbike",
      capacity: 2,
      details: [
        "250cc engine for city performance",
        "Sporty and compact design",
        "Quick acceleration",
        "Fuel efficiency: 50 mpg",
        "LED lights for better visibility",
      ],
      rentalPricePerDay: 60,
      retailPrice: "$10,000",
      availability: true
    },
    {
      name: "Electric Pulse X1",
      category: "motorbike",
      capacity: 2,
      details: [
        "100% electric motorbike",
        "Range: 150 miles per charge",
        "Top speed: 90 mph",
        "Eco-friendly and low maintenance",
        "Quick-charge feature for convenience",
      ],
      rentalPricePerDay: 110,
      retailPrice: "$14,000",
      availability: true
    }
  ];
  
  
const vehicleContainer = document.getElementById("vehicle-list");
const filterForm = document.getElementById("filter-form");


function displayVehicles(vehicleList) {
  vehicleContainer.innerHTML = ""; 
  
  for (const vehicle of vehicleList) {
    const vehicleCard = document.createElement("div");
    vehicleCard.classList.add("vehicle-card");

    vehicleCard.innerHTML = `
      <div class="vehicle-header">
        <h3>${vehicle.name}</h3>
        <p><strong>Category:</strong> ${vehicle.category}</p>
      </div>
      <div class="vehicle-details">
        <p><strong>Capacity:</strong> ${vehicle.capacity} ${vehicle.capacity > 1 ? "people" : "person"}</p>
        <p><strong>Rental Price:</strong> $${vehicle.rentalPricePerDay} per day</p>
        <p><strong>Retail Price:</strong> ${vehicle.retailPrice}</p>
        <p><strong>Availability:</strong> ${vehicle.availability ? "Available" : "Not Available"}</p>
      </div>
      <div class="vehicle-features">
        <h4>Features:</h4>
        <ul>${vehicle.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
      </div>
    `;

    vehicleContainer.appendChild(vehicleCard);
  }
}

function applyFilters(event) {
  event.preventDefault(); 

  const category = document.getElementById("category").value;
  const capacity = parseInt(document.getElementById("capacity").value) || 0;
  const maxPrice = parseInt(document.getElementById("max-price").value) || Infinity;
  const sortOption = document.getElementById("sort").value;

  let filteredVehicles = vehicles.filter((vehicle) => {
    const matchesCategory = category === "all" || vehicle.category === category;
    const matchesCapacity = capacity === 0 || vehicle.capacity >= capacity;
    const matchesPrice = vehicle.rentalPricePerDay <= maxPrice;
    return matchesCategory && matchesCapacity && matchesPrice;
  });

  if (sortOption === "price-asc") {
    filteredVehicles.sort((a, b) => a.rentalPricePerDay - b.rentalPricePerDay);
  } else if (sortOption === "price-desc") {
    filteredVehicles.sort((a, b) => b.rentalPricePerDay - a.rentalPricePerDay);
  }

  displayVehicles(filteredVehicles);
}

displayVehicles(vehicles);


filterForm.addEventListener("submit", applyFilters);



