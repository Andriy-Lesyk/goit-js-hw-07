const cars = [
    {make:"honda", model:"accord", price: 23456},
    {make:"toyota", model:"yaris", price: 18945},
    {make:"ford", model:"focus", price: 19344},
];
const newEl= document.querySelector('.cars')
console.log(newEl)

const carsListItem =(cars) =>{
 return ` 
  
<li >
    <p>Производитель: ${cars.make}</p>
    <p>Модель: ${cars.model}</p>
    <p>Цена: ${cars.price}</p>
   
</li>`;

};

const markup = cars.map(carsListItem).join('')
console.log(markup);


newEl.insertAdjacentHTML('beforeend', markup)