// took help from external resources like stack overflow, chat gpt etc

let initialItems = [
    {
        name: "Kit-Kat ",
        description: "This is a kit kat bar",
        price: 3.99,
        
    },
    {
        name: "Protein-Powder",
        description: "This is a jar of protein powder",
        price: 99.99,
        img: "https://m.media-amazon.com/images/I/71WMr+UDpSL._AC_SX425_.jpg"
    },
    {
        name: "Protein-Bar",
        description: "This is a Protein Bars",
        price: 5.99,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkM1DtU-sVdX0ZOhbEnznuAMR1JweLK6tpJVJwfoM3K0MuqpZ5ynprh3xZYvEbsmGA7Yw&usqp=CAU"
    }
];


// Check if items already exist in local storage
if (!localStorage.getItem('items')) {
    // Items don't exist, so set initial items
    localStorage.setItem('items', JSON.stringify(initialItems));
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#item-form');
    const deleteAllButton = document.querySelector('#delete-all');
    const sortButton = document.querySelector('#sort-items');
    let items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach(function(item) {
        addItemToList(item);
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let item = {
            name: document.querySelector('#item-name').value,
            description: document.querySelector('#item-description').value,
            price: document.querySelector('#item-price').value,
            img: document.querySelector('#item-img').value,
        };

        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));

        addItemToList(item);
    });

    deleteAllButton.addEventListener('click', function() {
        localStorage.clear();
        document.querySelector('#item-list').innerHTML = '';
        items = [];
    });

    sortButton.addEventListener('click', function() {
        items.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });

        localStorage.setItem('items', JSON.stringify(items));
        document.querySelector('#item-list').innerHTML = '';
        
        items.forEach(function(item) {
            addItemToList(item);
        });
    });

    function addItemToList(item) {
        let li = document.createElement('li');
        li.innerHTML = `<h2>${item.name}</h2>
                        <p>${item.description}</p>
                        <p>${item.price}</p>
                        <img src="${item.img}" alt="${item.name}">`;

        document.querySelector('#item-list').appendChild(li);
    }
});



