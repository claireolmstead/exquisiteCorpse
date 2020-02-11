/*Doesn't work when you scroll*/
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = $(".slide");
  var dots = $(".dot");
  if (n > slides.length){
    slideIndex = 1;
  }    
  if (n < 1){
    slideIndex = slides.length;
  }
  for (i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex-1].className += " active";
  if (slideIndex == 1){
    location.href = "#home"; 
  }
  else if (slideIndex == 2){
    location.href = "#person1"; 
  }
  else if (slideIndex == 3){
    location.href = "#person2"; 
  }
  else if (slideIndex == 4){
    location.href = "#person3"; 
  }
  else if (slideIndex == 5){
    location.href = "#person4"; 
  }
}