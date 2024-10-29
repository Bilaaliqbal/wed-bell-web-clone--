const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3.5,
    spaceBetween: 10,
    


    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});   


document.addEventListener("DOMContentLoaded", function() {
    let searchbar = document.querySelector('.hover-searchbar');
    let icon = document.querySelector('.search-bar');
    let closebar = document.querySelector('.close-icon');
    let carticon = document.querySelector('.cart')
    let nav3 = document.querySelector('#nav-three');
    let navFour = document.querySelector('#education-store');
    let support = document.querySelector("#support");
    let supportPage = document.querySelector('.support');
    function opensearch() {
        searchbar.style.display = 'flex';
        searchbar.classList.add('show');
        searchbar.classList.remove('hide');
        searchbar.style.animation = "slideIn 0.5s forwards";
    }
    function closesearch(){
        searchbar.classList.add('show');
        searchbar.classList.remove('hide');
        searchbar.style.animation = "slideOut 0.5s forwards";
        setTimeout (() => {
            searchbar.style.display = "none";
        },500);
    }
    function openshop() {
        nav3.style.animation = "slideIn 0.5s forwards";
        nav3.style.display = 'flex';
    }
    function closeshop () {
        nav3.style.display = 'none';
    }
    function opensupport () {
        supportPage.style.display = "flex";
        supportPage.style.animation = "slideIn 0.5s forwards";
    }
    function closesupport() {
        supportPage.style.display = "none"
    }

    icon.addEventListener('click', opensearch);
    closebar.addEventListener('click',closesearch);
    carticon.addEventListener('mouseover',openshop);
    navFour.addEventListener('mouseover',closeshop);
    support.addEventListener('mouseover',opensupport)
    navFour.addEventListener('mouseover',closesupport)
    icon.addEventListener('mouseover',closesupport)
    icon.addEventListener('mouseover',closeshop)
});

document.getElementById("input").addEventListener('keyup',function(){
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('.input-items div');
    const inputContainer =document.querySelector('.input-items');
    if(searchTerm.trim()===''){
        inputContainer.style.display='none';
    }else{
        inputContainer.style.display='flex';
    }
    items.forEach (item => {
    const itemName = item.querySelector('h5').textContent.toLowerCase();
    if (itemName.includes(searchTerm)){
        item.style.display = "flex";
    }else{
        item.style.display = "none";
    };
    });
});