$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").hide();
    $("#design").show();
  });
  $("#design").click(function(){
    $("#design").hide();
    $("#design-image").show();
  });
});

$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").hide();
    $("#development").show();
  });
  
});$("#development").click(function(){
  $("#development").hide();
  $("#development-image").show();
});

$(document).ready(function(){
  $("#product-image").click(function(){
    $("#product-image").hide();
    $("#product").show();
  });
  $("#product").click(function(){
    $("#product").hide();
    $("#product-image").show();
  });
});

$(document).ready(function(){
  $("form#mail").submit(function(event){
    // event.preventDefault();
    var name = $("input#name1").val();
    var email = $("input#mail1").val();
    var message = $("textarea#comment1").val();
    if ($("input#name1").val() && $("input#mail1").val()){
      alert (name + ", your comment has been received. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});
