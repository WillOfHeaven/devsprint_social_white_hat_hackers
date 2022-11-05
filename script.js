document.addEventListener('DOMContentLoaded', (e) => {
    const boxName = "carts";
    class Item{
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
    const items = [];
    function addItemsToStorage(item) {
        items.push(item);
        let jsonItem = JSON.stringify({items: items});
        localStorage.setItem(boxName, items);
    }

    function getItemsFromStorage() {
        let jsonItem = localStorage.getItem(boxName);
        items.push(...JSON.parse(jsonItem).items);
    }

    

    
})