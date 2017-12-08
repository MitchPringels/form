$(document).ready(function(){
  $("#login-button").click(function(){
    $("#login-button").hide();
    $("#shownow").show();
  });

  $("#nextButton").click(function(){
    $("#login-button").hide();
    $("#shownow").hide();
    $("#nextKlik").show();
  });

  $("#close").click(function(){
    $("#shownow").hide();
    $("#nextKlik").hide();
    $("#login-button").show();
  });

  $("#close2").click(function(){
    $("#shownow").hide();
    $("#nextKlik").hide();
    $("#login-button").show();
  });

  $("#back").click(function(){
    $("#nextKlik").hide();
    $("#login-button").hide();
    $("#shownow").show();
  });
});
