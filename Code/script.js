let flag = true;
function toggle() {
    document.querySelector('main section:last-of-type form span i').classList.toggle('fa-eye');
    document.querySelector('main section:last-of-type form span i').classList.toggle('fa-eye-slash');
    if (flag) {
        document.querySelector('main section:last-of-type form span:last-of-type input').setAttribute('type', 'text');
    } else {
        document.querySelector('main section:last-of-type form span:last-of-type input').setAttribute('type', 'password');
    }
    flag = !flag;
}