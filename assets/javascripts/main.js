function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(email.val())) {
    email.addClass("error").attr("aria-invalid", true);
  } else {
    $(email).removeClass("error").removeAttr("aria-invalid");
  }

  return re.test(email.val());
}

function validatePhone(phone) {
  var re = /^\d{10}$/;
  if (!re.test(phone.val())) {
    phone.addClass("error").attr("aria-invalid", true);
  } else {
    $(phone).removeClass("error").removeAttr("aria-invalid");
  }

  return re.test(phone.val());
}

function checkRequiredFields(jqObjects) {
  jqObjects.each(function () {
    if (!$(this).val()) {
      $(this).addClass("required").attr("aria-invalid", true);
    } else {
      $(this).removeClass("required").removeAttr("aria-invalid");
    }

    // validate email field
    if ($(this).attr("id") === "entry_809307019") {
      validateEmail($(this));
    }

    // validate phone field
    if ($(this).attr("id") === "entry_843662138") {
      validatePhone($(this));
    }

    // validate participate checkboxes
    var chkbxs = $('input:checked');
    if (chkbxs.length < 1) {
      $(this).parent().closest('ul').addClass("required").attr("aria-invalid", true);
    } else {
      $(this).parent().closest('ul').removeClass("required").removeAttr("aria-invalid");
    }
  });
}

function validateFrom(requiredFields) {
  // check all required fileds
  checkRequiredFields(requiredFields);

  var isInvalid = $("*[aria-invalid]");
  //if page contains no 'aria-invalid' attribute then form is valid.
  if (isInvalid.length === 0) {
    return true;
  }

  isInvalid.focus();
  return false;
}

$(document).ready(function () {
  // add evenlistener to required form fields (aria-required="true" attribute)
  // on blur
  var requiredFields = $("*[aria-required=true]");

  requiredFields.blur(function () {
    checkRequiredFields($(this));
  });

  // focus on first name input
  $("form input:first").focus();

  $("form#ss-form").submit(function () {
    var isValid = validateFrom(requiredFields);
    return isValid;
  });
});
