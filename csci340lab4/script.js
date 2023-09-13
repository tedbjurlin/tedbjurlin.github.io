$(document).ready(function() {

  new_dogs();

  $("#both").click(new_dogs);

  $("#left").click(new_left_dog);
  $("#right").click(new_right_dog);

});


function new_right_dog() {
  $.ajax({
    dataType: "json",
    url: "https://api.kanye.rest/",
    success: function(results) {
      $('#quote1').text(results["quote"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });

  $.ajax({
    dataType: "json",
    url: " https://dog.ceo/api/breeds/image/random",
    success: function(results) {
      console.log(results["message"])
      $('#dog1').css("background-image", `url(${results["message"]})`);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
}


function new_left_dog() {
  $.ajax({
    dataType: "json",
    url: "https://api.kanye.rest/",
    success: function(results) {
      $('#quote2').text(results["quote"]);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });

  $.ajax({
    dataType: "json",
    url: " https://dog.ceo/api/breeds/image/random",
    success: function(results) {
      console.log(results["message"])
      $('#dog2').css("background-image", `url(${results["message"]})`);
    },
    error: function(xhr,status,error) {
      console.log(error);
    }
  });
}


function new_dogs() {
  new_right_dog();
  new_left_dog();
}