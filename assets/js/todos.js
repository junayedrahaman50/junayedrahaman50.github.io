$('ul').on('click','li', function(){
$(this).toggleClass('change');
});
//Delete todos
$('ul').on('click','span', function(event){
    $(this).parent().fadeOut(500 , function(){
        $(this).remove();
    });
    event.stopPropagation();
});
var textItem = $("input[type = 'text']");
textItem.on('keypress',function (event) {
    if($(this).val() != ""){
    var inputText = $(this).val();
    if(event.which === 13){
    $(this).val("");
	$('ul').append("<li><span><i class='fas fa-trash'></i></span>  " + inputText + "</li>"); 
    }  
  }
    else{
        if(event.which === 13){
         alert('You must enter something');
        }
    }
});
$('.fa-pencil-alt').on('click',function(){
   textItem.fadeToggle(100); 
});

var inputEmail = document.querySelector('#email');

inputEmail.onkeyup = function(e) {
    var max = 25; // The maxlength you want
  
    if(inputEmail.value.length > max) {
      inputEmail.value = inputEmail.value.substring(0, max);
    }
  
};



