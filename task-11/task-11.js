const newEl = document.querySelector('input')
console.log(newEl)
const btns = document.querySelectorAll('button')
console.log(btns[1])
const boxes = document.querySelector('#boxes')
console.log(boxes) 


btns[0].addEventListener('click', createBoxes );

function createBoxes(amount) {
    let width = 30
    let height = 30
    amount = newEl.value
    for(let i=1; i<=amount; i+=1){
        let newDiv = document.createElement('div') 
        console.log(newDiv)
        newDiv.height = height + 10
        newDiv.width = width + 10 
        newDiv.backgroundColor = (`${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`)
        boxes.appendChild(newDiv)   
        console.log(boxes)
}}
    
btns[1].addEventListener('click', destroyBoxes);

function destroyBoxes(){
    const newOne = boxes.querySelector('div')
    console.log(newOne)
    boxes.innerHTML=''
    console.log(boxes)
    newEl.value=''
}