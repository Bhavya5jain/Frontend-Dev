function Product(name, price) {
  if (typeof price !== 'number' || price < 0) throw new Error('Invalid product price');
  this.name = name;
  this.price = price;
}

Product.prototype.applyDiscount = function(percent) {
  if (typeof percent !== 'number' || percent < 0 || percent > 100) throw new Error('Percent must be 0-100');
  const discounted = this.price * (1 - percent / 100);
  return +discounted.toFixed(2);
};

document.getElementById('runQ3').addEventListener('click', () => {
  try {
    const p1 = new Product('Laptop', 50000);
    const p2 = new Product('Headphones', 2000);
    const p3 = new Product('Smartwatch', 12000);

    const lines = [
      `${p1.name}: Original ₹${p1.price} → 10% off → ₹${p1.applyDiscount(10)}`,
      `${p2.name}: Original ₹${p2.price} → 25% off → ₹${p2.applyDiscount(25)}`,
      `${p3.name}: Original ₹${p3.price} → 15% off → ₹${p3.applyDiscount(15)}`,
      '',
      "Abstraction: applyDiscount encapsulates the math, so callers don't compute discounts manually."
    ];
    document.getElementById('q3out').textContent = lines.join('\n');
  } catch (err) {
    document.getElementById('q3out').textContent = 'Error: ' + err.message;
  }
});
