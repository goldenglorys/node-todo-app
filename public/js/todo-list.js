$(document).ready(function(){
    $("#btn").click(function(){
        var item = $('#itemName').val();
        $.post("/todo", {item: item}, function(status){
        });
    });
})
