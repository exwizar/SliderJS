const images = document.querySelector('.slider-line__img'),
    sliderLine = document.querySelector('.slider-line'),
    slider = document.querySelector('.slider');

let offset = 0


document.querySelector('.slider-next').addEventListener('click', () => {
    offset += 904
    if (offset > 2712) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.slider-back').addEventListener('click', () => {
    offset -= 904
    if (offset < 0) {
        offset = 2712
    }
    sliderLine.style.left = -offset + 'px'
})
