
$(document).ready( function(){
  console.log("hii");
  $("#formId").validate({
    rules:{
     companyName: {
      required: true,
      alphaNumericValidation: true
     },
    firstName: {
      required: true,
      textValidation: true
    },
    lastName: {
      required: true,
      textValidation: true
    },
      emailAdd: {
        required: true,
        email : true
      },
      phoneNo: {
        required: true,
        numericValidation: true,
        minlength: 10
      },
      cityDropdown:{
        required: true,
        validateDropdown: true
      },
      stateDropdown:{
        required: true,
        validateDropdown:true
      }
    },
    messages: {
      companyName: {
        required: "Please enter company name"
      },
      firstName: {
        required: "Please enter your first name"
      },
      lastName: {
        required: "Please enter your last name"
      },
      emailAdd:{
        required: "Please enter your email",
        email: "Email should be like abc@gmail.com" 
      },
      phoneNo: {
        required: "Please enter your phone number",
        minlength: "Phone number should be greater than 10"
      },
      cityDropdown:{
        required: "Please select city"
      },
      stateDropdown: {
        required: "Please select state"
      }
    }
  });
  $.validator.addMethod("alphaNumericValidation", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /^[a-zA-Z0-9]+$/.test(value);
}, 'Please enter a alphaNumeric name.');
  $.validator.addMethod("textValidation", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /^[a-zA-Z]+$/.test(value);
}, 'Please enter text only.');
  $.validator.addMethod("numericValidation", function(value, element) {
  // allow any non-whitespace characters as the host part
  return this.optional( element ) || /^[0-9]+$/.test(value);
}, 'Please enter numbers only.');
  $.validator.addMethod("validateDropdown",
    function(value, element) {
        if (value == "none")
            return false;
        else
            return true;
    },
    "Please select a value");
  console.log("hello");
  $("#date").datepicker();
  $("#date").focus(function(){
    $("#date").datepicker("show");
  });
  //$("#geoLocation").geocomplete();
 // $.fn.geocomplete("#geoLocation"); 
});