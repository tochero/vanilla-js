let count = 0;

const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
    btn.addEventListener('click', (e)=>{
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
            document.body.style.backgroundColor = 'fuchsia'
            value.textContent = count;
        }
        if (styles.contains('reset')) {
            count = 0;
            value.textContent = count;
            document.body.style.backgroundColor = 'green';
        } 
        if (styles.contains('increase')) {
            count += 1;
            value.textContent = count;
            document.body.style.backgroundColor = 'blue';
        } 


        
    })
});