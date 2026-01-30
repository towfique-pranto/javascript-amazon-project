import { cart } from "../../data/cart-class.js";

export function renderCheckoutHeader() {

  const htmlHeader = document.querySelector('.js-checkout-header-middle-section');
  const cartQuantity = cart.calculateCartQuantity();

  htmlHeader.innerHTML = `
  Checkout (<a
            class="return-to-home-link js-return-to-home"
            href="amazon.html"
          >${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'}</a
          >)
  `
}