const newEl = document.querySelector('input')
const newSpan = document.querySelector('span')

newEl.addEventListener('input', ()=>{
  newSpan.style.fontSize=newEl.value + 'px';
});