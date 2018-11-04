function bai4(){
	var m,n,k;
	var s=0;
	do
	{
		n = parseInt(prompt('Nhập số n:'));
		m = parseInt(prompt('Nhập số m:'));
		k = parseInt(prompt('Nhập số k:'));
	}
	while(m<n);
	for(i=m;i>=n;i--)
	{
		if(i%k==0){
			s = s+i;
		}
	}
	document.write('Tổng các số chia hết cho '+k+' trong khoảng '+n+' đến '+m+' là: '+s);
}