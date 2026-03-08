document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99 },
    { id: 2, name: "Product 2", price: 19.99 },
    { id: 3, name: "Product 3", price: 59.999 },
  ];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotalMessage = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkOutBtn = document.getElementById("checkout-btn");

  products.forEach((p) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${p.name} - $${p.price.toFixed(2)}</span>
    <button data-id="${p.id}">Add to cart</button>
    `; // we add to fixed so that it will show 2 decimal point
    // we add data-id so that we can get the id of the product when we click on the add to cart button so identify the product
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
      // we add parseInt so that it will convert string to number because data-id is string
      // we use find so that we can get the product from the products array by its id insted of find we can use filter or loop with if condition
    }
  });

  function addToCart(product) {
    cart.push(product);
    savecart(); // to save the cart
    renderCart();
  }

  function savecart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    cartItems.innerText = ""; // clear the cart items
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice = Math.round((totalPrice + item.price) * 100) / 100;
 // calculate the total price and here we use math.round so that it will round the total price to 2 decimal point and give exact value after several times of addtion 
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button data-index="${index}">Remove</button>
        `; // we add data-index="${index} " so that we can get the index of the item when we click on the remove button

        cartItem.querySelector("button").addEventListener("click", () => {
          cart.splice(index, 1); // remove the item from the cart you can also use cartitem.remove() but  then we have to update the total price
          savecart();
          renderCart();
          // // now since we are removing the item from the cart and it is removed from array so there is no need to chnage in total price because total price is calculated from the array and we are calling randercart() so it will update the total price because it will reframe the array after an item is removed
        });

        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      cartItems.innerHTML = " your Cart is empty";
      // totalPriceDisplay.textContent = `$0.00`; // make the total price 0
      cartTotalMessage.classList.add("hidden");
    }
  }

  checkOutBtn.addEventListener("click", () => {
    cart.length = 0;
    // alert("Checkout successfully");

    renderCart(); /* we use renderCart so that we can clear the cart items after checkout is done (how renderCart() works ? see explenation below)
    because in rander function we use  else statement which means if cart is empty then we show empty cart message and if cart is not empty then we show cart items and on clicking checkout we clear the cart items
    */

    // if i will use cartmessageempty.classList.remove("hidden") then it will not show any thing because in rander function  cartItems.innerText = "";   i clear the cart item hence the <p>your cart is empty</p> will not show because we are clearing the cart items on clicking checkout
    savecart();
  });

  // ❓ Why do we call renderCart() at the end (after DOMContentLoaded)?
  //
  // 💡 Explanation:
  // When the page first loads or is refreshed, we immediately retrieve the saved cart data
  // from localStorage and store it inside the "cart" array.
  // However, even though the data is now in memory, the cart section on the webpage (the <div id="cart-items">)
  // still remains empty because nothing has been rendered to the screen yet.
  //
  // The renderCart() function’s job is to take the current "cart" array
  // and visually display it inside the page by creating and appending HTML elements.
  //
  // Therefore, we call renderCart() at the end so that as soon as the page finishes loading,
  // the saved cart data (if any) is immediately shown to the user.
  // Without this call, the cart data would exist internally but would only appear
  // after the user adds or removes an item again.

  renderCart();
});

// we add this savecart function after every action so that we can save the cart in local storage
