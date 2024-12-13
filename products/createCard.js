function createCard() {
  // Create the main card container
  let divCard = document.createElement("div");
  divCard.className = "products-card";

  // Create the image wrapper
  let imgWrapper = document.createElement("div");
  imgWrapper.className = "products-img-wrapper";

  // Create the product image
  let img = document.createElement("img");
  img.src =
    "https://images.unsplash.com/photo-1572295293833-2d7556b54324?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  img.alt = "Product Image";

  imgWrapper.appendChild(img);
  divCard.appendChild(imgWrapper);

  // Create the card content container
  let cardContent = document.createElement("div");
  cardContent.className = "products-card-content";

  // Create title and wishlist section
  let titleDiv = document.createElement("div");
  titleDiv.style.display = "flex";
  titleDiv.style.justifyContent = "space-between";

  let h4 = document.createElement("h4");
  h4.innerText = "Puma M3145";

  let wishlistIcon = document.createElement("i");
  wishlistIcon.title = "Add to wishlist";
  wishlistIcon.style.fontSize = "20px";
  wishlistIcon.style.cursor = "pointer";
  wishlistIcon.className = "fa-regular fa-heart";

  titleDiv.appendChild(h4);
  titleDiv.appendChild(wishlistIcon);

  cardContent.appendChild(titleDiv);

  // Add price
  let h3 = document.createElement("h3");
  h3.innerHTML = "<span>₹ </span>6000";
  cardContent.appendChild(h3);

  // Create rating section
  let ul = document.createElement("ul");
  for (let i = 0; i < 5; i++) {
    let star = document.createElement("i");
    star.className = "fa-regular fa-star";
    ul.appendChild(star);
  }
  cardContent.appendChild(ul);

  // Create buttons container
  let btnContainer = document.createElement("div");
  btnContainer.className = "product-btn";

  let btn1 = document.createElement("button");
  btn1.innerText = "Product Details";

  let btn2 = document.createElement("button");
  btn2.innerText = "Add to Cart";

  btnContainer.appendChild(btn1);
  btnContainer.appendChild(btn2);

  cardContent.appendChild(btnContainer);

  // Append the content to the card
  divCard.appendChild(cardContent);

  // Append the card to the container
  document.querySelector(".products-container").appendChild(divCard);
}
