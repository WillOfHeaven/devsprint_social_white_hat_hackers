document.addEventListener('DOMContentLoaded', (e) => {
  const boxName = "carts";
  class Item {
    constructor(id, name, price, floor, section, aisle) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.floor = floor;
      this.section = section;
      this.aisle = aisle;
    }
  }
  //A array which stores items;
  let items = [];
  function addItemsToStorage(item) {
    items.push(item);
    let jsonItem = JSON.stringify({ items: items });
    localStorage.setItem(boxName, jsonItem);
  }

  function getItemsFromStorage() {
    let jsonItem = localStorage.getItem(boxName);
    let obj = JSON.parse(jsonItem);
    if (obj != null)
      items = obj.items;
  }

  function updateCount() {
    let count = document.getElementById('item-count');
    count.innerText = `${items.length - 0} items`;
  }

  function loadCartItem() {

    let modelBody = document.getElementsByClassName('modal-body')[0].firstElementChild;
    if (items.length == 0)
      modelBody.innerText = "Your list of items is empty.";
    else {
      for (let x in items) {
        let element = document.createElement('div');
      //   div.innerHTML = `<div class="card" style="width: 18rem;">
      //   <img src="Images2/" class="card-img-top" alt="...">
      //   <div class="card-body">
      //     <h5 class="card-title">Stationary</h5>
      //     <p class="card-text">Papers,pen and all stationary goodies!!</p>
      //     <a href="kitchen.html" class="btn btn-primary">Go somewhere</a>
      //   </div>
      // </div>`;
      }
    }
  }

  getItemsFromStorage();
  updateCount();

  let cartBtn = document.getElementById('cartBtn');
  cartBtn.addEventListener("click", (e) => loadCartItem());



})