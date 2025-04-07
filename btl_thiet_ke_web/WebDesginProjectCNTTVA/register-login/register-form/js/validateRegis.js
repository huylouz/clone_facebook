const getFormGroups = document.querySelectorAll('.form-group');
const user_name = document.getElementById("user-name");
const regex_name = /^[^\d+]*[\d+]{0}[^\d+]*$/;
const phone = document.getElementById("user-phone");
const regex_phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const email = document.getElementById("user-email");
const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const pass = document.getElementById("user-pass");
const regex_pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const confirm_pass = document.getElementById("confirm-pass");
const getInputs = document.querySelectorAll('.form-input');

function register_validate() {
    // check user name
    if(!regex_name.test(user_name.value)) {
        getFormGroups[0].classList.add('warning');
        user_name.value = '';
        user_name.placeholder = 'Tên đăng nhập không hợp lệ';
    }
        
    // check user phone
    if(!regex_phone.test(phone.value)) {
        getFormGroups[1].classList.add('warning');
        phone.value = '';
        phone.placeholder = 'SĐT không hợp lệ';
        console.log(getFormGroups[1]);
    }
    
    // check email
    if(!regex_email.test(email.value)) {
        getFormGroups[2].classList.add('warning');
        email.value = '';
        email.placeholder = 'Email không hợp lệ';
    }
    
    // check pass
    if(!regex_pass.test(pass.value)) {
        getFormGroups[3].classList.add('warning');
        pass.value = '';
        pass.placeholder = 'Mật khẩu không hợp lệ';
    }
    
    // check confirm
    if(confirm_pass.value != pass.value) {
        getFormGroups[4].classList.add('warning');
        confirm_pass.value = '';
        confirm_pass.placeholder = 'Mật khẩu không trùng khớp';
    }
    

    if(regex_pass.test(pass.value) && regex_email.test(email.value)  && regex_phone.test(phone.value) && regex_name.test(user_name.value) && pass.value == confirm_pass.value) {
        localStorage.setItem('name',  user_name.value);
        localStorage.setItem('pass',  pass.value);
        localStorage.setItem('phone',  phone.value);
        localStorage.setItem('email',  email.value);
        window.location.pathname = "./register-login/login-form/login.html";
    } 
    return false;
} 

getInputs.forEach(function(input, index) {
    const placeholders = ['VD: Nguyen Van A', 'Số điện thoại', 'VD: admin@gmail.com', "Mật khẩu", "Xác nhận mật khẩu"];
    input.onkeydown = function () {  
        if(getFormGroups[index].classList.contains('warning')) {
            input.placeholder = placeholders[index];
            getFormGroups[index].classList.remove('warning');
        }
    }
});





