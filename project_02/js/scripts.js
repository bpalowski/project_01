$(document).ready(function(){
  $("form#info").submit(function(event){
var first_name = $('input#first_name').val();
var last_name = $('input#last_name').val();


    var csharp = $("select#csharp").val();
    if( csharp === 'true'){
      $('#suggestion_1').show();
    }
    var JavaScript = $("select#JavaScript").val();
    if( JavaScript === 'true'){
      $('#suggestion_2').show();
    }
    var Ruby = $("select#Ruby").val();
    if( Ruby === 'true'){
      $('#suggestion_3').show();
    }
    var php = $("select#php").val();
    if(php === 'true'){
      $('#suggestion_4').show();
    }
    var htlm_css = $("select#HTLM_CSS").val();
    if(htlm_css === 'true'){
      $('#suggestion_5').show();
    }
    var cake = $("select#Cake").val();
    if(cake == 'true'){
      $('#suggestion_6').show()
    }
    var food = $("select#Food").val();
    if(food == 'true'){
      $('#suggestion_7').show()
    }
    var Movies = $("select#Movies").val();
    if(Movies == 'true'){
      $('#suggestion_8').show()
    }



$('.first_name').text(first_name);
$('.last_name').text(last_name);

    $("#reveal-on").hide();
    $("#reveal-off").show();





    event.preventDefault();
  });
});
