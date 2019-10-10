$(document).ready(function(){
    $("#btn").click(function(){
        var item = $('#itemName').val();
        $.post("/sendItem", {item: item}, function(status){
        });
    });
    // $("#delete").click(function(){
    //     $.post("/todoDel", {item: item}, function(status){
    //     });
    // })
})
