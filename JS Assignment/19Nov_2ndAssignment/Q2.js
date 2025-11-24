const menu = {
  pizza: 250, burger: 120, pasta: 180, fries: 90, sandwich: 110, salad: 95, momo: 70
};

const menuContainer = document.getElementById('q2menu');
Object.entries(menu).forEach(([name, price]) => {
  const el = document.createElement('div');
  el.className = 'item';
  el.textContent = `${name} • ₹${price}`;
  menuContainer.appendChild(el);
});

function calculateBill(orderItems) {
  const prices = orderItems.map(item => {
    const key = item.trim().toLowerCase();
    if (!menu.hasOwnProperty(key)) throw new Error(`Item not found on menu: "${item}"`);
    return menu[key];
  });
  return prices.reduce((acc, p) => acc + p, 0);
}

document.getElementById('runQ2').addEventListener('click', () => {
  const out = document.getElementById('q2out');
  const raw = document.getElementById('orderInput').value;
  const items = raw.split(',').map(s => s.trim()).filter(Boolean);
  try {
    if (items.length === 0) throw new Error('No items entered');
    const total = calculateBill(items);
    out.textContent = `Order: ${items.join(', ')}\nTotal: ₹${total}\nThank you for ordering!`;
  } catch (err) {
    out.textContent = `Order Error: ${err.message}\nPlease check the menu above.`;
  }
});
