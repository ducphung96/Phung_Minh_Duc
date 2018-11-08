document.getElementById('checkall').addEventListener('click', function()
{
    var checkboxes = document.getElementsByName('name');
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = true;
    }
});

document.getElementById('uncheckall').addEventListener('click', function()
{
    var checkboxes = document.getElementsByName('name');
    for (var i = 0; i < checkboxes.length; i++){
        checkboxes[i].checked = false;
    }
});
function on(x){
    x.style.background = "#33CC33"
}
function out(x){
    x.style.background = "#9999FF"
}