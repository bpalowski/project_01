$(document).ready(function(){
  $("form#info").submit(function(event){
    var c = $("select#who").val();
    var java = $("select#Front_End").val();
    var php = $("select#Back_End").val();
    var ruby = $("select#Apple").val();
    var pc = $("select#PC").val();



    if( c === java ){
      $("#suggestion_1").show();
    }
    else if( c === php){
      $("#suggestion_2").show();
    }
    else if( c === ruby){
      $("#suggestion_3").show();
    }
    else if( c === pc){
      $("#suggestion_4").show();
    }


    if( java === c ){
      $("#suggestion_1").show();
    }
    else if( java === php){
      $("#suggestion_2").show();
    }
    else if( java === ruby){
      $("#suggestion_3").show();
    }
    else if( java === pc){
      $("#suggestion_4").show();
    }


    if( java === php ){
      $("#suggestion_1").show();
    }
    else if( java === ruby){
      $("#suggestion_2").show();
    }
    else if( java === pc){
      $("#suggestion_3").show();
    }
    else if( java === pc){
      $("#suggestion_4").show();
    }

    if( php === c ){
      $("#suggestion_1").show();
    }
    else if( java === java){
      $("#suggestion_2").show();
    }
    else if( java === php){
      $("#suggestion_3").show();
    }
    else if( java === pc){
      $("#suggestion_4").show();
    }

    if( ruby === c ){
      $("#suggestion_1").show();
    }
    else if( ruby === java){
      $("#suggestion_2").show();
    }
    else if( ruby === php){
      $("#suggestion_3").show();
    }
    else if( ruby === pc){
      $("#suggestion_4").show();
    }

    if( pc === c ){
      $("#suggestion_1").show();
    }
    else if( pc === java){
      $("#suggestion_2").show();
    }
    else if( pc === php){
      $("#suggestion_3").show();
    }
    else if( pc === ruby){
      $("#suggestion_4").show();
    }





event.preventDefault();
});
});
