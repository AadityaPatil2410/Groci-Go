let searchForm =document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    
}

let shopping =document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shopping.classList.toggle('active');
    
}