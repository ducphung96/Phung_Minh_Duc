function bai2(n){
	// var n = parseInt(prompt("Nhập số cần kiểm tra"));
	document.write("Tổng của 10 số chẵn đầu tiên là: " + bai2(20));
	function bai2(n){
		var tong = 0;
		var index = 0;
		do
		{
			if (index % 2 == 0) {
				tong += index;
			}
			index++;
		}
		while (index<=n)
		return tong;
	}
}