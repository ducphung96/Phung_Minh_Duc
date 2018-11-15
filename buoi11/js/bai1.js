$(function () {
  $('#add').on('click', function(){
    var text = $('#input').val();
    var html = `<tr>
    <td class="check"></td>
    <td class="text">`+ text+`</td>
    <td class="del"><i class="fas fa-times"></i></td>
    </tr>`
    if (text == '') {
      alert("vui lòng nhập nội dung")
    }
    else{
      $('#input').val('');
      $('#content').append(html);
    }
  })
  $('#content').on('click', '.text', function(){
    var index = $(this);
    if (index.prev().html() == '') {
      index.css('text-decoration', 'line-through');
      index.css('color', '#fff');
      index.next().css('color', '#fff');
      index.prev().html('<i class="fas fa-check"></i>')
      $(index).parent().css('background', '#888')
    }else{
      index.css('text-decoration', 'none');
      index.next().css('color', 'black');
      index.prev().html('');
      $(index).parent().css('background', '#efeeee')
      index.css('color', 'black');
    }
  })
  $('#content').on('click', '.del', function(){
    var index = $(this);
    $(index).parent().remove();
  })
  $('#content').on('click', '.check', function(){
    var index = $(this);
    if (index.html() == '') {
      index.next().css('text-decoration', 'line-through');
      index.next().next().css('color', '#fff');
      index.html('<i class="fas fa-check"></i>')
      $(index).parent().css('background', '#888')
      index.next().css('color', '#fff');
    }else{
      index.next().next().css('color', 'black');
      index.next().css('color', 'black');
      index.next().css('text-decoration', 'none');
      index.html('');
      $(index).parent().css('background', '#efeeee')
    }
  })
})