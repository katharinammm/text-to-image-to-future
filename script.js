window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function openTab(evt, chapter) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
      tablinks[i].parentElement.classList.add("shadow");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(chapter).style.display = "block";
    evt.currentTarget.className += " active";
    evt.currentTarget.parentElement.classList.remove("shadow");
    
}


$(".tablinks").on("click", function() {
  $("html, body").animate({scrollTop:0}, 300);
});




  let root = document.documentElement;
  let maxWidth = document.body.clientWidth;
  let maxHeight = document.body.clientHeight;
  console.log(maxWidth);
  
  root.addEventListener("mousemove", e => {
      root.style.setProperty('--value', "drop-shadow(calc(-0.01*(" + e.clientX + "px - 0.5 * " + maxWidth + "px)) calc(-0.01*(" + e.clientY + "px - 0.5 * " + maxHeight + "px)) 3px #00000040");
      root.style.setProperty('--value-white', "drop-shadow(calc(0.01*(" + e.clientX + "px - 0.5 * " + maxWidth + "px)) calc(0.01*(" + e.clientY + "px - 0.5 * " + maxHeight + "px)) 3px #ffffff60");
      root.style.setProperty('--inner-shadow', "inset calc(-0.01*(" + e.clientX + "px - 0.5 * " + maxWidth + "px)) calc(-0.01*(" + e.clientY + "px - 0.5 * " + maxHeight + "px)) 3px #00000040, inset calc(0.01*(" + e.clientX + "px - 0.5 * " + maxWidth + "px)) calc(0.01*(" + e.clientY + "px - 0.5 * " + maxHeight + "px)) 3px #ffffff60");
  })




  var imgs = document.querySelectorAll(".data-img");

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseenter', function (){
        this.style.display = 'none';
    });
}

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('mouseleave', function (){
        this.style.display = 'block';
    });
}





var slideIndex = [1,1,1,1,1,1];
var slideId = ["slide1-1", "slide1-2", "slide1-3", "slide2-1", "slide2-2", "slide2-3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "grid";  
}

