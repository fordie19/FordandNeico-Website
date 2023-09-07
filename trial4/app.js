let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Strawberry Mint Lemonade',
        image: 'beverage3.jpg',
        price: 78.00
    },

    {
        id: 2,
        name: 'Fresh Lemon Juice',
        image: 'lemon.jpg',
        price: 68.00
    },

    {
        id: 3,
        name: 'Real Lemon Iced Tea',
        image: 'beverage2.jpg',
        price: 78.00
    },

    {
        id: 5,
        name: 'Caramel Oreo',
        image: 'caramel.jpg',
        price: 128.00
    },
    {
        id: 6,
        name: 'Oreo Milkshake',
        image: 'oreo.jpg',
        price: 128.00
    },
    
    {
        id: 7,
        name: 'Mais Con Yelo Shake',
        image: 'mais.jpg',
        price: 118 
    },

    {
        id: 8,
        name: 'Hungarian Rice',
        image: 'hungarian.jpg',
        price: 98
    },
    {
        id: 9,
        name: 'Pork Breaded Rice',
        image: 'pork.jpg',
        price: 128
    },
    {
        id: 10,
        name: 'Chicken Teryaki',
        image: 'teryaki.jpg',
        price: 128
    },

    {
        id: 12,
        name: 'Eggnatic CCB',
        image: 'bns1.jpg',
        price: 108
    },
    {
        id: 13,
        name: 'Shake Overload',
        image: 'bns2.jpg',
        price: 138
    },
    {
        id: 14,
        name: 'Terilicious',
        image: 'bns3.jpg',
        price: 118
    },
    {
        id: 15,
        name: 'Bacon Chicks',
        image: 'bns4.jpg',
        price: 118
    },

    {
        id: 18,
        name: 'Spaghetti',
        image: 'pasta1.jpg',
        price: 128
    },
    {
        id: 19,
        name: 'Cheesy Tuna Pesto',
        image: 'pasta2.jpg',
        price: 148
    },

    {
        id: 16,
        name: 'Ham & Cheese Sandwich',
        image: 'sand1.jpg',
        price: 88
    },
    {
        id: 17,
        name: 'Tuna Sandwich',
        image: 'sand2.jpg',
        price: 68
    },
    

];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}