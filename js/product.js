// Script para ativar o menu hamburguer
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
});


// Função para filtrar os produtos por loja
function filterStore(store) {
    const allProducts = document.querySelectorAll('.product-card');
    allProducts.forEach(product => {
        if (store === 'all') {
            product.style.display = 'block'; 
        } else {
            if (product.dataset.store === store) {
                product.style.display = 'block'; 
            } else {
                product.style.display = 'none';
            }
        }
    });
}

// Função de pesquisa de produto
function filterProducts() {
    const searchQuery = document.getElementById('product-search').value.toLowerCase();
    const allProducts = document.querySelectorAll('.product-card');
    
    allProducts.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'block'; 
        } else {
            product.style.display = 'none'; 
        }
    });
}
