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

loadItems()
  .then((items) => {
    printItems(items);
  })
  .catch(console.log);
