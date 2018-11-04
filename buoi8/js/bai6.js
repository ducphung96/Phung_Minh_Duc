function bai6(n){
	var n = parseInt(prompt("Mời bạn nhập n :"));
	document.write("Tổng Giá trị s là: " + bai6(n));
	function bai6(n){
		var tong = 0;
		var index = 0;
		do
		{
			if (index > 0) {
				tong += index;
			}
			index++;
		}
		while (index<=n)
		return tong;
	}
}




