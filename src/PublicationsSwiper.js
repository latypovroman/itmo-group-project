import Swiper, { Navigation, Pagination } from 'swiper';
import './swiper/css';

const publicationsSwiper = new Swiper('.swiper', {

  modules: [Navigation, Pagination],

  direction: 'vertical',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

export default publicationsSwiper
