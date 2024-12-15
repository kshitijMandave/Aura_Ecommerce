function getAllProducts() {
  // Fetch products from the API
  let promiseObj = fetch("https://fakestoreapi.com/products");

  promiseObj
    .then((res) => {
      return res.json(); // Parses the response as JSON
    })
    .then((data) => {
      console.log(data); // Logs the product data
      data.forEach((product) => {
        createCard(product); // Creates a card for each product
      });
    })
    .catch((error) => {
      alert(
        "Something went wrong while fetching the products. Please try again later."
      );
    });
}

// Function to create a product card
function createCard(product) {
  const { image, price, title, rating } = product; // Destructure product properties

  // Create the main product card
  let divCard = document.createElement("div");
  divCard.className = "products-card";

  // Create the card container for content
  let cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  // Create the image wrapper
  let imgWrapper = document.createElement("div");
  imgWrapper.className = "products-img-wrapper";

  // Add the product image
  let img = document.createElement("img");
  img.src = image;
  img.alt = "Product Image";
  img.style.width = "80%";
  img.style.borderRadius = "8px";

  imgWrapper.appendChild(img);
  cardContainer.appendChild(imgWrapper);

  // Create the card content container
  let cardContent = document.createElement("div");
  cardContent.className = "products-card-content";

  // Create title and wishlist section
  let titleDiv = document.createElement("div");
  titleDiv.style.display = "flex";
  titleDiv.style.justifyContent = "space-between";

  let h4 = document.createElement("h4");
  h4.innerText = title;

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
  h3.innerHTML = `₹${price}`;
  cardContent.appendChild(h3);

  // Create rating section
  let ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.gap = "5px";
  ul.style.padding = "0";
  ul.style.listStyle = "none";
  ul.style.margin = "10px 0";

  const maxStars = 5;
  const filledStars = Math.round(rating?.rate || 0);

  for (let i = 0; i < maxStars; i++) {
    let star = document.createElement("i");
    star.className =
      i < filledStars ? "fa-solid fa-star" : "fa-regular fa-star";
    star.style.color = i < filledStars ? "#FFD700" : "#ccc";
    ul.appendChild(star);
  }
  cardContent.appendChild(ul);

  // Create buttons container
  let btnContainer = document.createElement("div");
  btnContainer.className = "product-btn";

  let btn1 = document.createElement("button");
  btn1.innerText = "Product Details";
  btn1.style.marginRight = "10px";

  let btn2 = document.createElement("button");
  btn2.innerText = "Add to Cart";

  btnContainer.appendChild(btn1);
  btnContainer.appendChild(btn2);

  cardContent.appendChild(btnContainer);

  // Append card content to the card container
  cardContainer.appendChild(cardContent);
  divCard.appendChild(cardContainer);

  // Append the product card to the products container
  document.querySelector(".products-container").appendChild(divCard);
}
