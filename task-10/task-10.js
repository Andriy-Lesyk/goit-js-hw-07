const images = [
    {
      url:
        'https//images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ]
  const newEl = document.querySelector('ul')
  console.log(newEl)
  const newArr=[]
  images.map(image=>{
  const newLi= document.createElement('li')
  const newImg = document.createElement('img')
  newLi.append(newImg)
  newImg.src=image.url
  newArr.push(newLi)
  })
  
  newEl.append(...newArr)