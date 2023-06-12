// navigation
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");
  toggleMenu.classList.toggle("active")
  navigation.classList.toggle("active")
}
//swiper slider 1
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
