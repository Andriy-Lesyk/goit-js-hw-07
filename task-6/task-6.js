const newEl = document.querySelector('input')
console.dir(newEl)
newEl.style.border = '3px solid #bdbdbd'
newEl.addEventListener('blur', onInputBlur)
function onInputBlur(){
    if(newEl.value.length===6){
        newEl.style.borderColor ='#4caf50';
    } else{
        newEl.style.borderColor = '#f44336';
}}