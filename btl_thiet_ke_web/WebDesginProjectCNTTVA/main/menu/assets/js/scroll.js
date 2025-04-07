$(document).ready(function () {

    // khi bam vao menu trang se scroll den title dc bam
    $('.link-special').click(function (e) { 
       $('html,body').animate({
            scrollTop: $('#special').offset().top
       });
    });

    $('.link-coffee').click(function (e) { 
        $('html,body').animate({
             scrollTop: $('#coffee').offset().top
        });
    });

    $('.link-tea').click(function (e) { 
        $('html,body').animate({
             scrollTop: $('#tea').offset().top
        });
    });

    $('.link-fruit').click(function (e) { 
        $('html,body').animate({
             scrollTop: $('#fruit').offset().top
        });
    });

    $('.link-yogurt').click(function (e) { 
        $('html,body').animate({
             scrollTop: $('#yogurt').offset().top
        });
    });

    $('.link-topping').click(function (e) { 
        $('html,body').animate({
             scrollTop: $('#topping').offset().top
        });
    });

    $('.link-food').click(function (e) { 
        $('html,body').animate({
             scrollTop: $('#food').offset().top
        });
    });

    $('.link-vitamin').click(function (e) { 
        $('html,body').animate({
             scrollTop: $('#vitamin').offset().top
        });
    });

});

const getContent = document.querySelector('body');
const getSpecial = document.getElementById('special');
const getCoffee = document.getElementById('coffee');
const getVitamin = document.getElementById('vitamin');
const getTea = document.getElementById('tea');
const getFruit = document.getElementById('fruit');
const getYogurt = document.getElementById('yogurt');
const getTopping = document.getElementById('topping');
const getFood = document.getElementById('food');
const getMenu = document.querySelectorAll('.content-menu__items');
getContent.onscroll = function() {
    if(getSpecial.offsetTop - 25 <= window.pageYOffset && window.pageYOffset < getSpecial.offsetTop + getSpecial.parentElement.offsetHeight) {
        getMenu[0].style.color = "#ad661f";
        getMenu[0].style.setProperty('--display', 'block');
  
    } else {
        getMenu[0].style.color = "#232323";
        getMenu[0].style.setProperty('--display', 'none');
    }

    if(getCoffee.offsetTop - 25  <= window.pageYOffset && window.pageYOffset < getCoffee.offsetTop + getCoffee.parentElement.offsetHeight) {
        getMenu[1].style.color = "#ad661f";
        getMenu[1].style.setProperty('--display', 'block');
    } else {
        getMenu[1].style.color = "#232323";
        getMenu[1].style.setProperty('--display', 'none');
    }

    if(getVitamin.offsetTop - 25  <= window.pageYOffset && window.pageYOffset < getVitamin.offsetTop + getVitamin.parentElement.offsetHeight) {
        getMenu[2].style.color = "#ad661f";
        getMenu[2].style.setProperty('--display', 'block');
    } else {
        getMenu[2].style.color = "#232323";
        getMenu[2].style.setProperty('--display', 'none');
    }

    if(getTea.offsetTop - 25  <= window.pageYOffset && window.pageYOffset < getTea.offsetTop + getTea.parentElement.offsetHeight) {
        getMenu[3].style.color = "#ad661f";
        getMenu[3].style.setProperty('--display', 'block');
    } else {
        getMenu[3].style.color = "#232323";
        getMenu[3].style.setProperty('--display', 'none');
    }

    if(getFruit.offsetTop - 25  <= window.pageYOffset && window.pageYOffset < getFruit.offsetTop + getFruit.parentElement.offsetHeight) {
        getMenu[4].style.color = "#ad661f";
        getMenu[4].style.setProperty('--display', 'block');
    } else {
        getMenu[4].style.color = "#232323";
        getMenu[4].style.setProperty('--display', 'none');
    }

    if(getYogurt.offsetTop - 25  <= window.pageYOffset && window.pageYOffset < getYogurt.offsetTop + getYogurt.parentElement.offsetHeight) {
        getMenu[5].style.color = "#ad661f";
        getMenu[5].style.setProperty('--display', 'block');
    } else {
        getMenu[5].style.color = "#232323";
        getMenu[5].style.setProperty('--display', 'none');
    }

    if(getTopping.offsetTop - 25  <= window.pageYOffset && window.pageYOffset < getTopping.offsetTop + getTopping.parentElement.offsetHeight) {
        getMenu[6].style.color = "#ad661f";
        getMenu[6].style.setProperty('--display', 'block');
    } else {
        getMenu[6].style.color = "#232323";
        getMenu[6].style.setProperty('--display', 'none');
    }

    if(getFood.offsetTop - 25  <= window.pageYOffset && window.pageYOffset < getFood.offsetTop + getFood.parentElement.offsetHeight) {
        getMenu[7].style.color = "#ad661f";
        getMenu[7].style.setProperty('--display', 'block');
    } else {
        getMenu[7].style.color = "#232323";
        getMenu[7].style.setProperty('--display', 'none');
    }

}



