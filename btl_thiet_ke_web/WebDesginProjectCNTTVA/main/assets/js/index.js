const getUserLinkSubMenus = document.querySelectorAll('.menu__user-link .sub-menu');
const getLogOut = document.querySelector('.menu__user-link .sub-menu.log-out li');
const getToast = document.getElementById('toast');
const getToastClose = getToast.querySelector('.toast__close');
const getToastName = getToast.querySelector('.toast__msg');

getLogOut.onclick = function() {
    localStorage.setItem('isSubmitted', 'false');
    alert("Bạn đã đăng xuất vui lòng đăng nhập tài khoản!");
} 

getToastClose.onclick = function() {
    Object.assign(getToast.style, {
        'animation': 'HDtoBlur 0.5s linear',
        'transform': 'translateX(100%)'
     });
}

getToastName.innerHTML = localStorage.getItem('name');

if(localStorage.getItem('isSubmitted') == 'true') {
    getUserLinkSubMenus[0].classList.remove('appear');
    getUserLinkSubMenus[1].classList.add('appear');
     Object.assign(getToast.style, {
        'animation': 'blurToHD 0.5s linear',
        'transform': 'translateX(0)'
     });
    setTimeout(function() {
        Object.assign(getToast.style, {
            'animation': 'HDtoBlur 0.5s linear',
            'transform': 'translateX(100%)'
         });
    }, 2800);  
} else {
    getUserLinkSubMenus[1].classList.remove('appear');
    getUserLinkSubMenus[0].classList.add('appear');
}

