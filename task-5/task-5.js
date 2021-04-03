const form = document.querySelector('#name-input')
const newElSpan = document.querySelector('span')
console.dir(form)
form.addEventListener('input', ()=> {
    newElSpan.textContent=form.value;
    if (form.value.length===0){
        newElSpan.textContent="незнакомец"
    }
})