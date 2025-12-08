function processProducts(products) {
  // Step 1: Use map() to extract product names
  const productNames = products.map(function(item) {
    return item.name;
  });

  // Step 2: Use forEach() to log messages based on price
  products.forEach(function(item) {
    if (item.price > 50) {
      console.log(item.name + " is above $50");
    } else {
      console.log(item.name + " is below $50");
    }
  });

  return productNames;  // optional, if needed
}