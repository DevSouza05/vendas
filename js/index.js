"use strict"
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

 const products = [
    {
        name: "Iphone 13",
        images: ["./src/product/eletronicos/celular/iphone.jpg", "./src/iphone.jpg", "./src/iphone.jpg"],
        description: "128GB, Tela 6,1 12MP",
        price: "R$ 3.400,00",
        originalPrice: "R$ 3.699,00",
        rating: 4
    },
    {
        name: "Iphone 12",
        images: ["./src/product/eletronicos/celular/iphone 12.jpeg", "./src/iphone.jpg", "./src/iphone.jpg"],
        description: "64GB, Tela 6,1 12MP",
        price: "R$ 2.800,00",
        originalPrice: "R$ 3.199,00",
        rating: 3
    },
    {
        name: "Headset Hylas",
        images: ["./src/product/eletronicos/headset/Headset.png", "./src/headset2.jpg", "./src/headset3.jpg"],
        description: "Hylas Preto H260 RGB",
        price: "R$ 150,00",
        originalPrice: "R$ 200,00",
        rating: 5
    },
    {
        name: "Notebook Dell ",
        images: ["./src/product/eletronicos/notebook/dell_inspiron.jpg", "./src/dell_inspiron2.jpg", "./src/dell_inspiron3.jpg"],
        description: "i7,8GB,512GB SSD",
        price: "R$ 3.799,00",
        originalPrice: "R$ 4.199,00",
        rating: 4
    }
];

 
function loadProducts() {
    const container = document.getElementById('product-cards-container');
    container.innerHTML = '';

    
    products.forEach(product => {
        const cardHTML = `
            <div class="product-card col-md-3">
                <img src="${product.images[0]}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>De: ${product.originalPrice}</strong> Por: ${product.price}</p>
                <!-- Botão para abrir o modal -->
               <button class="btn btn-success" 
        data-bs-toggle="modal" 
        data-bs-target="#productModal" 
        onclick="openModal('${product.name}', '${product.images[0]}', '${product.description}', '${product.price},${product.rating}')">
    Comprar Agora
</button>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

//abrir o modal e preencher as informações
function openModal(title, imageUrl, description, price, rating) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-description').innerText = description;
    document.getElementById('popup-price').innerText = price;

    const carouselInner = document.getElementById('carouselImagesInner');
    carouselInner.innerHTML = '';

    const carouselItem = `
        <div class="carousel-item active">
            <img src="${imageUrl}" class="d-block w-100" alt="${title}">
        </div>
    `;
    carouselInner.innerHTML += carouselItem;

    //estrelas de avaliação
    const ratingContainer = document.getElementById('popup-rating');
    ratingContainer.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const starClass = i < rating ? 'fa fa-star' : 'fa fa-star-o';
        const starElement = `<i class="${starClass}"></i>`;
        ratingContainer.innerHTML += starElement;
    }

    // Exibe o link de compra
    document.getElementById('popup-link').href = '#'; 
}


window.onload = loadProducts;