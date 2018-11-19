$(document).ready(function(){
    var index = $('#form');
    $('#next').on('click',function(){
        if(index.children().eq(3).css('display') == 'block') {
            if ($('#checkbox').is(':checked')) {
                $('#item4').css('background','#2184be');
                $('#errorcheck').text('');
                alert('Chúc mừng bạn đã hoàn thành');
            }else{
                $('#item4').css('background','red');
                $('#errorcheck').text('This field is required.');
            }
        };  
        if(index.children().eq(2).css('display') == 'block') {
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
        }; 
        if(index.children().eq(1).css('display') == 'block') {
            var validateemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            var email = $('#email').val();
            var firstname = $('#firstname').val();
            var lastname = $('#lastname').val();
            var addre = $('#addre').val();
            var age = $('#age').val();
            var i = true;
            if(firstname == '') {
                $('#errorfirstname').text('This field is required.');
                i = false;
            }else{
                $('#errorfirstname').text('');
            }
            if(lastname == '') {
                $('#errorlastname').text('This field is required.');
                i = false;
            }else{
                $('#errorlastname').text('');
            }
            if(email == '') {
                $('#erroremail').text('This field is required.');
                i = false;
            }else if(!validateemail.test(email)) {
                $('#erroremail').text('Please enter a valid email address.');
                i = false;
            }else{
                $('#erroremail').text('');
            }
            if(addre == '') {
                $('#erroraddre').text('This field is required.');
                i = false;
            }else{
                $('#erroraddre').text('');
            }
            if(age == '') {
                $('#errorage').text('This field is required.');
                i = false;
            }
            else{
                $('#errorage').text('');
            }
            if(i) {
                index.children().eq(1).css('display','none');
                index.children().eq(2).css('display','block');
                $('#item2').css('background','#9dc8e2');
                $('#item3').css({'background':'#2184be','color':'#fff'});
                if (parseInt(age)<18) {
                    $('#errorwarn').text('Must be over 18 years old! - Go back to the previous step!')
                    $('#item3').css('background','red')
                } else{
                    $('#errorwarn').text('No warning.')
                }
            }else{
                $('#item2').css('background','red');
            }
        };
        if(index.children().eq(0).css('display') == 'block') {
            var name = $('#name').val()
            var password = $('#password').val();
            var repassword = $('#repassword').val();
            var i = true;
            if(name == '') {
                $('#errorname').text('This field is required.');
                i = false;
            }
            else{
                $('#errorname').text('');
            }
            if(password == '') {
                $('#errorpassword').text('This field is required.');
                i = false;
            }
            else{
                $('#errorpassword').text('');
            }
            if(repassword == '') {
                $('#error-repassword').text('This field is required.');
                i = false;
            }else if(password != repassword) {
                $('#error-repassword').text('confirm password is not correct.');
                i = false;
            }else{
                $('#error-repassword').text('');
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
        }; 
    });
    $('#prev').on('click',function(){
        var prev = $('.index')
        for (var i = 1; i < prev.length; i++) {
            if (prev.eq(i).css('display') == 'block') {
                prev.eq(i).css('display','none');
                prev.eq(i-1).css('display','block');
                $('#item'+i).css('background','#2184be');
                $('#item'+(i+1)).css('background','#9dc8e2');
            };
        };
    });
});