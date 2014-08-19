
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.val())) {
    email.addClass("error").attr("aria-invalid",true);
  }
  else {
    $(email).removeClass("error").removeAttr("aria-invalid"); 
  }
  
  return re.test(email.val());
}

function validatePhone(phone) {
  var re = /^\d{10}$/;
  if (!re.test(phone.val())) {
    phone.addClass("error").attr("aria-invalid",true);
  }
  else {
    $(phone).removeClass("error").removeAttr("aria-invalid"); 
  }
  
  return re.test(phone.val());
}

function validateForm (jqObject) {
    if (!jqObject.val()) {
      jqObject.addClass("required").attr("aria-invalid",true);
    }
    else {
      jqObject.removeClass("required").removeAttr("aria-invalid");
    }

    // validate email field
    if (jqObject.attr("id") === "entry_809307019") {
      validateEmail(jqObject);
    }

    // validate phone field
    if (jqObject.attr("id") === "entry_843662138") {
      validatePhone(jqObject);
    }
}

$(document).ready(function() {
  // add evenlistener to required form fields on blur
  $("*[required]").blur(function() {
    validateForm($(this));
 });

  // focus on first name input
  $("#entry_1562922550").focus();
});
