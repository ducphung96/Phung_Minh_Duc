function bai3(n){
	var n = parseInt(prompt("Nhập số cần kiểm tra"));
	document.write("Tổng s là: " + bai3(n));
	function bai3(n){
		var s = 0;
		var i = 1;
		while(i<=n){
			s += 1/i;
			i++;
		}
		return s;
	}
}