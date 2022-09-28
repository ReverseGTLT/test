let mobile = document.querySelector('#mobile');
let button = document.querySelector('#button');
let navList = document.querySelector('#navList');
let mobileClose = document.querySelector('#mobileClose');
button.addEventListener('click', function () {
    mobile.classList.add('mobile-open');
    navList.classList.add('mobile-vision');
    mobileClose.classList.add('vision');
})

mobileClose.addEventListener('click', function () {
    mobile.classList.remove('mobile-open');
    navList.classList.remove('mobile-vision');
    mobileClose.classList.remove('vision');
})

let listUl = document.querySelectorAll('.header-navbar__list > .list-item');
for (let mobileLink of listUl) {
    button.addEventListener('click', function () {
        mobileLink.classList.add('mobile');
    })
    mobileClose.addEventListener('click', function () {
        mobileLink.classList.remove('mobile');
    })
}

let listLi = document.querySelectorAll('.list-item__link');
for (let linkMobile of listLi) {
    button.addEventListener('click', function () {
        linkMobile.classList.add('link-hover');
    })
    mobileClose.addEventListener('click', function () {
        linkMobile.classList.remove('link-hover');
    })
}


