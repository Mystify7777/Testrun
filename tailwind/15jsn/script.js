const products = JSON.parse(localStorage.getItem('products')) || [];

function createCard(product) {
  return `
    <div class="bg-white p-4 rounded-lg shadow">
      <h2 class="text-lg font-bold">${product.name}</h2>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Compare At:</strong> $${product.compareAtPrice}</p>
      <p><strong>Brand:</strong> ${product.specs.brand}</p>
      <p><strong>Connectivity:</strong> ${product.specs.connectivity}</p>
      <p><strong>Energy Saving:</strong> ${product.specs.energySaving ? 'Yes' : 'No'}</p>
      <p><strong>Colors:</strong> ${product.colors.join(', ')}</p>
      <p><strong>Variants:</strong> ${product.variants.join(', ')}</p>
      <p><strong>In Stock:</strong> ${product.inStock ? 'Yes' : 'No'}</p>
      <p><strong>Reviews:</strong> ${product.reviews}</p>
    </div>
  `;
}

if (document.getElementById('productForm')) {
  document.getElementById('productForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const product = {
      id: products.length + 1,
      name: document.getElementById('name').value,
      price: parseFloat(document.getElementById('price').value),
      compareAtPrice: parseFloat(document.getElementById('compareAtPrice').value),
      specs: {
        brand: document.getElementById('brand').value,
        connectivity: document.getElementById('connectivity').value,
        energySaving: document.getElementById('energySaving').value === 'true',
      },
      colors: document.getElementById('colors').value.split(',').map((c) => c.trim()),
      variants: document.getElementById('variants').value.split(',').map((v) => v.trim()),
      inStock: document.getElementById('inStock').value === 'true',
      reviews: parseFloat(document.getElementById('reviews').value),
    };

    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));

    document.getElementById('confirmation').classList.remove('hidden');
    event.target.reset();
  });
}

if (document.getElementById('productCards')) {
  const productCards = products.map(createCard).join('');
  document.getElementById('productCards').innerHTML = productCards;
}
