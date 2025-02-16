// Product data
const products = {
    Electronics: [
        { 
          name: "Smartphone", 
          price: 599, 
          compare_at_price: 699, 
          review: 4.5, 
          weight: "200g", 
          dimension: "6.5 x 3 x 0.3 inches", 
          variants: ["Black", "Blue", "Silver"], 
          comments: ["Great value for money.", "Battery lasts long.", "Sleek design."]
        },
        { 
          name: "Laptop", 
          price: 899, 
          compare_at_price: 1099, 
          review: 4.7, 
          weight: "1.5kg", 
          dimension: "14 x 9 x 0.8 inches", 
          variants: ["Gray", "Silver"], 
          comments: ["Very fast and reliable.", "Perfect for office work.", "Lightweight."]
        },
        { 
          name: "Headphones", 
          price: 199, 
          compare_at_price: 249, 
          review: 4.3, 
          weight: "250g", 
          dimension: "7 x 6 x 3 inches", 
          variants: ["Black", "White", "Blue"], 
          comments: ["Good sound quality.", "Comfortable to wear.", "Bass is impressive."]
        },
        { 
          name: "Camera", 
          price: 699, 
          compare_at_price: 799, 
          review: 4.6, 
          weight: "500g", 
          dimension: "5 x 3.5 x 3 inches", 
          variants: ["Black"], 
          comments: ["Amazing photo quality.", "Easy to use.", "Durable build."]
        },
        { 
          name: "Smartwatch", 
          price: 149, 
          compare_at_price: 199, 
          review: 4.4, 
          weight: "100g", 
          dimension: "1.8 x 1.8 x 0.5 inches", 
          variants: ["Black", "Rose Gold"], 
          comments: ["Very convenient.", "Tracks health accurately.", "Stylish design."]
        },
        { 
          name: "Bluetooth Speaker", 
          price: 129, 
          compare_at_price: 179, 
          review: 4.5, 
          weight: "800g", 
          dimension: "8 x 3 x 3 inches", 
          variants: ["Red", "Black"], 
          comments: ["Loud and clear sound.", "Great for outdoor use.", "Good battery life."]
        },
        { 
          name: "Tablet", 
          price: 299, 
          compare_at_price: 399, 
          review: 4.4, 
          weight: "400g", 
          dimension: "10 x 6.5 x 0.3 inches", 
          variants: ["Gray", "Gold"], 
          comments: ["Perfect for reading and browsing.", "Compact and portable.", "Battery is decent."]
        },
        { 
          name: "Wireless Earbuds", 
          price: 99, 
          compare_at_price: 149, 
          review: 4.2, 
          weight: "50g", 
          dimension: "2 x 1.5 x 1 inches", 
          variants: ["White", "Black"], 
          comments: ["Convenient and portable.", "Sound clarity is good.", "Fits comfortably."]
        },
        { 
          name: "Gaming Console", 
          price: 499, 
          compare_at_price: 599, 
          review: 4.8, 
          weight: "3kg", 
          dimension: "12 x 10 x 4 inches", 
          variants: ["Black"], 
          comments: ["Best for gaming.", "Graphics are amazing.", "Great exclusive games."]
        },
        { 
          name: "4K TV", 
          price: 1299, 
          compare_at_price: 1599, 
          review: 4.7, 
          weight: "8kg", 
          dimension: "50 x 30 x 4 inches", 
          variants: ["Black"], 
          comments: ["Crystal-clear display.", "Good smart features.", "Value for money."]
        },
        { 
          name: "External Hard Drive", 
          price: 89, 
          compare_at_price: 129, 
          review: 4.6, 
          weight: "300g", 
          dimension: "4.5 x 3 x 0.5 inches", 
          variants: ["Black", "Silver"], 
          comments: ["Fast data transfer.", "Compact and durable.", "Good storage capacity."]
        },
        { 
          name: "Router", 
          price: 59, 
          compare_at_price: 79, 
          review: 4.3, 
          weight: "400g", 
          dimension: "7 x 5 x 2 inches", 
          variants: ["White"], 
          comments: ["Excellent speed.", "Covers large area.", "Easy to set up."]
        },
        { 
          name: "Smart Bulb", 
          price: 25, 
          compare_at_price: 35, 
          review: 4.2, 
          weight: "100g", 
          dimension: "3 x 3 x 5 inches", 
          variants: ["White", "Multicolor"], 
          comments: ["Bright and colorful.", "Easy to control with app.", "Energy efficient."]
        },
        { 
          name: "E-Reader", 
          price: 129, 
          compare_at_price: 169, 
          review: 4.5, 
          weight: "300g", 
          dimension: "6.5 x 4.5 x 0.3 inches", 
          variants: ["Black"], 
          comments: ["Perfect for book lovers.", "Screen is easy on the eyes.", "Long battery life."]
        },
        { 
          name: "Power Bank", 
          price: 49, 
          compare_at_price: 69, 
          review: 4.4, 
          weight: "250g", 
          dimension: "5 x 2.5 x 1 inches", 
          variants: ["White", "Black"], 
          comments: ["Charges quickly.", "Compact and portable.", "Durable."]
        }
      ],

      Electricals: [
        { 
          name: "LED Bulb", 
          price: 15, 
          compare_at_price: 20, 
          review: 4.3, 
          power: "9W", 
          warranty: "1 year", 
          weight: "200g", 
          comments: ["Bright and energy-efficient.", "Lasts a long time.", "Affordable pricing."]
        },
        { 
          name: "Extension Cord", 
          price: 30, 
          compare_at_price: 40, 
          review: 4.4, 
          power: "240V", 
          warranty: "6 months", 
          weight: "500g", 
          comments: ["Long cord length.", "Safe and durable.", "Works well with multiple devices."]
        },
        { 
          name: "Ceiling Fan", 
          price: 80, 
          compare_at_price: 100, 
          review: 4.5, 
          power: "60W", 
          warranty: "2 years", 
          weight: "5kg", 
          comments: ["Provides great airflow.", "Quiet operation.", "Stylish design."]
        },
        { 
          name: "Iron", 
          price: 50, 
          compare_at_price: 60, 
          review: 4.2, 
          power: "1000W", 
          warranty: "1 year", 
          weight: "1kg", 
          comments: ["Heats up quickly.", "Smooth ironing.", "Lightweight and easy to use."]
        },
        { 
          name: "Heater", 
          price: 120, 
          compare_at_price: 150, 
          review: 4.6, 
          power: "1500W", 
          warranty: "3 years", 
          weight: "3kg", 
          comments: ["Heats the room quickly.", "Energy efficient.", "Safe to use."]
        },
        { 
          name: "Electric Kettle", 
          price: 40, 
          compare_at_price: 50, 
          review: 4.5, 
          power: "1500W", 
          warranty: "1 year", 
          weight: "1kg", 
          comments: ["Boils water quickly.", "Easy to clean.", "Compact and portable."]
        },
        { 
          name: "Table Lamp", 
          price: 25, 
          compare_at_price: 35, 
          review: 4.3, 
          power: "12W", 
          warranty: "6 months", 
          weight: "800g", 
          comments: ["Adjustable brightness.", "Modern design.", "Great for studying."]
        },
        { 
          name: "Electric Mixer", 
          price: 60, 
          compare_at_price: 80, 
          review: 4.5, 
          power: "500W", 
          warranty: "2 years", 
          weight: "2kg", 
          comments: ["Blends smoothly.", "Durable and efficient.", "Easy to operate."]
        },
        { 
          name: "Exhaust Fan", 
          price: 70, 
          compare_at_price: 90, 
          review: 4.4, 
          power: "30W", 
          warranty: "2 years", 
          weight: "4kg", 
          comments: ["Quiet operation.", "Good for ventilation.", "Reliable performance."]
        },
        { 
          name: "Water Heater (Geyser)", 
          price: 150, 
          compare_at_price: 200, 
          review: 4.7, 
          power: "2000W", 
          warranty: "5 years", 
          weight: "7kg", 
          comments: ["Heats water quickly.", "Very efficient.", "Long-lasting quality."]
        },
        { 
          name: "Rechargeable Torch", 
          price: 20, 
          compare_at_price: 25, 
          review: 4.4, 
          power: "5W", 
          warranty: "1 year", 
          weight: "300g", 
          comments: ["Bright light.", "Portable and handy.", "Good battery life."]
        },
        { 
          name: "Blender", 
          price: 45, 
          compare_at_price: 60, 
          review: 4.6, 
          power: "400W", 
          warranty: "2 years", 
          weight: "1.5kg", 
          comments: ["Perfect for smoothies.", "Easy to clean.", "Very powerful motor."]
        },
        { 
          name: "Charger Adapter", 
          price: 10, 
          compare_at_price: 15, 
          review: 4.3, 
          power: "18W", 
          warranty: "6 months", 
          weight: "200g", 
          comments: ["Charges quickly.", "Compact design.", "Affordable price."]
        },
        { 
          name: "Electric Oven", 
          price: 250, 
          compare_at_price: 300, 
          review: 4.8, 
          power: "1200W", 
          warranty: "3 years", 
          weight: "10kg", 
          comments: ["Bakes evenly.", "Spacious interior.", "Great for baking enthusiasts."]
        },
        { 
          name: "Electric Blanket", 
          price: 90, 
          compare_at_price: 120, 
          review: 4.7, 
          power: "200W", 
          warranty: "2 years", 
          weight: "2.5kg", 
          comments: ["Keeps warm in winters.", "Soft and cozy.", "Energy efficient."]
        }
      ],

      Cosmetics: [
        { 
          name: "Moisturizing Cream", 
          price: 20, 
          compare_at_price: 30, 
          review: 4.5, 
          ingredients: ["Shea Butter", "Vitamin E"], 
          skin_type: "Dry", 
          weight: "200ml", 
          comments: ["Deeply hydrating.", "Non-greasy formula.", "Great for winter."]
        },
        { 
          name: "Lipstick", 
          price: 15, 
          compare_at_price: 25, 
          review: 4.6, 
          ingredients: ["Jojoba Oil", "Beeswax"], 
          skin_type: "All", 
          weight: "3g", 
          comments: ["Long-lasting color.", "Wide range of shades.", "Smooth application."]
        },
        { 
          name: "Sunscreen Lotion", 
          price: 25, 
          compare_at_price: 35, 
          review: 4.7, 
          ingredients: ["Zinc Oxide", "Aloe Vera"], 
          skin_type: "All", 
          weight: "150ml", 
          comments: ["Non-sticky.", "Provides strong UV protection.", "Perfect for outdoor use."]
        },
        { 
          name: "Foundation", 
          price: 30, 
          compare_at_price: 40, 
          review: 4.4, 
          ingredients: ["Hyaluronic Acid", "SPF 15"], 
          skin_type: "Combination", 
          weight: "30ml", 
          comments: ["Smooth finish.", "Matches skin tone well.", "Lightweight texture."]
        },
        { 
          name: "Eyeliner", 
          price: 10, 
          compare_at_price: 15, 
          review: 4.5, 
          ingredients: ["Carbon Black", "Vitamin E"], 
          skin_type: "All", 
          weight: "1.5g", 
          comments: ["Smudge-proof.", "Highly pigmented.", "Easy to apply."]
        },
        { 
          name: "Face Wash", 
          price: 12, 
          compare_at_price: 20, 
          review: 4.4, 
          ingredients: ["Tea Tree Oil", "Salicylic Acid"], 
          skin_type: "Oily", 
          weight: "100ml", 
          comments: ["Removes dirt effectively.", "Gentle on the skin.", "Great for acne-prone skin."]
        },
        { 
          name: "Hair Serum", 
          price: 18, 
          compare_at_price: 25, 
          review: 4.6, 
          ingredients: ["Argan Oil", "Keratin"], 
          skin_type: "All", 
          weight: "50ml", 
          comments: ["Adds shine to hair.", "Reduces frizz.", "Lightweight formula."]
        },
        { 
          name: "Mascara", 
          price: 15, 
          compare_at_price: 22, 
          review: 4.7, 
          ingredients: ["Castor Oil", "Beeswax"], 
          skin_type: "All", 
          weight: "8ml", 
          comments: ["Long-lasting.", "Adds volume to lashes.", "Does not clump."]
        },
        { 
          name: "Compact Powder", 
          price: 20, 
          compare_at_price: 30, 
          review: 4.4, 
          ingredients: ["Kaolin Clay", "Vitamin E"], 
          skin_type: "Oily", 
          weight: "10g", 
          comments: ["Controls shine.", "Smooth matte finish.", "Travel-friendly packaging."]
        },
        { 
          name: "Blush", 
          price: 18, 
          compare_at_price: 25, 
          review: 4.5, 
          ingredients: ["Mineral Pigments", "Talc"], 
          skin_type: "All", 
          weight: "5g", 
          comments: ["Natural glow.", "Buildable color.", "Long-lasting wear."]
        },
        { 
          name: "Makeup Remover", 
          price: 12, 
          compare_at_price: 18, 
          review: 4.6, 
          ingredients: ["Micellar Water", "Chamomile"], 
          skin_type: "Sensitive", 
          weight: "200ml", 
          comments: ["Removes makeup effectively.", "Gentle on skin.", "Leaves no residue."]
        },
        { 
          name: "Nail Polish", 
          price: 8, 
          compare_at_price: 12, 
          review: 4.4, 
          ingredients: ["Non-toxic Formula"], 
          skin_type: "N/A", 
          weight: "10ml", 
          comments: ["Chip-resistant.", "Vibrant colors.", "Quick-drying."]
        },
        { 
          name: "Face Mask", 
          price: 15, 
          compare_at_price: 20, 
          review: 4.5, 
          ingredients: ["Charcoal", "Aloe Vera"], 
          skin_type: "All", 
          weight: "50ml", 
          comments: ["Deep cleans pores.", "Leaves skin refreshed.", "Great for detoxifying."]
        },
        { 
          name: "Perfume", 
          price: 50, 
          compare_at_price: 70, 
          review: 4.8, 
          ingredients: ["Essential Oils"], 
          skin_type: "All", 
          weight: "100ml", 
          comments: ["Long-lasting fragrance.", "Sophisticated scent.", "Perfect for special occasions."]
        },
        { 
          name: "Hand Cream", 
          price: 10, 
          compare_at_price: 15, 
          review: 4.5, 
          ingredients: ["Shea Butter", "Glycerin"], 
          skin_type: "Dry", 
          weight: "50ml", 
          comments: ["Keeps hands soft.", "Non-greasy texture.", "Compact size for on-the-go."]
        }
      ],

      Grocery: [
        { 
          name: "Basmati Rice", 
          price: 25, 
          compare_at_price: 35, 
          review: 4.7, 
          brand: "Royal", 
          weight: "5kg", 
          expiration_date: "2026-01-15", 
          comments: ["Aromatic and flavorful.", "Perfect for biryanis.", "Long grains."]
        },
        { 
          name: "Whole Wheat Flour", 
          price: 15, 
          compare_at_price: 20, 
          review: 4.6, 
          brand: "Golden Harvest", 
          weight: "5kg", 
          expiration_date: "2025-09-10", 
          comments: ["High-quality flour.", "Soft and healthy chapatis.", "Packed fresh."]
        },
        { 
          name: "Sugar", 
          price: 10, 
          compare_at_price: 15, 
          review: 4.5, 
          brand: "SweetGold", 
          weight: "2kg", 
          expiration_date: "2025-07-30", 
          comments: ["Dissolves quickly.", "Crystal clear granules.", "Perfect for baking."]
        },
        { 
          name: "Organic Honey", 
          price: 18, 
          compare_at_price: 25, 
          review: 4.8, 
          brand: "Nature's Nectar", 
          weight: "500ml", 
          expiration_date: "2026-03-20", 
          comments: ["Pure and organic.", "Great for tea and desserts.", "No added sugar."]
        },
        { 
          name: "Olive Oil", 
          price: 30, 
          compare_at_price: 40, 
          review: 4.7, 
          brand: "Mediterranean Gold", 
          weight: "1L", 
          expiration_date: "2026-05-25", 
          comments: ["Extra virgin quality.", "Cold-pressed.", "Ideal for salads."]
        },
        { 
          name: "Brown Bread", 
          price: 3, 
          compare_at_price: 5, 
          review: 4.4, 
          brand: "FreshLoaf", 
          weight: "400g", 
          expiration_date: "2025-01-25", 
          comments: ["Soft and fresh.", "Rich in fiber.", "Perfect for sandwiches."]
        },
        { 
          name: "Cornflakes", 
          price: 12, 
          compare_at_price: 18, 
          review: 4.5, 
          brand: "MorningBites", 
          weight: "1kg", 
          expiration_date: "2025-10-15", 
          comments: ["Crunchy and tasty.", "Rich in iron.", "Great with milk."]
        },
        { 
          name: "Instant Noodles", 
          price: 5, 
          compare_at_price: 7, 
          review: 4.6, 
          brand: "QuickCook", 
          weight: "200g", 
          expiration_date: "2025-04-12", 
          comments: ["Quick to prepare.", "Delicious seasoning.", "Perfect for a snack."]
        },
        { 
          name: "Coffee Powder", 
          price: 20, 
          compare_at_price: 28, 
          review: 4.7, 
          brand: "BrewHaven", 
          weight: "500g", 
          expiration_date: "2026-01-10", 
          comments: ["Rich aroma.", "Perfect blend.", "Works well with all brewers."]
        },
        { 
          name: "Green Tea", 
          price: 15, 
          compare_at_price: 22, 
          review: 4.5, 
          brand: "Herbal Harmony", 
          weight: "250g", 
          expiration_date: "2026-02-15", 
          comments: ["Soothing and fresh.", "Loaded with antioxidants.", "Great for weight management."]
        },
        { 
          name: "Milk Powder", 
          price: 18, 
          compare_at_price: 24, 
          review: 4.4, 
          brand: "DairyFresh", 
          weight: "1kg", 
          expiration_date: "2026-06-01", 
          comments: ["Tastes like fresh milk.", "Long shelf life.", "Great for baking and beverages."]
        },
        { 
          name: "Salt", 
          price: 2, 
          compare_at_price: 3, 
          review: 4.5, 
          brand: "PureWhite", 
          weight: "1kg", 
          expiration_date: "2026-12-01", 
          comments: ["Fine grains.", "Enriched with iodine.", "Dissolves easily."]
        },
        { 
          name: "Spice Mix", 
          price: 8, 
          compare_at_price: 12, 
          review: 4.6, 
          brand: "TastyBlends", 
          weight: "200g", 
          expiration_date: "2026-08-15", 
          comments: ["Perfect for curries.", "Aromatic spices.", "Well-balanced flavor."]
        },
        { 
          name: "Peanut Butter", 
          price: 10, 
          compare_at_price: 14, 
          review: 4.7, 
          brand: "NutriSpread", 
          weight: "500g", 
          expiration_date: "2026-07-20", 
          comments: ["Creamy texture.", "Rich in protein.", "Great with bread."]
        },
        { 
          name: "Canned Beans", 
          price: 5, 
          compare_at_price: 8, 
          review: 4.4, 
          brand: "BeanVault", 
          weight: "400g", 
          expiration_date: "2026-10-10", 
          comments: ["Rich in protein.", "Easy to cook.", "Great for quick meals."]
        }
      ],
      
      Snacks: [
        {
          name: "Masala Chips",
          price: 2,
          compare_at_price: 3,
          review: 4.6,
          brand: "SpiceCrunch",
          weight: "150g",
          expiration_date: "2025-12-30",
          comments: ["Crispy and spicy.", "Perfect tea-time snack.", "Packed fresh."]
        },
        {
          name: "Aloo Bhujia",
          price: 3,
          compare_at_price: 5,
          review: 4.7,
          brand: "NamkeenKing",
          weight: "200g",
          expiration_date: "2025-10-20",
          comments: ["Crunchy and flavorful.", "Made with authentic spices.", "Great party snack."]
        },
        {
          name: "Chana Dal",
          price: 4,
          compare_at_price: 6,
          review: 4.5,
          brand: "GoldenBites",
          weight: "250g",
          expiration_date: "2025-11-25",
          comments: ["Crispy lentil snack.", "Perfect with drinks.", "Lightly spiced."]
        },
        {
          name: "Masala Peanuts",
          price: 5,
          compare_at_price: 7,
          review: 4.8,
          brand: "NuttyTreat",
          weight: "300g",
          expiration_date: "2025-09-15",
          comments: ["Roasted and spicy.", "Rich in protein.", "Perfect crunch."]
        },
        {
          name: "Khatta Meetha",
          price: 3,
          compare_at_price: 5,
          review: 4.6,
          brand: "SweetSpice",
          weight: "200g",
          expiration_date: "2025-08-10",
          comments: ["Sweet and tangy.", "Perfect mix of flavors.", "Popular choice."]
        },
        {
          name: "Moong Dal",
          price: 4,
          compare_at_price: 6,
          review: 4.5,
          brand: "CrispyMoong",
          weight: "250g",
          expiration_date: "2025-07-05",
          comments: ["Light and crispy.", "Perfect for snacking.", "Healthy and tasty."]
        },
        {
          name: "Bikaneri Bhujia",
          price: 6,
          compare_at_price: 8,
          review: 4.7,
          brand: "BikanerDelight",
          weight: "300g",
          expiration_date: "2025-12-15",
          comments: ["Authentic Rajasthani taste.", "Spicy and crispy.", "Perfect with tea."]
        },
        {
          name: "Banana Chips",
          price: 5,
          compare_at_price: 7,
          review: 4.4,
          brand: "TropicSnacks",
          weight: "250g",
          expiration_date: "2025-09-12",
          comments: ["Lightly salted.", "Crispy and fresh.", "Made with real bananas."]
        },
        {
          name: "Sev Murmura",
          price: 3,
          compare_at_price: 5,
          review: 4.5,
          brand: "PuffedCrunch",
          weight: "200g",
          expiration_date: "2025-10-01",
          comments: ["Light and crunchy.", "Perfect for tea-time.", "Mildly spiced."]
        },
        {
          name: "Cornflakes Mixture",
          price: 4,
          compare_at_price: 6,
          review: 4.6,
          brand: "CrispyMix",
          weight: "250g",
          expiration_date: "2025-08-18",
          comments: ["Crunchy and spicy.", "High in taste.", "Perfect evening snack."]
        },
        {
          name: "Ribbon Pakoda",
          price: 6,
          compare_at_price: 8,
          review: 4.7,
          brand: "SouthCrunch",
          weight: "300g",
          expiration_date: "2025-11-30",
          comments: ["Traditional South Indian snack.", "Perfect crispiness.", "Mildly spicy."]
        },
        {
          name: "Shakkarpara",
          price: 3,
          compare_at_price: 5,
          review: 4.5,
          brand: "SweetCrunch",
          weight: "200g",
          expiration_date: "2025-09-20",
          comments: ["Sweet and crispy.", "Perfect festive treat.", "Made with real sugar."]
        },
        {
          name: "Mathri",
          price: 4,
          compare_at_price: 6,
          review: 4.6,
          brand: "RoyalSnacks",
          weight: "250g",
          expiration_date: "2025-08-25",
          comments: ["Traditional flaky snack.", "Rich in taste.", "Great with pickles."]
        },
        {
          name: "Dry Fruit Mixture",
          price: 8,
          compare_at_price: 10,
          review: 4.8,
          brand: "RichCrunch",
          weight: "200g",
          expiration_date: "2025-10-15",
          comments: ["Loaded with dry fruits.", "Rich and crunchy.", "Premium quality."]
        },
        {
          name: "Spicy Chakli",
          price: 6,
          compare_at_price: 8,
          review: 4.7,
          brand: "CrispyRounds",
          weight: "300g",
          expiration_date: "2025-12-05",
          comments: ["Crispy spiral snack.", "Perfectly spiced.", "Great with tea."]
        }
      ],
      
      Chocolates: [
        {
          "name": "Milk Chocolate Bar",
          "price": 2,
          "compare_at_price": 3,
          "review": 4.7,
          "brand": "ChocoDelight",
          "weight": "100g",
          "expiration_date": "2025-12-30",
          "comments": ["Rich and creamy.", "Perfect for chocolate lovers.", "Smooth texture."]
        },
        {
          "name": "Dark Chocolate",
          "price": 3,
          "compare_at_price": 5,
          "review": 4.8,
          "brand": "PureChoco",
          "weight": "150g",
          "expiration_date": "2025-11-15",
          "comments": ["Intense cocoa flavor.", "Perfect for health-conscious individuals.", "Slightly bitter but delightful."]
        },
        {
          "name": "Chocolate Truffles",
          "price": 6,
          "compare_at_price": 8,
          "review": 4.9,
          "brand": "TruffleTreats",
          "weight": "200g",
          "expiration_date": "2025-09-05",
          "comments": ["Soft and melt-in-your-mouth.", "Luxury chocolate.", "Great gift idea."]
        },
        {
          "name": "Hazelnut Chocolate",
          "price": 5,
          "compare_at_price": 7,
          "review": 4.6,
          "brand": "NuttyChoco",
          "weight": "180g",
          "expiration_date": "2025-10-20",
          "comments": ["Crunchy hazelnuts inside.", "Smooth milk chocolate.", "Perfect balance of flavors."]
        },
        {
          "name": "Caramel Chocolate",
          "price": 4,
          "compare_at_price": 6,
          "review": 4.7,
          "brand": "SweetChoco",
          "weight": "150g",
          "expiration_date": "2025-12-10",
          "comments": ["Rich caramel flavor.", "Creamy chocolate.", "Great texture."]
        },
        {
          "name": "Mint Chocolate",
          "price": 3,
          "compare_at_price": 5,
          "review": 4.5,
          "brand": "ChocoMint",
          "weight": "120g",
          "expiration_date": "2025-11-30",
          "comments": ["Refreshing mint taste.", "Smooth chocolate.", "Perfect after dinner treat."]
        },
        {
          "name": "White Chocolate",
          "price": 4,
          "compare_at_price": 6,
          "review": 4.4,
          "brand": "WhiteDelight",
          "weight": "150g",
          "expiration_date": "2025-09-30",
          "comments": ["Creamy and sweet.", "Great for dessert recipes.", "Smooth and velvety."]
        },
        {
          "name": "Chocolate Fudge",
          "price": 7,
          "compare_at_price": 9,
          "review": 4.8,
          "brand": "FudgeMasters",
          "weight": "200g",
          "expiration_date": "2025-10-05",
          "comments": ["Decadent and rich.", "Melt-in-your-mouth texture.", "Perfect treat for chocolate enthusiasts."]
        },
        {
          "name": "Almond Chocolate",
          "price": 5,
          "compare_at_price": 7,
          "review": 4.6,
          "brand": "AlmondChoco",
          "weight": "180g",
          "expiration_date": "2025-08-15",
          "comments": ["Crunchy almonds with smooth chocolate.", "Great combination of textures.", "Tasty and satisfying."]
        },
        {
          "name": "Chocolate Coated Biscuit",
          "price": 3,
          "compare_at_price": 5,
          "review": 4.7,
          "brand": "BiscuitChoco",
          "weight": "150g",
          "expiration_date": "2025-12-25",
          "comments": ["Crispy biscuit with rich chocolate.", "Perfect combination of flavors.", "Ideal for snacking."]
        },
        {
          "name": "Milk Chocolate With Rice Crispies",
          "price": 4,
          "compare_at_price": 6,
          "review": 4.6,
          "brand": "RiceCrispyChoco",
          "weight": "200g",
          "expiration_date": "2025-09-10",
          "comments": ["Crunchy rice crisps with smooth chocolate.", "Great texture.", "Kids love it."]
        },
        {
          "name": "Chocolate-Covered Raisins",
          "price": 5,
          "compare_at_price": 7,
          "review": 4.5,
          "brand": "RaisinChoco",
          "weight": "150g",
          "expiration_date": "2025-08-20",
          "comments": ["Sweet and chewy raisins.", "Covered in rich chocolate.", "Great snack for all ages."]
        }
      ]
      
  };
  
const categoryList = document.getElementById("category-list");

// Dynamically generate category list
Object.keys(products).forEach((category) => {
  const li = document.createElement("li");
  li.textContent = category;
  li.addEventListener("click", () => displayProducts(category));
  categoryList.appendChild(li);
});

// Display products based on selected category
function displayProducts(category) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";  

  products[category].forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
      <h2>${product.name}</h2>
      <p class="price">$${product.price} <span class="compare-at-price">$${product.compare_at_price}</span></p>
      <p class="review">Rating: ⭐ ${product.review}</p>
      <p><strong>Brand:</strong> ${product.brand || "N/A"}</p>
      <p><strong>Weight:</strong> ${product.weight}</p>
      <p><strong>Expiration Date:</strong> ${product.expiration_date || "N/A"}</p>
      <div class="comments">
        <strong>Customer Comments:</strong>
        <ul>
          ${product.comments.map(comment => `<li>${comment}</li>`).join('')}
        </ul>
      </div>
      ${product.ingredients ? `<p><strong>Ingredients:</strong> ${product.ingredients.join(", ")}</p>` : ""}
      ${product.skin_type ? `<p><strong>Skin Type:</strong> ${product.skin_type}</p>` : ""}
      ${product.power ? `<p><strong>Power:</strong> ${product.power}</p>` : ""}
      ${product.warranty ? `<p><strong>Warranty:</strong> ${product.warranty}</p>` : ""}
      ${product.dimension ? `<p><strong>Dimensions:</strong> ${product.dimension}</p>` : ""}
      ${product.variants ? `<p><strong>Variants:</strong> ${product.variants.join(", ")}</p>` : ""}
    `;

    productContainer.appendChild(productCard);
  });
}

// function displayProducts(category) {
//     const productContainer = document.getElementById("product-container");
//     productContainer.innerHTML = "";  
  
//     products[category].forEach((product) => {
//       const productCard = document.createElement("div");
//       productCard.classList.add("product-card");
  
//       productCard.innerHTML = `
//         <img src="${product.image}" alt="${product.name}">
//         <h2>${product.name}</h2>
//         <p class="price">$${product.price} <span class="compare-at-price">$${product.compare_at_price}</span></p>
//         <p class="review">Rating: ⭐ ${product.review}</p>
//         <div class="product-details">
//           <p><strong>Brand:</strong> ${product.brand || "N/A"}</p>
//           <p><strong>Weight:</strong> ${product.weight}</p>
//           <p><strong>Expiration Date:</strong> ${product.expiration_date || "N/A"}</p>
//         </div>
//         <div class="comments">
//           <strong>Customer Comments:</strong>
//           <ul>
//             ${product.comments.map(comment => `<li>${comment}</li>`).join('')}
//           </ul>
//         </div>
//         ${product.ingredients ? `<p><strong>Ingredients:</strong> ${product.ingredients.join(", ")}</p>` : ""}
//         ${product.skin_type ? `<p><strong>Skin Type:</strong> ${product.skin_type}</p>` : ""}
//         ${product.power ? `<p><strong>Power:</strong> ${product.power}</p>` : ""}
//         ${product.warranty ? `<p><strong>Warranty:</strong> ${product.warranty}</p>` : ""}
//         ${product.dimension ? `<p><strong>Dimensions:</strong> ${product.dimension}</p>` : ""}
//         ${product.variants ? `<p><strong>Variants:</strong> ${product.variants.join(", ")}</p>` : ""}
//         <div class="product-footer">
//           <span class="warranty">${product.warranty || "N/A"}</span>
//           <span class="dimension">${product.dimension || "N/A"}</span>
//           <span class="variants">${product.variants ? product.variants.join(", ") : "N/A"}</span>
//         </div>
//       `;
  
//       productContainer.appendChild(productCard);
//     });
//   }
  

// Display products from multiple categories 
function displayProductsFromAllCategories() {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";  // Clear any previous content

  Object.keys(products).forEach((category) => {
    // Display up to 4 products from each category
    const categoryProducts = products[category].slice(0, 4);

    categoryProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      // Create the product card content dynamically
      productCard.innerHTML = `
        <h2>${product.name}</h2>
        <p class="price">$${product.price} <span class="compare-at-price">$${product.compare_at_price}</span></p>
        <p class="review">Rating: ⭐ ${product.review}</p>
        <p><strong>Brand:</strong> ${product.brand || "N/A"}</p>
        <p><strong>Weight:</strong> ${product.weight}</p>
        <p><strong>Expiration Date:</strong> ${product.expiration_date || "N/A"}</p>
        <div class="comments">
          <strong>Customer Comments:</strong>
          <ul>
            ${product.comments.map(comment => `<li>${comment}</li>`).join('')}
          </ul>
        </div>
        ${product.ingredients ? `<p><strong>Ingredients:</strong> ${product.ingredients.join(", ")}</p>` : ""}
        ${product.skin_type ? `<p><strong>Skin Type:</strong> ${product.skin_type}</p>` : ""}
        ${product.power ? `<p><strong>Power:</strong> ${product.power}</p>` : ""}
        ${product.warranty ? `<p><strong>Warranty:</strong> ${product.warranty}</p>` : ""}
        ${product.dimension ? `<p><strong>Dimensions:</strong> ${product.dimension}</p>` : ""}
        ${product.variants ? `<p><strong>Variants:</strong> ${product.variants.join(", ")}</p>` : ""}
      `;
      
      productContainer.appendChild(productCard);
    });
  });
}

// Initially display 3-4 products from each category
displayProductsFromAllCategories();
