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


// ----------- PRODUCT VIEW -----------------
// HIEN THI PRODUCTS RA UI

// products data
const products_data = {
    'special': [
        {
            'name': 'Trà xanh sữa',
            'img_path': 'assets/img/special/tea1.jpg',
            'price': '55,000 Đ', 
        },
        {
            'name': 'Trà sữa machiato',
            'img_path': 'assets/img/special/tea2.jpg',
            'price': '50,000 Đ', 
        },
        {
            'name': 'Trà sữa Earl Gray',
            'img_path': 'assets/img/special/tea3.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'Trà sữa anh đào',
            'img_path': 'assets/img/special/tea4.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'Trà sữa truyền thống',
            'img_path': 'assets/img/special/tea5.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'Trà sữa đen',
            'img_path': 'assets/img/special/tea6.jpg',
            'price': '45,000 Đ', 
        },
    ],
    'coffee': [
        {
            'name': 'Capuchino nóng',
            'img_path': 'assets/img/coffee/coffee1.jpg',
            'price': '49,000 Đ', 
        },
        {
            'name': 'Expresso nóng',
            'img_path': 'assets/img/coffee/coffee2.jpg',
            'price': '39,000 Đ', 
        },
        {
            'name': 'Latte đá',
            'img_path': 'assets/img/coffee/coffee3.jpg',
            'price': '49,000 Đ', 
        },
        {
            'name': 'Caramel Macchiato nóng',
            'img_path': 'assets/img/coffee/coffee4.jpg',
            'price': '50,000 Đ', 
        },
        {
            'name': 'Bạc xỉu nóng',
            'img_path': 'assets/img/coffee/coffee5.jpg',
            'price': '35,000 Đ', 
        },
        {
            'name': 'Cà phê đen nóng',
            'img_path': 'assets/img/coffee/coffee6.jpg',
            'price': '30,000 Đ', 
        },
        {
            'name': 'Cà phê sữa đá',
            'img_path': 'assets/img/coffee/coffee7.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'Caramel Macchiato đá',
            'img_path': 'assets/img/coffee/coffee8.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'Americano đá',
            'img_path': 'assets/img/coffee/coffee9.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'Capuchino đá',
            'img_path': 'assets/img/coffee/coffee10.jpg',
            'price': '45,000 Đ', 
        },
    ],
    'vitamin': [
        {
            'name': 'Sinh tố dâu tây',
            'img_path': 'assets/img/vitamin/vitamin1.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'Sinh tố xoài kem',
            'img_path': 'assets/img/vitamin/vitamin2.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'Sinh tố sữa dừa',
            'img_path': 'assets/img/vitamin/vitamin3.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'sinh tố xoài',
            'img_path': 'assets/img/vitamin/vitamin4.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'sinh tố cherry',
            'img_path': 'assets/img/vitamin/vitamin5.jpg',
            'price': '40,000 Đ', 
        },
    ],
    'tea': [
        {
            'name': 'Trà chanh',
            'img_path': 'assets/img/tea/tea1.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'Trà đào bạc hà',
            'img_path': 'assets/img/tea/tea2.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'Trà đào quất',
            'img_path': 'assets/img/tea/tea3.jpg',
            'price': '40,000 Đ', 
        },
        {
            'name': 'trà quất',
            'img_path': 'assets/img/tea/tea4.jpg',
            'price': '35,000 Đ', 
        },
        {
            'name': 'trà olong kem mặn',
            'img_path': 'assets/img/tea/tea7.jpg',
            'price': '40,000 Đ', 
        },
    ],
    'fruit': [
        {
            'name': 'Nước ép dưa hấu',
            'img_path': 'assets/img/fruit/fruit1.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép cam',
            'img_path': 'assets/img/fruit/fruit2.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép táo',
            'img_path': 'assets/img/fruit/fruit3.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép dâu tây',
            'img_path': 'assets/img/fruit/fruit4.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép xoài',
            'img_path': 'assets/img/fruit/fruit5.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép ổi',
            'img_path': 'assets/img/fruit/fruit6.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép cà rốt',
            'img_path': 'assets/img/fruit/fruit7.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép cà chua',
            'img_path': 'assets/img/fruit/fruit8.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'nước ép chanh leo',
            'img_path': 'assets/img/fruit/fruit9.jpg',
            'price': '45,000 Đ', 
        },
    ],
    'yogurt': [
        {
            'name': 'sữa chua cacao',
            'img_path': 'assets/img/yogurt/yogurt1.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'sữa chua dầm hoa quả',
            'img_path': 'assets/img/yogurt/yogurt2.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'sữa chua cà phê',
            'img_path': 'assets/img/yogurt/yogurt3.jpg',
            'price': '45,000 Đ', 
        },
        {
            'name': 'sữa chua dâu',
            'img_path': 'assets/img/yogurt/yogurt4.jpg',
            'price': '45,000 Đ', 
        },
    ],
    'topping':[
        {
            'name': 'kem mặn',
            'img_path': 'assets/img/topping/topping1.jpg',
            'price': '10,000 Đ', 
        },
        {
            'name': 'thạch trà',
            'img_path': 'assets/img/topping/topping2.jpg',
            'price': '7,000 Đ', 
        },
        {
            'name': 'thạch cà phê',
            'img_path': 'assets/img/topping/topping3.jpg',
            'price': '7,000 Đ', 
        },
        {
            'name': 'trân châu mật mía',
            'img_path': 'assets/img/topping/topping4.jpg',
            'price': '10,000 Đ', 
        },
    ],
    'food':[
        {
            'name': 'hạt hướng dương',
            'img_path': 'assets/img/food/food1.jpg',
            'price': '15,000 Đ', 
        },
        {
            'name': 'mì tôm trứng',
            'img_path': 'assets/img/food/food2.jpg',
            'price': '25,000 Đ', 
        },
        {
            'name': 'ngô cay',
            'img_path': 'assets/img/food/food3.jpg',
            'price': '20,000 Đ', 
        },
        {
            'name': 'bánh sừng bò chấm sữa',
            'img_path': 'assets/img/food/food4.jpg',
            'price': '30,000 Đ', 
        },
        {
            'name': 'mì tôm trứng bò khô',
            'img_path': 'assets/img/food/food5.jpg',
            'price': '30,000 Đ', 
        },
        {
            'name': 'thịt bò khô',
            'img_path': 'assets/img/food/food6.jpg',
            'price': '25,000 Đ', 
        },
    ],
}

// call render to view
renderProductsWithBanner('special');
renderProducts('coffee');
renderProducts('vitamin');
renderProducts('tea');
renderProducts('fruit');
renderProducts('yogurt');
renderProducts('topping');
renderProductsWithBanner('food');


// FUNCTIONS HERE
// render name, price, image k co banner 
function renderProducts(category) {
    const productsContent = document.getElementById(category);
    for(let i = 0; i < products_data[category].length; i++) {
        productsContent.nextElementSibling.innerHTML +=  
        `
            <div class="col l-4">
                <div class="product__item">
                    <div class="product__img">
                        <div class="add-to-cart__noti">
                            <span class="add-to-cart__noti--text">Đã thêm sản phẩm</span>
                        </div> 
                        <img src="${products_data[category][i]['img_path']}" alt="">
                        <div class="add-to-cart" onclick='printIntoList(this);'>
                            <span class="add-to-cart__text">Thêm vào giỏ hàng</span>
                        </div> 
                    </div>     
                    <div class="product__name">${products_data[category][i]['name']}</div>      
                    <div class="product__price">${products_data[category][i]['price']}</div>                 
                </div>
            </div>
        `
    }
}

// render name, price, image cung voi banner 
function renderProductsWithBanner(category) {
    const productsContent = document.getElementById(category);
    for(let i = 0; i < products_data[category].length; i++) {
        productsContent.nextElementSibling.innerHTML +=  `
            <div class="col l-4">
                <div class="product__item">
                    <div class="product__img">
                        <span class="product__img--banner">
                            <img src="assets/img/special/new.jpg" alt="">
                        </span>
                        <div class="add-to-cart__noti">
                            <span class="add-to-cart__noti--text">Đã thêm sản phẩm</span>
                        </div> 
                        <img src="${products_data[category][i]['img_path']}" alt="">
                        <div class="add-to-cart" onclick='printIntoList(this);'>
                            <span class="add-to-cart__text">Thêm vào giỏ hàng</span>
                        </div> 
                    </div>     
                    <div class="product__name">${products_data[category][i]['name']}</div>      
                    <div class="product__price">${products_data[category][i]['price']}</div>                 
                </div>
            </div>
        `
    }
}

//  -------- CART -----------
const getAddToCart = document.querySelectorAll('.add-to-cart')
const getCartTotal = document.querySelector('.cart__number span')
const getCartList = document.querySelector('.cart__list');
const getCart = document.querySelector('.cart');
const getProductItems = document.querySelectorAll('.product__item');

// tat bat gio hang
const getBuyProductsBtn = document.querySelector('.cart__list--btn');
getCart.onclick = function() {
    getCartList.classList.toggle('active-cart-list');
    checkCartEmpty(); 
    if(getCartList.classList.contains('active-cart-list')) {
        calculateTotalProduct();
        buyButton();
    } else {
        getBuyProductsBtn.classList.remove('active-cart-list')
    }
} 

// khi bam vao list ben trong k bi tat
// vi cartList la children cua cart nen se toggle 2 lan => van se o trang thai active
getCartList.onclick = function () {
    getCartList.classList.toggle('active-cart-list');
}

// FUNCTIONS HERE

function printIntoList(product) {
    activeCart();
    addToCartNoti(product.previousElementSibling.previousElementSibling);
    getCartList.appendChild(renderProductsToHTML(product.parentElement.nextElementSibling.textContent));
    checkProducts();
    checkInput();
    scrollBarForList();
    calculateTotalProduct();
    if(getCartList.classList.contains('active-cart-list')) {
        calculateTotalProduct();
        buyButton();  
    } else {
        getBuyProductsBtn.classList.remove('active-cart-list')
    }
}

// render cac product dc chon ra html 
function renderProductsToHTML(productsName) { // name list
    const createLi = document.createElement('li');
    createLi.setAttribute('class', 'cart__list--item');
    const createSpan = document.createElement('span');
    createSpan.setAttribute('class', 'item__name');
    const createDiv1 = document.createElement('div');
    createDiv1.setAttribute('class', 'item__amount');
    const createDiv2 = document.createElement('div');
    createDiv2.setAttribute('class', 'item__sub');
    createDiv2.setAttribute('onclick','sub(this)')
    const createInput = document.createElement('input');
    createInput.setAttribute('type', 'text');
    createInput.setAttribute('maxlength', '2');
    createInput.setAttribute('class', 'item__count');
    createInput.setAttribute('value', '1');
    const createDiv3 = document.createElement('div');
    createDiv3.setAttribute('onclick', 'add(this)');
    createDiv3.setAttribute('class', 'item__plus');
    const createDiv4 = document.createElement('div');
    createDiv4.setAttribute('onclick', 'deleteProduct(this)');
    createDiv4.setAttribute('class', 'item__close');
    const createIcon = document.createElement('i');
    createIcon.setAttribute('class', 'fa-solid fa-xmark');

    createLi.appendChild(createSpan);
    createSpan.appendChild(document.createTextNode(productsName));
    createLi.appendChild(createDiv1);
    createDiv1.appendChild(createDiv2);
    createDiv2.appendChild(document.createTextNode('-'))
    createDiv1.appendChild(createInput);
    createDiv1.appendChild(createDiv3)
    createDiv3.appendChild(document.createTextNode("+"));
    createLi.appendChild(createDiv4);
    createDiv4.appendChild(createIcon);

    return createLi;
}

// kiem tra so luong product nhap vao co hop le k
function checkInput() {
    const getInputAmount = document.querySelectorAll('.item__count');
    for(let i = 0; i < getInputAmount.length; i++) {
        getInputAmount[i].oninput = function() {
            if(isNaN(getInputAmount[i].value)) {
                getInputAmount[i].value = "";
            }
        }
    
        getInputAmount[i].onchange = function() {
            // khi khong nhap gi se gan so san pham la 1
            if(getInputAmount[i].value.length < 1) {
                getInputAmount[i].value = 1;
            }
            const getLayout = document.querySelector(".layout");
            // neu so san pham dc nhap tren 50 se dua r thong bao
            if(getInputAmount[i].value > 50) {
                const getMaxProductsNoti = document.querySelector(".maxProducts");
                getMaxProductsNoti.style.transform = "scale(1)";
                getLayout.style.display = 'block';
                const getMaxProductsNotiBtnYes = getMaxProductsNoti.querySelector(".maxProducts__btn--yes");
                getMaxProductsNotiBtnYes.onclick = function() {
                    getMaxProductsNoti.style.transform = "scale(0)";
                    getInputAmount[i].value = 50;
                    getLayout.style.display = 'none';
                    calculateTotalProduct();
                }
                const getMaxProductsNotiBtnNo = getMaxProductsNoti.querySelector(".maxProducts__btn--no");
                getMaxProductsNotiBtnNo.onclick = function() {
                    getMaxProductsNoti.style.transform = "scale(0)";
                    getInputAmount[i].value = 1;
                    getLayout.style.display = 'none';
                    calculateTotalProduct();
                }
            }

            // neu so san pham duoc nhap = 0 se dua ra thong bao
            if(getInputAmount[i].value == 0) {
                const getChooseDeleteNoti = document.querySelector('.chooseDelete');
                getChooseDeleteNoti.style.transform = 'scale(1)';
                getLayout.style.display = 'block';
                const getChooseDeleteNotiBtnYes = getChooseDeleteNoti.querySelector(".chooseDelete__btn--yes");
                getChooseDeleteNotiBtnYes.onclick = function() {
                    getChooseDeleteNoti.style.transform = 'scale(0)';
                    getLayout.style.display = 'none';
                    getInputAmount[i].parentElement.parentElement.remove();
                    calculateTotalProduct();
                    buyButton();
                    checkCartEmpty();
                }
                const getChooseDeleteNotiBtnNo = getChooseDeleteNoti.querySelector(".chooseDelete__btn--no");
                getChooseDeleteNotiBtnNo.onclick = function() {
                    getChooseDeleteNoti.style.transform = 'scale(0)';
                    getLayout.style.display = 'none';
                    getInputAmount[i].value = 1;
                    calculateTotalProduct();
                }
            }
            calculateTotalProduct();
        }
    }
}

function checkProducts() {
    const getItemsName = document.querySelectorAll('.item__name');
    for(let i = 0; i < getItemsName.length; i++) {
        if(getItemsName[i].textContent.toLowerCase().localeCompare("Bạn Chưa Thêm Sản Phẩm Nào Vào Giỏ Hàng".toLowerCase()) == 0) {
            getItemsName[i].parentElement.remove();
        }

        // neu ton tai product trong list roi thi se dua ra thong bao
        for(let j = i + 1; j < getItemsName.length; j++) {
            if(getItemsName[i].textContent.toLowerCase().localeCompare(getItemsName[j].textContent.toLowerCase()) == 0) {
                getItemsName[j].parentElement.remove();
                const getIsAddedNoti = document.querySelector(".isAdded");
                const getIsAddedClose = getIsAddedNoti.querySelector(".isAdded__close");
                const getLayout = document.querySelector(".layout");
                getIsAddedClose.onclick = function() {
                    getIsAddedNoti.style.transform = "scale(0)";
                    getLayout.style.display = "none";
                }
                getLayout.onclick = function() {
                    getLayout.style.display = "none";
                    getIsAddedNoti.style.transform = "scale(0)";
                }
                getIsAddedNoti.style.transform = "scale(1)";
                getLayout.style.display = "block";
            }
        }
    }
    
}

// add more product amount
function add(value) {
    if(~~value.previousElementSibling.value < 50) {
        ~~value.previousElementSibling.value++;
    }
    calculateTotalProduct();
}

// sub product amount
function sub(value) {
    if(~~value.nextElementSibling.value > 1) {
        ~~value.nextElementSibling.value--;
    }
    calculateTotalProduct();
}


// tinh tong so san pham dc them 
function calculateTotalProduct() {
    const getInputAmount = document.querySelectorAll('.item__count');
    let total = 0;
    for(let i = 0; i < getInputAmount.length; i++) {
        total += ~~getInputAmount[i].value;
    }
    getCartTotal.textContent = total;
}

// kiem tra neu nhu k co san pham trong cart se in ra tbao
function checkCartEmpty() {
    if(getCartList.children.length == 0) {
        getCartList.innerHTML = 
        `        
        <li class="cart__list--item">
            <div class="item__name">Bạn chưa thêm sản phẩm nào vào giỏ hàng</div>      
        </li>
        `
    }
}

// them scroll bar neu nhu list qua dai
function scrollBarForList() {
    if(getCartList.offsetHeight < 220) {
        getCartList.style.overflowY = 'unset';
    } else {
        getCartList.style.overflowY = 'scroll';
    }
}

// xoa product ra khoi list
function deleteProduct(product) {
    product.parentElement.remove();
    calculateTotalProduct()
}

// khi them san pham se nhay den
function activeCart() {
    getCart.classList.add('active-cart');
    setTimeout(() => {
        getCart.classList.remove('active-cart');
    }, 250);
}

// khi them vao gio hang thanh cong se dua ra  thong bao
function addToCartNoti(noti) {
    noti.classList.add('add-to-cart__noti--active');
    setTimeout(() => {
        noti.classList.remove('add-to-cart__noti--active');
    }, 1500);
}

// thanh toan cac san pham
function buyButton() {
    const getBuyBtn = document.querySelector('.cart__list--btn');
    if(~~getCartTotal.textContent > 0) {
        getBuyBtn.classList.add('active-cart-list');
    } else {
        getBuyBtn.classList.remove('active-cart-list');
    }
}

function buyProducts() {
    const getInputAmount = document.querySelectorAll('.item__count');
    const getBuyProductsNoti = document.querySelector('.buyProductsNoti');
    const getLayout = document.querySelector('.layout')
    let totalProducts = 0;
    for(let i = 0; i < getInputAmount.length; i++) {
        totalProducts += ~~getInputAmount[i].value;
    }
    getBuyProductsNoti.innerHTML = 
    `
        <div class="buyProductsNoti__text">
            <p>Bạn có muốn thanh toán ${totalProducts} sản phẩm?</p>
        </div>
        <button class="btn buyProductsNoti__btn--yes">Đồng ý</button>
        <button class="btn buyProductsNoti__btn--no">Không</button>
    `
    getBuyProductsNoti.style.transform = 'scale(1)';
    getLayout.style.display = 'block';
    const getBuyProductsNotiYes = document.querySelector('.buyProductsNoti__btn--yes');
    const getBuyProductsNotiNo = document.querySelector('.buyProductsNoti__btn--no');
    getBuyProductsNotiYes.onclick = function() {
        getBuyProductsNoti.innerHTML = 
        `
            <div class="buyProductsNoti__text">
                <p>Thanh toán thành công!</p>
            </div>
        `
        setTimeout(function() {
            getBuyProductsNoti.style.transform = 'scale(0)';
            getLayout.style.display = 'none';
        }, 700)
        getCartList.innerHTML = 
        `        
        <li class="cart__list--item">
            <div class="item__name">Bạn chưa thêm sản phẩm nào vào giỏ hàng</div>      
        </li>
        `
        calculateTotalProduct();
        buyButton();
        
    }

    getBuyProductsNotiNo.onclick = function() {
        getBuyProductsNoti.style.transform = 'scale(0)';
        getLayout.style.display = 'none';
    }
} 

