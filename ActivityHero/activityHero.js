function validateAlphaNumeric (){
  $("#c-name").hide();
  var companyName = $("#formId input[name=cname]").val();
  console.log(companyName);
  var validationCondition = /^[a-zA-Z0-9]+$/; 
  if (companyName == "" || companyName == null) {
    $("#c-name").html("Please enter company name");
    $("#c-name").show();
    
  }
  else if (!companyName.match(validationCondition)) {
    $("#c-name").html("Company name must be alpha numeric only");
    $("#c-name").show();
  } 
}

function validateText (name){
  $("#n-"+name).hide();
  console.log(name);
  var firstName = $("#formId input[name="+name+"]").val();
  console.log(firstName);
  var validationCondition = /^[a-zA-Z]+$/; 
  if (firstName == "" || firstName == null){
    $("#n-" +name).html("Please enter your " + name + " name"); 
    console.log($(".n-" +name));
    $("#n-"+name).show();
  }
  else if (!firstName.match(validationCondition)) {
    $("#n-"+name).html( +name +"name must be text only");
    $("#n-"+name).show();
  }
}
function validateEmail (){
  $("#e-mail").hide();
  var email = $("#formId input[name=email]").val();
  console.log(email);
  var validationCondition = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
  if (email == "" || email == null){
    $("#e-mail").html("Please enter your email"); 
    $("#e-mail").show();
  }
  else if(!email.match(validationCondition)) {
    $("#e-mail").html("Email must be like abc@gmail.com");
    $("#e-mail").show();
  }
}
function validatePhoneNo (){
  $("#p-number").hide(); 
  var phoneNo = $("#formId input[name=phone]").val();
  var validationCondition = /^[0-9]+$/; 
  if (phoneNo == "" || phoneNo == null){
    $("#p-number").html("Please enter your phone number"); 
    $("#p-number").show();
  }
  else if (!phoneNo.match(validationCondition)) {
    $("#p-number").html("Phone number must be numeric");
    $("#p-number").show();
  }
  else if(phoneNo.length < 10){
    $("#p-number").html("Phone number must be greater than 10 digits");
    $("#p-number").show(); 
  }
}
function validateDropdown(identity) {
  $("#drop-"+identity).hide();
  var drop = document.getElementById(identity);
  var optionName = drop.options[drop.selectedIndex].value;
  if(optionName == 0){
    $("#drop-"+identity).html("Must select " +identity);
    $("#drop-"+identity).show();
   }
}
$(document).ready(function(){
  $("input[name=cname]").blur( function(){
   validateAlphaNumeric();  
  });
  $("input[name=first]").blur( function(){
    validateText("first"); 
  });
  $("input[name=last]").blur( function(){
    validateText("last");
    
  });
  $("input[name=email]").blur( function(){
   validateEmail();  
  });
  $("input[name=phone]").blur( function(){
   validatePhoneNo();  
  });
  $("#cityDrop").blur( function(){
   validateDropdown("cityDrop");  
  });
  $("#stateDrop").blur( function(){
   validateDropdown("stateDrop");  
  });
});