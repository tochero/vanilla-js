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

            if (count == 0) {
                document.body.style.backgroundColor = 'red';
            }
        }
        if (styles.contains('reset')) {
            count = 0;
            value.textContent = count;
            if (count == 0) {
                document.body.style.backgroundColor = 'red'; 
            }
        } 
        if (styles.contains('increase')) {
            count += 1;
            value.textContent = count;
            if (count>0) {
                document.body.style.backgroundColor = 'blue';
            }
            if (count==0) {
                document.body.style.backgroundColor = 'red';
            }
        } 


        
    })
});