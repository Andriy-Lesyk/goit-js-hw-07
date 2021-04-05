const newEl = document.querySelector('input')
console.log(newEl)
const btns = document.querySelectorAll('button')
console.log(btns)
const boxes = document.querySelector('#boxes')
console.log(boxes) 


btns[0].addEventListener('click', createBoxes );

function createBoxes(amounts) {
    amounts = newEl.value;
    for(let i=1; i<=amounts; i+=1){
        let amount = document.createElement('div')
        let width = 30 
        let hight = 30 
        amount.width = width + 10
        amount.hight = hight + 10
        amount.backgroundColor = (`${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`)
    
    boxes.appendChild(amount)
    }   
}  
btns[1].addEventListener('click', destroyBoxes());

function destroyBoxes(){
    boxes.innerHTML=''
    newEl.value=''
}