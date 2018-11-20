$(document).ready(function(){
    var index = $('#form');
    $('#next').on('click',function(){
        if(index.children().next().next().next().css('display') == 'block') {
            if ($('#checkbox').prop('checked')) {
                $('#item4').css('background','#2184be');
                $('#errorcheck').html('');
                alert('Chúc mừng bạn đã hoàn thành');
            }else{
                $('#item4').css('background','red');
                $('#errorcheck').html('Vui lòng tích vào.');
            }
            $('#item4').on('click', function(){
                $('#finish').css('display', 'block');
                $('#account,#profile,#warning').css('display', 'none');
                $(this).css('background', '#2184be');
                $('#item1,#item2,#item3').css('background', '#9dc8e2');
                $('#next').val('finish');
            });
        };
        if(index.children().next().css('display') == 'block') {
            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
            var email = $('#email').val();
            var firstname = $('#firstname').val();
            var lastname = $('#lastname').val();
            var addre = $('#addre').val();
            var age = $('#age').val();
            var i = true;
            if(firstname == '') {
                $('#errorfirstname').html('Tên Không được để trống.');
                i = false;
            }else{
                $('#errorfirstname').html('');
            }
            if(lastname == '') {
                $('#errorlastname').html('Họ không được để trống.');
                i = false;
            }else{
                $('#errorlastname').html('');
            }
            if(email == '') {
                $('#erroremail').html('Email không được để trống.');
                i = false;
            }else if(!validateEmail(email)) {
                $('#erroremail').html('Đinh dạng email abc@gmail.com!');
                i = false;
            }else{
                $('#erroremail').html('');
            }
            if(addre == '') {
                $('#erroraddre').html('Địa chỉ không được để trống.');
                i = false;
            }else{
                $('#erroraddre').html('');
            }
            if(age == '') {
                $('#errorage').html('Mời bạn nhập tuổi.');
                i = false;
            }
            else{
                $('#errorage').html('');
            }
            if(i) {
                index.children().eq(1).css('display','none');
                index.children().eq(2).css('display','block');
                $('#item2').css('background','#9dc8e2');
                $('#item3').css({'background':'#2184be','color':'#fff'});
                if (parseInt(age)<18) {
                    $('#errorwarn').html('Bạn chưa đủ 18 tuổi! - Mời bạn quay lại!')
                    $('#item3').css('background','red')
                } else{
                    $('#errorwarn').html('Bạn đã đủ điều kiện - Đi tiếp.')
                }
            }else{
                $('#item2').css('background','red');
            }
            $('#item2').on('click', function(){
                $('#profile').css('display', 'block');
                $('#account,#warning,#finish').css('display', 'none');
                $(this).css('background', '#2184be');
                $('#item1,#item3,#item4').css('background', '#9dc8e2');
                $('#next').val('next');
            });
        };  
        if(index.children().next().next().css('display') == 'block') {
            var i = true;
            var age = $('#age').val();
            if (parseInt(age)<18) {
                i = false;
            }
            if (i) {
                index.children().eq(2).css('display','none');
                index.children().eq(3).css('display','block');
                $('#next').val('Finish');
                $('#item3').css('background','#9dc8e2');
                $('#item4').css({'background':'#2184be','color':'#fff'});
            }
            $('#item3').on('click', function(){
                $('#warning').css('display', 'block');
                $('#account,#profile,#finish').css('display', 'none');
                $(this).css('background', '#2184be');
                $('#item1,#item2,#item4').css('background', '#9dc8e2');
                $('#next').val('next');
            });
        }; 
        
        if(index.children('#account').css('display') == 'block') {
            var name = $('#name').val()
            var password = $('#password').val();
            var repassword = $('#repassword').val();
            var i = true;
            if(name == '') {
                $('#errorname').html('Tên không được để trống.');
                i = false;
            }
            else{
                $('#errorname').html('');
            }
            if(password == '') {
                $('#errorpassword').html('Password không được để trống.');
                i = false;
            }
            else{
                $('#errorpassword').html('');
            }
            if(repassword == '') {
                $('#error-repassword').html('Confirm Password không được để trống.');
                i = false;
            }else if(password != repassword) {
                $('#error-repassword').html('Confirm Password phải giống password ở trên.');
                i = false;
            }else{
                $('#error-repassword').html('');
            }
            if(i) {
                index.children().eq(0).css('display','none');
                index.children().eq(1).css('display','block');
                $('#item1').css('background','#9dc8e2');
                $('#item2').css({'background':'#2184be','color':'#fff'});
            }else{
                $('#item1').css('background','red');
            }
            $('#prev').css({'background':'#2184be','color':'#fff'});
            $('#item1').on('click', function(){
                $('#account').css('display', 'block');
                $('#profile,#warning,#finish').css('display', 'none');
                $(this).css('background', '#2184be');
                $('#item2,#item3,#item4').css('background', '#9dc8e2');
                $('#next').val('next');
            });
        }; 
    });
    $('#prev').on('click',function(){
        var prev = $('.index');
        for (var i = 1; i < prev.length; i++) {
            if (prev.eq(i).css('display') == 'block') {
                prev.eq(i).css('display','none');
                prev.eq(i-1).css('display','block');
                $('#next').val('next');
                $('#item'+i).css('background','#2184be');
                $('#item'+(i+1)).css('background','#9dc8e2');
            };
        };
    });
});