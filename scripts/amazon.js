import { cart } from '../data/cart-class.js';
import { products, loadProducts } from '../data/products.js';
import { formatCurrency } from './utils/money.js';


loadProducts(renderProductsGrid);

function renderProductsGrid() {

  let productsHTML = '';
  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');

  let filteredProducts = products;

  if (search) {
    filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase()) || product.keywords.some((keyword) => {
        return keyword.toLowerCase().includes(search.toLowerCase());
      });
    })
  }
  filteredProducts.forEach((product) => {
    productsHTML += `
    <div class="product-container">
            <div class="product-image-container">
              <img
                class="product-image"
                src="${product.image}"
              />
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img
                class="product-rating-stars"
                src="${product.getStarsUrl()}"
              />
              <div class="product-rating-count link-primary">${product.rating.count}</div>
            </div>

            <div class="product-price">
              ${product.getPrice()}
            </div>

            <div class="product-quantity-container">
              <select class="js-quantity-selector-${product.id}">
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extraInfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart js-${product.id}-added">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart"
            data-product-id="${product.id}">Add to Cart</button>
          </div>
    `;
  });
  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  updateCartQuantity();

  function updateCartQuantity() {
    let cartQuantity = cart.calculateCartQuantity();
    document.querySelector('.js-cart-quantity').innerText = cartQuantity;
  };



  const allTimeoutId = {};
  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const productAmount = document.querySelector(`.js-quantity-selector-${productId}`).value;
      const quantity = Number(productAmount);

      cart.addToCart(productId, quantity);
      updateCartQuantity();

      const addedMessage = document.querySelector(`.js-${productId}-added`);
      addedMessage.classList.add('view-added-to-cart');

      clearTimeout(allTimeoutId[productId]);

      const timeoutId = setTimeout(() => {
        addedMessage.classList.remove('view-added-to-cart');
      }, 2000);
      allTimeoutId[productId] = timeoutId;
    });
  });
}

const searchButton = document.querySelector('.js-search-button');

function handleSearch() {
  const inputValue = document.querySelector(".js-search-bar").value;
  window.location.href = `amazon.html?search=${inputValue}`;
}

searchButton.addEventListener('click', () => {
  handleSearch();
});

document.querySelector('.js-search-bar').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleSearch();
  }
});