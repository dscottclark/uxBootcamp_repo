// Add Event Listener Below
$('#toggle').on("click", function(){
    $('#dropdown').slideToggle()
    
    
});

$('#toggle').mousedown(function(){
    $('img').css("transform", "rotate(180deg")
});
$('#toggle').mouseup(function(){
    $('img').css("transform", "rotate(180deg")
});