const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color =document.getElementById('color');

btn.addEventListener('click', ()=>{
    let prefix = '#';

    let randomNumber = () =>{
       return Math.floor(Math.random()*hex.length)
    }
    
    for (let i = 0; i < 6; i++) {
           prefix += hex[randomNumber()]
    }

    document.body.style.backgroundColor = prefix;
    color.textContent = prefix;

})