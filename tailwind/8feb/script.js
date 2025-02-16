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

let cart = [];

        document.querySelector(".product-list-container").innerHTML = products.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="image">
                <p>${product.name}</p>
                <p>$ ${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to cart</button>
            </div>
        `).join('');

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", event => {
                let productId = event.target.getAttribute("data-id");
                let product = products.find(p => p.id == productId);
                let existing = cart.find(p => p.id == productId);
                if (existing) {
                    existing.quantity++;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                showCartItem();
            });
        });

        function showCartItem() {
            let cartCon = document.querySelector(".cart-list-con");
            cartCon.innerHTML = cart.map(item => `
                <div class="product-card">
                    <img src="${item.image}" alt="image">
                    <p>${item.name}</p>
                    <p>$ ${item.price * item.quantity}</p>
                    <button class="decrease" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase" data-id="${item.id}">+</button>
                </div>
            `).join('');
        }

        document.querySelector(".cart-list-con").addEventListener("click", event => {
            let productId = event.target.getAttribute("data-id");

            if (event.target.classList.contains("increase")) {
                cart.find(p => p.id == productId).quantity++;
            }

            if (event.target.classList.contains("decrease")) {
                let item = cart.find(p => p.id == productId);
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart = cart.filter(p => p.id != productId);
                }
            }

            showCartItem();
        });

        document.querySelector(".clg-btn").addEventListener("click", () => {
            document.querySelector(".cart-list-con").classList.toggle("hidden");
        });