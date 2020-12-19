function adaptive() {
	var htmls = document.querySelector('html');
	var width = (window.screen.width) /10;
	htmls.style.fontSize = width + 'px';
}
window.onresize = function() {
	adaptive();
}
adaptive();
