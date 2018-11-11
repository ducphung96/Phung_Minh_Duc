document.getElementById('add').addEventListener('click', function(e){
	e.preventDefault();
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var password = document.getElementById('password');
	var repassword = document.getElementById('repassword')
	var phone = document.getElementById('phone');
	var checkname = false;
	var checkemail = false;
	var checkpass = false;
	var checkrepass = false;
	var checkphone = false;
	var checkgt = false;
	function validateEmail(email) {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	function checkPhoneNumber(phone) {
		var flag = false;

		phone = phone.replace('(+84)', '0');
		phone = phone.replace('+84', '0');
		phone = phone.replace('0084', '0');
		phone = phone.replace(/ /g, '');
		if (phone != '') {
			var firstNumber = phone.substring(0, 2);
			if ((firstNumber == '09' || firstNumber == '08' || firstNumber == '07' || firstNumber == '06' || firstNumber == '05' || firstNumber == '04' || firstNumber == '03'|| firstNumber == '02') && phone.length == 10) {
				if (phone.match(/^\d{10}/)) {
					flag = true;
				}
			}
		}
		return flag;
	}

	if (name.value.trim() == '') {
		document.getElementById('errorname').innerHTML = 'Yêu cầu nhập đầy đủ họ tên';
	}
	else if (name.value.length < 8) {
		document.getElementById('errorname').innerHTML = 'Họ và tên phải Lớn hơn 8 ký tự';
	}
	else{
		document.getElementById('errorname').innerHTML = '';
		checkname=true;
	}

	var nam = document.getElementById('nam');
	var nu = document.getElementById('nu');
	if (!nam.checked && !nu.checked) {
		document.getElementById('errorgioitinh').innerHTML = 'Yêu cầu chọn giới tính'
	}
	else{
		document.getElementById('errorgioitinh').innerHTML = ''
		checkgt = true;
	}

	if (email.value.trim() == '') {
		document.getElementById('erroremail').innerHTML = 'Yêu cầu nhập Email';
	}
	else if (!validateEmail(email.value)) {
		document.getElementById('erroremail').innerHTML = 'Định dạng email abc@gmail.com';
	}
	else{
		document.getElementById('erroremail').innerHTML = '';
		checkemail=true;
	}

	if (password.value.trim() == '') {
		document.getElementById('errorpassword').innerHTML = 'Yêu cầu nhập mật khẩu';
	}
	else if (password.value.length < 6){
		document.getElementById('errorpassword').innerHTML = 'Password phải có hơn 6 ký tự';
	}
	else{
		document.getElementById('errorpassword').innerHTML = '';
		checkpass=true;
	}

	if (repassword.value.trim() == '') {
		document.getElementById('errorrepassword').innerHTML = 'Yêu cầu xác nhận mật khẩu'
	}
	else if (password.value == repassword.value){
		document.getElementById('errorrepassword').innerHTML = ''
		checkrepass=true;

	}
	else{
		document.getElementById('errorrepassword').innerHTML = 'Xác nhận mật khẩu sai'
	}

	if (phone.value.trim() == '') {
		document.getElementById('errorMoblie').innerHTML = 'Yêu cầu nhập Số điện thoại';
	}
	else if (!checkPhoneNumber(phone.value)){
		document.getElementById('errorMoblie').innerHTML = 'Sai định dạng số điện thoại';
	}
	else{
		document.getElementById('errorMoblie').innerHTML = ''
		checkphone=true;
	}

	if (checkname==true && checkemail==true && checkphone==true && checkpass==true && checkrepass==true && checkgt==true) {
		alert('Chúc mừng bạn đã đăng ký thành công !')
	}
});

document.getElementById('reset').addEventListener('click', function(){
	location.reload();
})