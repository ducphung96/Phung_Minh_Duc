var slideIndex = 1;
showSlides(slideIndex);

function btn(n) {
	showSlides(slideIndex += n);
}

function crSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("Slideimg");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
carousel();
function carousel() {
	var i;
	var x = document.getElementsByClassName("Slideimg");
	var dots = document.getElementsByClassName("dot");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slideIndex++;
	if (slideIndex > x.length) {slideIndex = 1}    
		x[slideIndex-1].style.display = "block"; 
		dots[slideIndex-1].className += " active"; 
	setTimeout(carousel, 10000); // 10s tự chuyển sang ảnh kế tiếp
}