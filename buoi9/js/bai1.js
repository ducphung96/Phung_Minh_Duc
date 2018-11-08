var min=9;
var max=100;
function zoominLetter() {
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
		if(p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("px",""));
		} else {
			var s = 16;
		}
		if(s!=max) {
			s += s*0.4;
		}
		p[i].style.fontSize = s+"px"
	}
}
function zoomoutLetter() {
	var p = document.getElementsByTagName('p');
	for(i=0;i<p.length;i++) {
		if(p[i].style.fontSize) {
			var s = parseInt(p[i].style.fontSize.replace("px",""));
		} else {
			var s = 12;
		}
		if(s!=min) {
			s -= s*0.4;
		}
		p[i].style.fontSize = s+"px"
	}
}
function macdinh()
{
	document.getElementById("p").style.fontSize = '16px';
}