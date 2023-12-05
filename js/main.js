// Hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#hamburger-menu').
onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

// Shopping-cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').
onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};


// Search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');


document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    e.preventDefault();
};

document.querySelector('#hamburger-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
};

// klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sp = document.querySelector('#shopping-cart-button');


// diluar side bar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
    }
    if(!sp.contains(e.target) && !shoppingCart.contains(e.target)){
        shoppingCart.classList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelectorAll('#detail-modal');
const itemDetailButton = document.querySelectorAll('.item-detail-button');

itemDetailButton.forEach((btn) =>{
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };

});


// tombol close
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};

// colose diluar modal
const modal = document.querySelector('#detail-modal');
window.onclick = (e) => {
    if (e.target === itemDetailModal){
        itemDetailModal.style.display = 'none';
    }
};
