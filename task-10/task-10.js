const cars = [
    {make:"honda", model:"accord", price: 23456},
    {make:"toyota", model:"yaris", price: 18945},
    {make:"ford", model:"focus", price: 19344},
];
const newEl= document.querySelector('.cars')
console.log(newEl)

const carsListItem = ({make, model, price})=>{
    
    return
`<li >
    <p>Производитель: ${make}</p>
    <p>Модель: ${model}</p>
    <p>Цена: ${price}</p>
   
</li>`
}
console.log(carsListItem(cars[1]))


//newEl.insertAdjacentHTML('beforeend', carsListItem)