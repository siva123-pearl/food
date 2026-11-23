
// =====================================
// RASA HOUSE - COMPLETE FOOD MENU
// =====================================

const products = [
  // IDLI
  {id:1,name:"Soft Idli",category:"Idli",price:40,description:"Soft steamed rice cakes with sambar and chutney.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921"},
  {id:2,name:"Mini Idli",category:"Idli",price:60,description:"Small idlis served with delicious sambar.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921"},
  {id:3,name:"Ghee Podi Idli",category:"Idli",price:75,description:"Idli tossed with ghee and spicy podi.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921"},
  {id:4,name:"Sambar Idli",category:"Idli",price:65,description:"Soft idlis soaked in hot sambar.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921"},
  {id:5,name:"Thatte Idli",category:"Idli",price:70,description:"Large and fluffy South Indian idli.",image:"https://images.unsplash.com/photo-1630383249896-424e482df921"},

  // DOSA
  {id:6,name:"Plain Dosa",category:"Dosa",price:70,description:"Classic crispy South Indian dosa.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:7,name:"Masala Dosa",category:"Dosa",price:90,description:"Crispy dosa filled with potato masala.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:8,name:"Ghee Roast",category:"Dosa",price:110,description:"Golden crispy dosa roasted in ghee.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:9,name:"Onion Dosa",category:"Dosa",price:85,description:"Dosa topped with fresh chopped onions.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:10,name:"Podi Dosa",category:"Dosa",price:100,description:"Dosa topped with traditional spicy podi.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:11,name:"Rava Dosa",category:"Dosa",price:100,description:"Thin and crispy semolina dosa.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:12,name:"Mysore Masala Dosa",category:"Dosa",price:120,description:"Dosa with spicy chutney and potato masala.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:13,name:"Paper Roast",category:"Dosa",price:130,description:"Extra thin and crispy long dosa.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:14,name:"Paneer Dosa",category:"Dosa",price:140,description:"Dosa filled with seasoned paneer.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},
  {id:15,name:"Cheese Dosa",category:"Dosa",price:130,description:"Crispy dosa with melted cheese.",image:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976"},

  // RICE
  {id:16,name:"Lemon Rice",category:"Rice",price:80,description:"Tangy rice with lemon and spices.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},
  {id:17,name:"Curd Rice",category:"Rice",price:70,description:"Creamy curd rice with mild tempering.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},
  {id:18,name:"Tomato Rice",category:"Rice",price:80,description:"Flavourful rice cooked with tomatoes.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},
  {id:19,name:"Tamarind Rice",category:"Rice",price:80,description:"Traditional tangy tamarind rice.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},
  {id:20,name:"Veg Biryani",category:"Rice",price:140,description:"Aromatic rice with mixed vegetables.",image:"https://images.unsplash.com/photo-1563379091339-03246963d96c"},
  {id:21,name:"Ghee Pongal",category:"Rice",price:90,description:"Rice and lentil pongal with ghee.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},
  {id:22,name:"Sambar Rice",category:"Rice",price:90,description:"Rice cooked with lentils and vegetables.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},
  {id:23,name:"Coconut Rice",category:"Rice",price:85,description:"Rice flavoured with fresh coconut.",image:"https://images.unsplash.com/photo-1512058564366-18510be2db19"},

  // SNACKS
  {id:24,name:"Medu Vada",category:"Snacks",price:50,description:"Crispy outside and soft inside lentil vada.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84"},
  {id:25,name:"Masala Vada",category:"Snacks",price:40,description:"Crunchy spiced lentil fritters.",image:"https://images.unsplash.com/photo-1606491956689-2ea866880c84"},
  {id:26,name:"Onion Pakoda",category:"Snacks",price:60,description:"Crispy onion fritters with spices.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950"},
  {id:27,name:"Potato Bonda",category:"Snacks",price:45,description:"Spiced potato filling in crispy coating.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950"},
  {id:28,name:"Samosa",category:"Snacks",price:35,description:"Crispy pastry with vegetable filling.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950"},
  {id:29,name:"Vegetable Cutlet",category:"Snacks",price:55,description:"Golden vegetable patties.",image:"https://images.unsplash.com/photo-1601050690597-df0568f70950"},
  {id:30,name:"French Fries",category:"Snacks",price:90,description:"Golden crispy potato fries.",image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877"},

  // MEALS
  {id:31,name:"South Indian Meals",category:"Meals",price:150,description:"Traditional rice meal with sides.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d"},
  {id:32,name:"Mini Meals",category:"Meals",price:120,description:"A smaller traditional South Indian meal.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d"},
  {id:33,name:"Parotta Kurma",category:"Meals",price:100,description:"Layered parotta with vegetable kurma.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d"},
  {id:34,name:"Chapati Kurma",category:"Meals",price:90,description:"Soft chapati with vegetable kurma.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d"},
  {id:35,name:"Poori Masala",category:"Meals",price:85,description:"Puffed pooris with potato masala.",image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d"},

  // BEVERAGES
  {id:36,name:"Filter Coffee",category:"Beverages",price:30,description:"Traditional South Indian filter coffee.",image:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"},
  {id:37,name:"Masala Tea",category:"Beverages",price:25,description:"Indian tea with aromatic spices.",image:"https://images.unsplash.com/photo-1571934811356-5cc061b6821f"},
  {id:38,name:"Badam Milk",category:"Beverages",price:50,description:"Almond flavoured milk.",image:"https://images.unsplash.com/photo-1571167765156-0e07f1b7e9b6"},
  {id:39,name:"Rose Milk",category:"Beverages",price:45,description:"Refreshing rose flavoured milk.",image:"https://images.unsplash.com/photo-1544145945-f90425340c7e"},
  {id:40,name:"Fresh Lime Juice",category:"Beverages",price:40,description:"Fresh lime drink.",image:"https://images.unsplash.com/photo-1513558161293-cdaf765edfd4"},
  {id:41,name:"Mango Milkshake",category:"Beverages",price:80,description:"Creamy mango milkshake.",image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699"},

  // DESSERTS
  {id:42,name:"Kesari",category:"Desserts",price:45,description:"Traditional sweet semolina kesari.",image:"https://images.unsplash.com/photo-1605197161470-5d8e6b9f0f4e"},
  {id:43,name:"Gulab Jamun",category:"Desserts",price:50,description:"Soft sweet dumplings in sugar syrup.",image:"https://images.unsplash.com/photo-1666190092159-5f8e1e1f8d6f"},
  {id:44,name:"Payasam",category:"Desserts",price:50,description:"Traditional sweet milk pudding.",image:"https://images.unsplash.com/photo-1605197161470-5d8e6b9f0f4e"},
  {id:45,name:"Rava Laddu",category:"Desserts",price:40,description:"Sweet semolina balls.",image:"https://images.unsplash.com/photo-1605197161470-5d8e6b9f0f4e"},
  {id:46,name:"Mysore Pak",category:"Desserts",price:55,description:"Traditional gram flour sweet.",image:"https://images.unsplash.com/photo-1605197161470-5d8e6b9f0f4e"},
  {id:47,name:"Jalebi",category:"Desserts",price:45,description:"Crispy spiral sweet in syrup.",image:"https://images.unsplash.com/photo-1605197161470-5d8e6b9f0f4e"},
  {id:48,name:"Carrot Halwa",category:"Desserts",price:65,description:"Sweet carrot pudding with nuts.",image:"https://images.unsplash.com/photo-1605197161470-5d8e6b9f0f4e"},
  {id:49,name:"Ice Cream",category:"Desserts",price:60,description:"A scoop of creamy ice cream.",image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb"},
  {id:50,name:"Fruit Salad",category:"Desserts",price:70,description:"Fresh seasonal fruit salad.",image:"https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea"}
];

// =====================================
// MENU DISPLAY
// =====================================

const categories = [
  "All", "Idli", "Dosa", "Rice",
  "Snacks", "Meals", "Beverages", "Desserts"
];

let selectedCategory = "All";

const menuTabs = document.getElementById("menuTabs");
const menuItems = document.getElementById("menuItems");
const searchInput = document.getElementById("searchInput");

function createCategoryButtons() {
  if (!menuTabs) return;

  menuTabs.innerHTML = "";

  categories.forEach(category => {
    const button = document.createElement("button");

    button.className =
      "tab" + (category === selectedCategory ? " active" : "");

    button.textContent = category;

    button.addEventListener("click", () => {
      selectedCategory = category;
      if (searchInput) searchInput.value = "";
      createCategoryButtons();
      displayMenu();
    });

    menuTabs.appendChild(button);
  });
}

function displayMenu() {
  if (!menuItems || !searchInput) return;

  const searchText = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(item => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.category.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  menuItems.innerHTML = "";

  document.getElementById("menuCount").textContent =
    `Showing ${filteredProducts.length} of ${products.length} food items`;

  if (filteredProducts.length === 0) {
    const message = document.createElement("p");
    message.className = "no-results";
    message.textContent = "No food items found.";
    menuItems.appendChild(message);
    return;
  }

  filteredProducts.forEach(item => {
    const card = document.createElement("article");
    card.className = "menu-card";

    const image = document.createElement("img");
    image.src = item.image + "?auto=format&fit=crop&w=600&q=75";
    image.alt = item.name;
    image.loading = "lazy";

    image.onerror = () => {
      image.src = "https://placehold.co/600x400?text=Food+Image";
    };

    const content = document.createElement("div");
    content.className = "menu-card-content";

    const category = document.createElement("span");
    category.className = "food-category";
    category.textContent = item.category;

    const name = document.createElement("h3");
    name.textContent = item.name;

    const description = document.createElement("p");
    description.textContent = item.description;

    const bottom = document.createElement("div");
    bottom.className = "food-bottom";

    const price = document.createElement("span");
    price.className = "price";
    price.textContent = "₹" + item.price;

    const button = document.createElement("button");
    button.className = "btn add-btn";
    button.textContent = "Add to Cart";

    button.addEventListener("click", () => addToCart(item.id));

    bottom.append(price, button);
    content.append(category, name, description, bottom);
    card.append(image, content);
    menuItems.appendChild(card);
  });
}

if (searchInput) {
  searchInput.addEventListener("input", displayMenu);
}

// =====================================
// SHOPPING CART
// =====================================

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("rasaHouseCart")) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("rasaHouseCart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(id) {
  const item = products.find(product => product.id === id);
  if (!item) return;

  const cart = getCart();
  const existing = cart.find(product => product.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }

  saveCart(cart);
  displayCart();

  alert(item.name + " added to cart!");
}

function updateCartCount() {
  const countElement = document.getElementById("cartCount");
  if (!countElement) return;

  const count = getCart().reduce(
    (total, item) => total + item.quantity, 0
  );

  countElement.textContent = count;
}

function displayCart() {
  const container = document.getElementById("cartItems");
  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";

  if (cart.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-cart";
    empty.textContent = "Your cart is empty. Explore our menu!";
    container.appendChild(empty);

    document.getElementById("cartTotal").textContent = "0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    const row = document.createElement("div");
    row.className = "cart-item";

    const name = document.createElement("strong");
    name.textContent = item.name;

    const price = document.createElement("span");
    price.textContent =
      `₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}`;

    const controls = document.createElement("div");
    controls.className = "quantity-controls";

    const minus = document.createElement("button");
    minus.textContent = "−";
    minus.onclick = () => changeQuantity(index, -1);

    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.onclick = () => changeQuantity(index, 1);

    const remove = document.createElement("button");
    remove.className = "remove-btn";
    remove.textContent = "Remove";
    remove.onclick = () => removeItem(index);

    controls.append(minus, quantity, plus, remove);
    row.append(name, price, controls);
    container.appendChild(row);
  });

  document.getElementById("cartTotal").textContent = total;
}

function changeQuantity(index, amount) {
  const cart = getCart();

  if (!cart[index]) return;

  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart(cart);
  displayCart();
}

function removeItem(index) {
  const cart = getCart();
  cart.splice(index, 1);

  saveCart(cart);
  displayCart();
}

// =====================================
// DEMO CHECKOUT
// =====================================

function checkout() {
  const cart = getCart();
  const message = document.getElementById("orderMessage");

  if (!message) return;

  if (cart.length === 0) {
    message.textContent = "Your cart is empty!";
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  message.textContent =
    `Demo checkout completed! Your sample total is ₹${total}. No real payment was made.`;

  localStorage.removeItem("rasaHouseCart");

  updateCartCount();
  displayCart();
}

const checkoutBtn = document.getElementById("checkoutBtn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", checkout);
}

// =====================================
// BOOKING FORM
// =====================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    document.getElementById("bookingMessage").textContent =
      "Your demo booking request was submitted successfully!";

    bookingForm.reset();
  });
}

// =====================================
// CONTACT FORM
// =====================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    document.getElementById("contactMessage").textContent =
      "Thank you! Your demo message has been submitted.";

    contactForm.reset();
  });
}

// =====================================
// BOOKING DATE VALIDATION
// =====================================

const dateInput = document.getElementById("bookingDate");

if (dateInput) {
  const today = new Date();

  const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
  ).toISOString().split("T")[0];

  dateInput.min = localDate;
}

// =====================================
// START RASA HOUSE WEBSITE
// =====================================

createCategoryButtons();
displayMenu();
updateCartCount();
displayCart();
