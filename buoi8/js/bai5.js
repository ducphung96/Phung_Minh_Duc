function bai5(n){
	var n = parseInt(prompt("Nhập n"));
	var s = 0;
	var p = 1;
	var gt = 1;
	if (n <= 0)
	{
	    alert("Bạn phải nhập số > 0");
	}
	else
	{
	    for (var i = 1; i <= n; i++){
	       	gt = gt*i;
	        s += p/gt;
	        p++;
		}
	 document.write("Tổng giá trị s là: " + s);
	}
}