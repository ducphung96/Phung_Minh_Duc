$(function(){
	$('button').click(function(){
	var index = $(this);
	var ct = $('.content');
	var txt = $('.lb1');
	var btn = $('button');
	if (index.parent().next().css('display') == 'none') {
		btn.html('<i class="fas fa-plus"></i>')
		ct.css('display','none')
		txt.css('color','#fff')
		index.parent().next().css('display', 'block')
		index.html('<i class="fas fa-minus"></i>')
		index.next().css('color', '#CCFF33')
		
	}else{
		index.parent().next().css('display', 'none')
		index.html('<i class="fas fa-plus"></i>')
		index.next().css('color', '#fff')
		
		}
	})
})