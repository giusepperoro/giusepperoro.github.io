const slider = document.querySelector('#slider')
const next = document.querySelector('.right')
const prev = document.querySelector('.left')
const news = document.querySelector('#news')
const products = document.querySelector('#products')
const screenWidth = window.screen.width

if(screenWidth <= 1280) {products.addEventListener('click', (event) => {
    event.preventDefault()    
})}

let i = 1;

next.addEventListener('click', () => {

    i++
    slider.style.background = `url('img/slides/slide-${i}.jpg')`

    if (i > 2) {
        news.style.marginLeft = 0 + 'px'
        news.style.marginRight = 39.06 + 'vw'
    } else {
        news.style.marginRight = 0 + 'px'
        news.style.marginLeft = 39.06 + 'vw'
    }

    if (i > 4) {
        i = 1
        news.style.marginRight = 0 + 'px'
        news.style.marginLeft = 39.06 + 'vw'
        slider.style.background = `url('img/slides/slide-1.jpg')`
    }

})

prev.addEventListener('click', () => {

    i--
    slider.style.background = `url('img/slides/slide-${i}.jpg')`

    if (i < 3) {
        news.style.marginRight = 0 + 'px'
        news.style.marginLeft = 39.06 + 'vw'
    } else {
        news.style.marginLeft = 0 + 'px'
        news.style.marginRight = 39.06 + 'vw'
    }

    if(i < 1) {
        i = 4
        news.style.marginLeft = 0 + 'px'
        news.style.marginRight = 39.06 + 'vw'
        slider.style.background = `url('img/slides/slide-4.jpg')` 
    }

})

// let j = 1

// interval = setInterval(() => {

//     slider.addEventListener('mouseover', () => {
//         clearInterval()
//     })

//     j++

//     slider.style.background = `url('img/slides/slide-${j}.jpg')`

//     if (j > 2) {
//         news.style.marginLeft = 0 + 'px'
//         news.style.marginRight = 500 + 'px'
//     } else {
//         news.style.marginRight = 0 + 'px'
//         news.style.marginLeft = 500 + 'px'
//     }

//     if (j > 4) {
//         j = 1
//         news.style.marginRight = 0 + 'px'
//         news.style.marginLeft = 500 + 'px'
//         slider.style.background = `url('img/slides/slide-1.jpg')`
//     }

// }, 3000)