const swiperElement = document.querySelector('.swiper')
let swiper

function checkSwiper() {
  if (window.innerWidth >= 768) {
    swiperElement.style.display = 'none'

    if (swiper) {
      swiper.destroy(true, true)
      swiper = null
    }
  } else {
    swiperElement.style.display = 'block'

    if (!swiper) {
      swiper = new Swiper('.swiper', {
        breakpoints: {
          490: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      })
    } else {
      swiper.update()
    }
  }
}

window.addEventListener('resize', checkSwiper)
checkSwiper()

const menuBtn = document.querySelector('.menu__button')
const menu = document.querySelector('.menu__list')
const menuText = menuBtn.querySelector('.menu__button-text')
const menuBtnIcon = menuBtn.querySelector('.menu__button-icon')
menuBtn.addEventListener('click', function () {
  if (menu.classList.toggle('active')) {
    menuText.textContent = 'Скрыть'
    menuBtnIcon.style.transform = 'rotate(180deg)'
  } else {
    menuText.textContent = 'Показать все'
    menuBtnIcon.style.transform = 'rotate(0deg)'
  }
})
