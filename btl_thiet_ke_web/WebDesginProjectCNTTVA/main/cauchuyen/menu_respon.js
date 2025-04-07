const getLayout = document.querySelector('.layout');
const menuMobile = document.querySelector('.menu-mobile__list--main');
const getMobileMenu = document.querySelector('.menu-mobile__list--bars i');

getMobileMenu.onclick = function() {
    if(getMobileMenu.classList.contains('fa-bars')) {
        getLayout.style.display = 'block';
        getLayout.style.opacity= '0.9';
        menuMobile.style.transform = 'translateX(0)';
        menuMobile.style.opacity = '1';
        getMobileMenu.classList.add('fa-xmark');
        getMobileMenu.classList.remove('fa-bars');
    } else if(getMobileMenu.classList.contains('fa-xmark')){
        getLayout.style.display = 'none';
        getLayout.style.opacity= '0';
        menuMobile.style.transform = 'translateX(-100%)';
        menuMobile.style.opacity = '0';
        getMobileMenu.classList.add('fa-bars');
        getMobileMenu.classList.remove('fa-xmark');
    }
}

getLayout.onclick = function(){
    getLayout.style.display = 'none';
    getLayout.style.opacity = '0';
    menuMobile.style.opacity = '0';
    menuMobile.style.transform = 'translateX(-100%)';
    getMobileMenu.classList.add('fa-bars');
    getMobileMenu.classList.remove('fa-xmark');
}

