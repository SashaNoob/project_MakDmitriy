// Next/previous controls
function plusSlides(n) {
  slideIndex += n;
  clearTimeout(my_timer);
  MakePosSlides(slideIndex);
  showSlides();
}

// Thumbnail image controls
function currentSlide(n) {
  slideIndex = n;
  clearTimeout(my_timer);
  MakePosSlides(slideIndex);
  showSlides();

}

var slideIndex = 1;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    slideIndex++;
    my_timer = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function MakePosSlides(slideIndex){

  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";

}
