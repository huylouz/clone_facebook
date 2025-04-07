const getUserLinkSubMenus = document.querySelectorAll('.menu__user-link .sub-menu');
const getLogOut = document.querySelector('.menu__user-link .sub-menu.log-out li');

// dang xuat tkhoan
getLogOut.onclick = function() {
    localStorage.setItem('isSubmitted', 'false');
    alert("Bạn đã đăng xuất vui lòng đăng nhập tài khoản!");
} 

if(localStorage.getItem('isSubmitted') == 'true') {
    getUserLinkSubMenus[0].classList.remove('appear');
    getUserLinkSubMenus[1].classList.add('appear');
} else {
    getUserLinkSubMenus[1].classList.remove('appear');
    getUserLinkSubMenus[0].classList.add('appear');
}
