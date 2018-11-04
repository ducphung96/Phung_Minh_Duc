function bai3(n){
	var n = parseInt(prompt("Mời bạn nhập n : "));
	var s = 0;
	if (n <= 0)
	{
       alert("Bạn phải nhập số > 0");
    }
    else
    {
        for (var i = 1; i <= n; i++){
            s += 1/i;
        }
    document.write("Tổng giá trị s là: " + s);
    }
}