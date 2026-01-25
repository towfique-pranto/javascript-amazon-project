import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader(){

  const htmlHeader = document.querySelector('.js-checkout-header-middle-section');
  const cartQuantity = calculateCartQuantity();

  htmlHeader.innerHTML =`
  Checkout (<a
            class="return-to-home-link js-return-to-home"
            href="amazon.html"
          >${cartQuantity} ${cartQuantity === 1 ? 'item' : 'items'}</a
          >)
  `
}