let img = document.querySelector('img');
let btn1 = document.querySelector('#before');
let btn2 = document.querySelector('#next');

btn1.addEventListener('click', () => {
    img.src = './resources/photo1.jpg'
})

btn2.addEventListener('click', () => {
    img.src ='./resources/photo2.jpg'
})
