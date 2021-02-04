
let mainNav = document.querySelector('.topnav');
let navBarToggle = document.getElementById('js-navbar-toggle');
let btn = document.getElementById('btn');


navBarToggle.addEventListener('click', function () {
    if (btn.classList.contains('fa-bars')) {
        mainNav.style.display = 'block';
        btn.classList.remove('fa-bars');
        btn.classList.add('fa-times');
    } else {
        mainNav.style.display = 'none';
        btn.classList.remove('fa-times');
        btn.classList.add('fa-bars');
    }
    document.getElementById('1').onclick = reply_click;
    document.getElementById('2').onclick = reply_click;
    document.getElementById('3').onclick = reply_click;
    document.getElementById('4').onclick = reply_click;
    document.getElementById('5').onclick = reply_click;

    function reply_click(){
        mainNav.style.display = 'none';
        btn.classList.remove('fa-times');
        btn.classList.add('fa-bars');
    }
});
