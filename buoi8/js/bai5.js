function bai5(n){
	var n = parseInt(prompt("Nhập n"));
	document.write("Tổng s là: " + bai5(n));
	function bai5(n){
		var s = 0;
		var i = 1;
		var p = 1;
		var gt = 1;
		while(i<=n){
			gt = gt*i
			s += p/gt;
			p++;
			i++;
		}
		return s;
	}
}