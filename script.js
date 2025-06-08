let currentSlide = 0;
let currentProduct = {};
let quantity = 1;
let cartItemCount = 0;

// ===== SLIDE =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
});

setInterval(nextSlide, 5000);

// ===== MODAIS =====
const loginModal = document.getElementById('login-modal');
const registerModal = document.getElementById('register-modal');
const productModal = document.getElementById('product-modal');

const userBtn = document.getElementById('user-btn');
const closeLogin = document.getElementById('close-login');
const closeRegister = document.getElementById('close-register');
const closeProduct = document.getElementById('close-product');

const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');

// Abrir modal de login
userBtn.addEventListener('click', () => {
    loginModal.classList.add('active');
});

// Fechar modais
closeLogin.addEventListener('click', () => {
    loginModal.classList.remove('active');
});

closeRegister.addEventListener('click', () => {
    registerModal.classList.remove('active');
});

closeProduct.addEventListener('click', () => {
    productModal.classList.remove('active');
});

// Alternar entre login e cadastro
showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    registerModal.classList.add('active');
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.classList.remove('active');
    loginModal.classList.add('active');
});

// Fechar modal clicando fora
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.classList.remove('active');
    }
    if (e.target === registerModal) {
        registerModal.classList.remove('active');
    }
    if (e.target === productModal) {
        productModal.classList.remove('active');
    }
});

// ===== FORMULÁRIO =====
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
        alert('Login realizado com sucesso!');
        loginModal.classList.remove('active');
        loginForm.reset();
    }
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    
    if (name && email && password) {
        alert('Cadastro realizado com sucesso!');
        registerModal.classList.remove('active');
        registerForm.reset();
    }
});

// ===== MODAL DO PRODUTO =====
function openProductModal(title, image, price) {
    currentProduct = { title, image, price };
    
    document.getElementById('modal-product-img').src = image;
    document.getElementById('modal-product-title').textContent = title;
    document.getElementById('modal-product-price').textContent = price;
    
    // Reset quantidade e tamanho
    quantity = 1;
    document.getElementById('qty-display').textContent = quantity;
    document.getElementById('size-p').checked = true;
    
    productModal.classList.add('active');
}

// Controles de quantidade no modal
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');
const qtyDisplay = document.getElementById('qty-display');

qtyMinus.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
    }
});

qtyPlus.addEventListener('click', () => {
    quantity++;
    qtyDisplay.textContent = quantity;
});

// ===== CARRINHO SIMPLIFICADO (SÓ VISUAL) =====
const cartBtn = document.getElementById('cart-btn');
const cartCount = document.querySelector('.cart-count');

// Ícone do carrinho não faz nada
cartBtn.addEventListener('click', () => {
    alert('Carrinho em desenvolvimento! 🛒');
});

// Adicionar ao carrinho (só visual)
function addToCart(name, image, price) {
    cartItemCount++;
    updateCartCount();
    alert(`${name} adicionado ao carrinho! 🛒`);
}

// Adicionar ao carrinho do modal
document.getElementById('modal-add-to-cart').addEventListener('click', () => {
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    
    cartItemCount += quantity;
    updateCartCount();
    productModal.classList.remove('active');
    
    alert(`${currentProduct.title} (${selectedSize}) adicionado ao carrinho! 🛒\nQuantidade: ${quantity}`);
});

// Atualizar contador do carrinho
function updateCartCount() {
    cartCount.textContent = cartItemCount;
}

// ===== SCROLL SUAVE =====
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// ===== HEADER FIXO COM SCROLL =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#fff';
        header.style.backdropFilter = 'none';
    }
});

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar slider
    showSlide(0);
    
    // Inicializar contador do carrinho
    updateCartCount();
    
    console.log('🚀 JerseyStore carregado com sucesso!');
});

// ===== BUSCA =====
document.querySelector('.search-icon').addEventListener('click', () => {
    const searchTerm = prompt('Digite o que você está procurando:');
    if (searchTerm) {
        alert(`Busca por "${searchTerm}" - Funcionalidade em desenvolvimento!`);
    }
});


document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
    }
    
    if (e.key === 'ArrowLeft') {
        prevSlide();
    }
    if (e.key === 'ArrowRight') {
        nextSlide();
    }
});