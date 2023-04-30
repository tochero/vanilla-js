const btnToggle = document.querySelector('.btn-toggle');
const btnControl = document.querySelector('.btn-control');
const btnHide =document.querySelector('.btn-hide');

btnToggle.addEventListener('click', ()=>{
     btc = btnControl.classList;
    if (btc.contains('remove-aside')) {
        btc.remove('remove-aside');
    }
});
btnHide.onclick = ()=>{
    btnControl.classList.add('remove-aside')
}



