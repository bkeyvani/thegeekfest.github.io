console.log('This would be the main JS file.');

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function postContactToGoogle(){
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var email = $('#email').val();
  var phone = $('#phone').val();
  if ((firstName !== "") && (lastName !== "") && (email !== "") && ((phone !== "") && (validateEmail(email)))) {
    $.ajax({
      url: "https://docs.google.com/forms/d/1x_wv9Qe_xjdvPS3IdeARMNU39uwfBv6nqFpq2ZixIzA/formResponse",
      data: {
        "entry.260454260" : firstName,
        "entry.789254174" : lastName,
        "entry.858924175" : email,
        "entry.195002150" : phone
      },
      type: "POST",
      dataType: "json",
      statusCode: {
        0: function (){
          // Reset form upon success
          $('#firstName').val("worked?");
          $('#lastName').val("worked?");
          $('#email').val("");
          $('#phone').val("");
          
          //Success message
          console.log("Yey, success!");
        },
        200: function (){
          // Reset form upon success
          $('#firstName').val("");
          $('#lastName').val("");
          $('#email').val("");
          $('#phone').val("");
          
          //Success Message
          console.log("Sweet, success message!");
        }
      }
    });
  }
  else {
            //Error message
            console.log("Something went terribly wrong!!!");
        }
}