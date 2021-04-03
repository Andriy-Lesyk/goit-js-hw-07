let counterValue=0;
const newEl = document.querySelectorAll('button')
const newElSpan = document.querySelector('span')

function increment(){counterValue+=1; newElSpan.textContent=counterValue}
    newEl[1].addEventListener('click', increment );
    

function decrement(){counterValue-=1;newElSpan.textContent=counterValue};
    newEl[0].addEventListener('click', decrement)
    


