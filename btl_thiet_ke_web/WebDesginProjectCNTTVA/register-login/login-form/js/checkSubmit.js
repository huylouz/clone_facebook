const getInputName = document.querySelector('.form-input.name');
const getInputPass = document.querySelector('.form-input.pass');
const getFormGroups = document.querySelectorAll('.form-group');
const getInputs = document.querySelectorAll('.form-input');

function check_submit() { // kiểm tra tài khoản đã đâng kí
    const name = getInputName.value;
    const pass = getInputPass.value;
    const register_name = localStorage.getItem('name');
    const register_pass = localStorage.getItem('pass');
    if(name === register_name && pass === register_pass) {
        localStorage.setItem('isSubmitted', 'true');
        window.location.pathname = "./main/index.html";
    } 
 
    if(name !== register_name) {
        getFormGroups[0].classList.add('warning');
        getInputName.value = '';
        getInputName.placeholder = 'Tên đăng nhập không tồn tại';
    }
    
    if(pass !== register_pass) {
        getFormGroups[1].classList.add('warning');
        getInputPass.value = '';
        getInputPass.placeholder = 'Mật khẩu không chính xác';
    }

    return false;
}

getInputs.forEach(function(input, index) {
    const placeholders = ['Tên đăng nhập', 'Mật khẩu'];
    input.onkeydown = function () {  
        if(getFormGroups[index].classList.contains('warning')) {
            input.placeholder = placeholders[index];
            getFormGroups[index].classList.remove('warning');
        }
    }
});
