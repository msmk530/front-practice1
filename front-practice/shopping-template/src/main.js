function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function printItems(items) {
  console.log(items);
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHtmlString(item)).join("");
}

function createHtmlString(item) {
  return `
  <li class="item">
    <img src="${item.image}" alt="${item.country}" class="item__thumbnail" />
    <span class="item__description">${item.color}, ${item.size}</span>
  </li>
  `;
}

function setEventListner(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".btns");
  logo.addEventListener("click", () => printItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key === null || value === null) {
    return;
  }

  const filtered = items.filter((item) => item[key] === value);
  printItems(filtered);
}

loadItems()
  .then((items) => {
    printItems(items);
    setEventListner(items);
  })
  .catch(console.log);
