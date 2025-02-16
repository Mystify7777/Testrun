    let products = [
        {
            id: 1,
            name: "Micromax phone",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXUVXERm3yWgAa9s5uAIG2et2PtD1mM-1n6g&s",
            price: 5999,
        },
        {
            id: 2,
            name: "Iphone phone",
            image:
                "https://c8.alamy.com/comp/R06CKK/galati-romania-october-26-2018-apple-launch-the-new-smartphone-iphone-xs-and-iphone-xs-max-iphone-xs-max-on-white-background-R06CKK.jpg",
            price: 79999,
        },
        {
            id: 3,
            name: "Xomi phone",
            image:
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWFzcSYfnHxhTMbHfuoLqPuRks4-Umy31_X0psKQXy8fOGPNshMGSOckiMsLbYFddeMKkVKtCj2dMqemdpgiQbarGUrgKIlXm69758X5FR",
            price: 12999,
        },
        {
            id: 4,
            name: "Redmi phone",
            image:
                "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo70Ctm4jZ4HfyQx1rlF4_mMSEmG-VDoOB4_ciJvEeoTc93iIN9zgwNKgQegqUjzEr-xe0RdtPcq57-L11dUtBO0A92SHk-aW8utObQBW5",
            price: 15999,
        },
        {
            id: 5,
            name: "Lava phone",
            image:
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRxqpSU5Bw6w7DaVrodwHVeUzZOtRy7XQHWzJFgs2O8VyHeNirYz_DTSdqwt8wEmIYLQ0AVFQC435mMevGNsTozuyow4iGs3M4k-U5KXodHuurmDZJx5hJ8Nw",
            price: 7999,
        },
        {
            id: 6,
            name: "Nokia phone",
            image:
                "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRXz_yL8Ejjp8S5gpMoIZwVS26Tt2LlR4MPlhbbUQmoCg3cZ9jNi1U9ddU_Y-5BPI_TCHeTGDubr_gi_OaqIDOb5SUCZH4LCs5iktZEt6QBCx8T7FWCc57F",
            price: 10999,
        },
    ];
    
    const cart = [];
    const productListContainer = document.querySelector(".product-list-container");
    const cartListContainer = document.querySelector(".cart-list-con");
    const totalPriceElement = document.getElementById("total-price");
    const cartCounter = document.querySelector(".cart-counter");
    const cartDrawer = document.querySelector(".cart-list");
    const cartButton = document.querySelector(".cart-btn");
    const closeButton = document.querySelector(".close-button");
    
    function renderProducts() {
        productListContainer.innerHTML = "";
        for (const product of products) {
            productListContainer.innerHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.name}</p>
                    <p>$${product.price}</p>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            `;
        }
    }
    
    function updateCart() {
        cartListContainer.innerHTML = "";
        let total = 0;
        let itemCount = 0;
        for (const item of cart) {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            itemCount += item.quantity;
            cartListContainer.innerHTML += `
                <div class="product-card-cart">
                    <img src="${item.image}" alt="${item.name}">
                    <p>${item.name}</p>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-input" data-id="${item.id}" value="${item.quantity}" min="1">
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                    <p>$${itemTotal}</p>
                </div>
            `;
        }
        totalPriceElement.textContent = total;
        cartCounter.textContent = itemCount;
    }
    
    productListContainer.addEventListener("click", event => {
        if (event.target.classList.contains("add-to-cart")) {
            const productId = Number(event.target.dataset.id);
            const existingProduct = cart.find(p => p.id === productId);
            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                const product = products.find(p => p.id === productId);
                if (product) cart.push({ ...product, quantity: 1 });
            }
            updateCart();
        }
    });
    
    cartListContainer.addEventListener("click", event => {
        const productId = Number(event.target.dataset.id);
        const productInCart = cart.find(p => p.id === productId);
        if (!productInCart) return;
        
        if (event.target.classList.contains("increase")) {
            productInCart.quantity++;
        } else if (event.target.classList.contains("decrease")) {
            if (productInCart.quantity > 1) {
                productInCart.quantity--;
            } else {
                cart.splice(cart.indexOf(productInCart), 1);
            }
        }
        updateCart();
    });
    
    cartListContainer.addEventListener("input", event => {
        if (event.target.classList.contains("quantity-input")) {
            const productId = Number(event.target.dataset.id);
            const productInCart = cart.find(p => p.id === productId);
            if (productInCart) {
                const newQuantity = Math.max(1, parseInt(event.target.value) || 1);
                productInCart.quantity = newQuantity;
                updateCart();
            }
        }
    });
    
    cartButton.addEventListener("click", () => {
        cartDrawer.style.transform = "translateX(0%)";
    });
    
    closeButton.addEventListener("click", () => {
        cartDrawer.style.transform = "translateX(100%)";
    });
    
    renderProducts();

