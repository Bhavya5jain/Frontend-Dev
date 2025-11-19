
const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  console.log("Loading products...");
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const products = await res.json();

    products.forEach((p) => {
      console.log(`Product: ${p.title}`);
      console.log(`Price: $${p.price}`);
      console.log(`Image: ${p.image}`);
      console.log("----");
    });

    // Bonus: Render cards if document exists (browser)
    if (typeof document !== "undefined") {
      const container = document.getElementById("products") || document.body;
      products.forEach((p) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.margin = "8px";
        card.style.padding = "8px";
        card.innerHTML = `
          <img src="${p.image}" alt="${p.title}" style="width:120px;height:auto;display:block;margin-bottom:8px;">
          <h3>${p.title}</h3>
          <p>Price: $${p.price}</p>
        `;
        container.appendChild(card);
      });
    }
  } catch (err) {
    console.error("Failed to load products. Please try again.", err.message);
  }
}

fetchProducts();