document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');
    let searchForm = document.querySelector('.search-form');
    let cartItemsContainer = document.querySelector('.cart-items-container');
  
    document.querySelector('#menu-btn').onclick = () => {
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
        cartItemsContainer.classList.remove('active');
    };
  
    document.querySelector('#search-btn').onclick = () => {
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
        cartItemsContainer.classList.remove('active');
    };
  
    document.querySelector('#cart-btn').onclick = () => {
        cartItemsContainer.classList.toggle('active');
        navbar.classList.remove('active');
        searchForm.classList.remove('active');
    };
});

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItemsContainer = document.querySelector('.cart-items-container');

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItemsContainer.classList.remove('active');
};


