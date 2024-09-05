document.addEventListener("DOMContentLoaded", () => {
  const orderId = new URLSearchParams(window.location.search).get("orderId");
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const order = orders.find((o) => o.id === orderId);

  if (order) {
    document.querySelector(
      ".delivery-date"
    ).textContent = `Arriving on ${order.estimatedDelivery}`;
    const productInfoContainer = document.querySelector(
      ".product-info-container"
    );
    productInfoContainer.innerHTML = order.items
      .map(
        (item) => `
          <div class="product-info">${item.name}</div>
          <div class="product-info">Quantity: ${item.quantity}</div>
          <img class="product-image" src="${item.image}" alt="${item.name}">
        `
      )
      .join("");

    // Update progress bar based on order status
    const progressLabels = document.querySelectorAll(".progress-label");
    const currentStatusIndex = Array.from(progressLabels).findIndex(
      (label) => label.textContent === order.status
    );
    if (currentStatusIndex >= 0) {
      progressLabels[currentStatusIndex].classList.add("current-status");
    }
  } else {
    console.error("Order not found");
    // Optionally, redirect back to orders page
    window.location.href = "orders.html";
  }
});
