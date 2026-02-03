import { orders } from "../data/orders.js";
import { formatCurrency } from "./utils/money.js";
import { getProduct, loadProductsFetch } from "../data/products.js";
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import { cart } from '../data/cart-class.js';

loadProductsFetch().then(() => {
  updateCartQuantity();
  let orderHTML = '';

  orders.forEach((order) => {
    let productListHTML = ``;

    order.products.forEach(productDetails => {
      const product = getProduct(productDetails.productId);
      productListHTML += `
            <div class="product-image-container">
              <img src="${product.image}" />
            </div>

            <div class="product-details">
              <div class="product-name">
                ${product.name}
              </div>
              <div class="product-delivery-date">Arriving on: ${dayjs(productDetails.estimatedDeliveryTime).format('MMMM D')
        }</div>
              <div class="product-quantity">Quantity: ${productDetails.quantity}</div>
              <button class="buy-again-button button-primary js-buy-again" data-product-id=${product.id}>
                <img class="buy-again-icon" src="images/icons/buy-again.png" />
                <span class="buy-again-message">Buy it again</span>
              </button>
            </div>

        <div class="product-actions">
          <a href="tracking.html?orderId=${order.id}&productId=${product.id}">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      `
    })

    orderHTML += `
        <div class="order-container">
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${dayjs(order.orderTime).format('MMMM D')}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${formatCurrency(order.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>
           <div class="order-details-grid">
            ${productListHTML}
          </div>
        </div>
        `
  })

  document.querySelector('.js-order-grid').innerHTML = orderHTML;

  document.querySelectorAll(".js-buy-again").forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      cart.addToCart(productId, 1);
      updateCartQuantity();
    });
  });
});

function updateCartQuantity() {
  document.querySelector('.js-cart-quantity').innerHTML = cart.calculateCartQuantity();
} 