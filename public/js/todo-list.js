$(document).ready(function(){
    $("#btn").click(function(){
        var data = {item: $('#itemName').val()};
        $.post("/sendItem", data , function(status){
        });
    });
    $("li").click(function(){
        // $.post("/todoDel", {item: item}, function(status){
        // });
        alert($('#hide').val())
    })
})

function del(){
    alert(document.getElementById('hide').value)
}