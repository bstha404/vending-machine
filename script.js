const checkout = () => {
  alert("checkout");
};

const myProducts = [
  {
    id: 1,
    productId: 101,
    name: "Earthen Bottle Textured",
    price: "$48",
    quantityLeft: "35 left",
    imageUrl: "assets/Helmet.png",
    category: "beverage",
  },
  {
    id: 2,
    productId: 102,
    name: "Earthen Bottle Textured",
    price: "$48",
    quantityLeft: "35 left",
    imageUrl: "assets/headphone.png",
    category: "snacks",
  },
  {
    id: 3,
    productId: 103,
    name: "Earthen Bottle Textured",
    price: "$48",
    quantityLeft: "35 left",
    imageUrl: "assets/Gaming.png",
    category: "beverage",
  },
  {
    id: 4,
    productId: 104,
    name: "Earthen Bottle Textured",
    price: "$48",
    quantityLeft: "35 left",
    imageUrl: "assets/Gamepad.png",
    category: "snacks",
  },
  {
    id: 5,
    productId: 105,
    name: "Earthen Bottle Textured",
    price: "$48",
    quantityLeft: "35 left",
    imageUrl: "assets/Umbrella.png",
    category: "beverage",
  },
  {
    id: 6,
    productId: 106,
    name: "Earthen Bottle Textured",
    price: "$48",
    quantityLeft: "35 left",
    imageUrl: "assets/Umbrella1.png",
    category: "beverage",
  },
  // Add more products as needed
];

let category = "";

let products =
  category === ""
    ? myProducts
    : myProducts.filter((product) => product.category === category);

function renderProducts() {
  const productContainer = document.getElementById("product-container");

  // Clear existing products
  productContainer.innerHTML = "";

  products.forEach((product) => {
    // Create a wrapper for each product
    const productCard = document.createElement("a");
    productCard.href = "#";
    productCard.className = "group";

    // Create the image container
    const imgContainer = document.createElement("div");
    imgContainer.className =
      "aspect-h-1 aspect-w-1 w-full h-64 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7";
    const img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = `Image of ${product.name}`;
    img.className =
      "h-full w-full object-cover object-center group-hover:opacity-75";
    imgContainer.appendChild(img);

    // Create the text and button section
    const textContainer = document.createElement("div");
    textContainer.className = "w-full justify-between items-center";
    const title = document.createElement("h3");
    title.className =
      "mt-4 text-sm text-gray-700 text-xl font-sans font-semibold";
    title.textContent = product.name;
    const priceAndQuantity = document.createElement("div");
    priceAndQuantity.className = "flex justify-between";
    const price = document.createElement("p");
    price.className = "mt-1 text-lg font-medium text-gray-900 font-mono";
    price.textContent = product.price;
    const quantity = document.createElement("h5");
    quantity.className = "text-sm font-light mt-2 font-mono";
    quantity.textContent = product.quantityLeft;
    priceAndQuantity.append(price, quantity);

    textContainer.append(title, priceAndQuantity);

    // Create the button
    const button = document.createElement("button");
    button.className =
      "w-full rounded-full bg-orange-400 mt-4 p-2 flex items-center justify-center space-x-2";
    button.innerHTML =
      ' <img src="assets/Cart.png" alt="Cart" class="w-5 h-5"/> <span class="mx-8 font-semibold">Add to Cart</span>'; // Emoji and text
    button.onclick = () => addtoCart(product.id); // Pass the product ID to the function

    // Append all elements to the product card
    productCard.append(imgContainer, textContainer, button);
    productContainer.appendChild(productCard);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateActiveButton(category); // Ensure the initial state is set
});

function addtoCart(productId) {
  // Your add-to-cart logic here
  console.log(`Product with ID ${productId} added to cart.`);
}

function sortByCat(mycategory) {
  console.log(mycategory);
  category = mycategory;
  products =
    category === ""
      ? myProducts
      : myProducts.filter((product) => product.category === category);
  renderProducts();

  // Update button styles
  updateActiveButton(mycategory);
}

function updateActiveButton(activeCategory) {
  // Get all buttons
  const buttons = document.querySelectorAll(".category-button");

  buttons.forEach((button) => {
    // Get the category from the button's data attribute
    const buttonCategory = button.getAttribute("data-category");

    // Update the button's background color based on the active category
    if (buttonCategory === activeCategory) {
      button.classList.add("bg-orange-400");
      button.classList.remove("bg-gray-200");
    } else {
      button.classList.add("bg-gray-200");
      button.classList.remove("bg-orange-400");
    }
  });
}
