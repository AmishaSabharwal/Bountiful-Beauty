// cart.js

function addToCart(productId) {
  // Send an AJAX request to the server to add the product to the cart
  fetch('/add_cart', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          productId: productId
      }),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to add item to cart');
      }
      // Optionally, handle success response if needed
      return response.json();
  })
  .then(data => {
      // Optionally, do something with the response data if needed
      console.log('Item added to cart successfully');
  })
  .catch(error => {
      console.error('Error:', error);
  });
}
