
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

function validateForm (e) {
    if (!e.value) {
      $(e).addClass("required").attr("aria-invalid",true);
    }
    else {
      $(e).removeClass("required").removeAttr("aria-invalid");
    }

    // validate email field
    if (e.id === "entry_809307019") {
      validateEmail($(e));
    }

    // validate phone field
    if (e.id === "entry_843662138") {
      validatePhone($(e));
    }
}

$(document).ready(function() {
  // add evenlistener to form fields on blur
  $("input[required]").blur(function() {
    validateForm(this);
 });

  // focus on first name input
  $("#entry_1562922550").focus();
});
