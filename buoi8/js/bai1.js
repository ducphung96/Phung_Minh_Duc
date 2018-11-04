function bai1() {
	document.write('<table style=" float: left; width:20%">')
    for(i=1;i<=7;i++){
    	document.write('<tr>')
		for(k=1;k<=i;k++){
			document.write('<td>');
			document.write('*');
			document.write('</td)');
		}
		document.write('</tr>')
	}
	document.write('</table>')
	document.write('<table style=" float: left; width:20%">')
    for(k=1;k<=7;k++){
    	document.write('<tr>')
		for(i=1;i<=7;i++){
			document.write('<td>');
			document.write('*');
			document.write('</td)');
		}
		document.write('</tr>')
	}
	document.write('</table>')
	document.write('<table style=" float: left; width:20%">')
    for(k=1;k<=7;k++){
    	document.write('<tr>')
		for(i=1;i<=7;i++)
		{
			if(i==1 || i==7 || k==1 || k==7)
			{
				document.write('<td>');
				document.write('*');
				document.write('</td)');
			}
			else
			{
				document.write('<td>');
				document.write('&nbsp ');
				document.write('</td)');
			}
		}
		document.write('</tr>')
	}
	document.write('</table>')
	document.write('<table style=" float: left; width:20%">')
    for(i=7;i>=1;i--){
    	document.write('<tr>')
		for(k=1;k<=i;k++){
			document.write('<td>');
			document.write('*');
			document.write('</td)');
		}
		document.write('</tr>')
	}
	document.write('</table>')
}