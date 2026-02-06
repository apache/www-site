let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length == 0) {
    return; // Nothing to do on this page
  }
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active")
  }
  slides[slideIndex-1].style.display = "block"; 
    // Use a timeout to allow the display change to take effect before adding the active class
    setTimeout(() => {
        slides[slideIndex-1].classList.add("active");
        dots[slideIndex-1].classList.add("active");
    }, 1);
 
}