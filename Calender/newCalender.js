function calendar (){
  
  var daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var monthNavigation = false;
        
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();
  var birthdayList = [
    {name: "Vipin Joshi", dd : 15, mm : 0, year : 1946},
    {name: "Chetna Suryavanshi", dd : 25, mm : 2, year : 1993},
    {name: "Sonam Ravi Gupta", dd : 22, mm : 3, year : 1987},
    {name: "Siyaram Patidar", dd : 3, mm : 4, year : 1985},
    {name: "Rahul Kulmi", dd : 28, mm : 4, year : 1988},
    {name: "Deepak Patidar", dd : 10, mm : 4, year : 1990},
    {name: "Amit Nagar", dd : 10, mm : 4, year : 1986},
    {name: "Surendra Patidar", dd : 21, mm : 6, year : 1988},
    {name: "Deepti Modi", dd : 3, mm : 6, year : 1991},
    {name: "Awanish Tiwari", dd : 6, mm : 6, year : 1974},
    {name: "Anjana Singh", dd : 24, mm : 6, year : 1992},
    {name: "Nimesh Neema", dd : 20, mm : 7, year : 1986},
    {name: "Aditya Paliwal", dd : 8, mm : 7, year : 1994},
    {name: "Varsha Tyagi", dd : 13, mm : 9, year : 1992},
    {name: "Kumud Bansal", dd : 16, mm : 10, year : 1989},
    {name: "Shashank Saxena", dd : 11, mm : 11, year : 1990},
    {name: "Satya Narayan patidar", dd : 12, mm : 11, year : 1983},
    {name: "Nitesh Thakur", dd : 12, mm : 11, year : 1990}];
  
  this.initialize = function() {
    showCurrentMonth();
    showDays();
     bindEvent();
  }
  
  // showing current month
 showCurrentMonth = function(){
  var startOfmonth = new Date(currentYear,currentMonth,1).getDay();
  var lastDateOfCurrentMonth = new Date(currentYear, currentMonth+1, 0).getDate();
  var template = $('#template1').html();
  Mustache.parse(template);
   var templateB = $('#templateBday').html();
  Mustache.parse(templateB);
  for(var j = startOfmonth; j > 0; j--) {
    var day = ''; 
      var currDate = {
        date : day
      }
    column = Mustache.render(template,currDate); 
    if (monthNavigation === true){
      $(".cell").html(column);
        monthNavigation = false;
    } 
    else {
      $(".cell").append(column);
    }
  }
  for(var i= 0; i < lastDateOfCurrentMonth; i++) {
    var day = i+1;
    var currDate = {
            date : day
          }
    console.log(day);
    var column = Mustache.render(template,currDate); 
    for( var index = 0; index < birthdayList.length; index++){
      if(birthdayList[index].mm == currentMonth){
        if (birthdayList[index].dd == day){
          column = Mustache.render(templateB,currDate);
        }
      }
    } 
    if (monthNavigation === true){
      $(".cell").html(column);
        monthNavigation = false;
    } 
    else {
            $(".cell").append(column);
    }
      
   }
   monthsOfYear();
 }
 // show heading of month
  var monthsOfYear = function(){ 
    var m = currentMonth;
    var template = $('#template').html();
    Mustache.parse(template);
    var Month = {
      currMonth : months[m],
      currYear : currentYear
    }
    cell = Mustache.render(template,Month);
    $(".header").html(cell);
  }

// showing days of week
  var showDays = function(){
    var template = $('#templateWeek').html();
    Mustache.parse(template);
    for (var j = 0; j< 7; j++){
      var weeks = {
        week : daysOfWeek[j]
      }
      var weekCell = Mustache.render(template,weeks);
      if(monthNavigation === true ){
        $(".weekName").html(weekCell);
        monthNavigation = false;
      }
      else {
        $(".weekName").append(weekCell);
      }
    }
  }
// code for next month calender
  var nextMonth = function() {
    if (currentMonth == 11 ) {
      currentMonth = 0;
      currentYear = currentYear + 1;
    }
    else {
      currentMonth = currentMonth + 1;
   }
    showCurrentMonth();
   }
   var prevMonth = function() {
     if ( currentMonth == 0 ) {
      currentMonth = 11;
      currentYear = currentYear - 1;
     } 
     else {
      currentMonth = currentMonth - 1;
     }
     showCurrentMonth();
   }
  
  // Methods to bind event
  var bindEvent = function (){
   $("#btn-next").click (function (){
     monthNavigation = true
     nextMonth();
  });
   $("#btn-prev").click (function (){
     monthNavigation = true
     prevMonth();
  });
  
    $('body').on("click", ".birth", function(){
      var element = $(this);
      console.log(element.html());
      for(var i = 0; i < birthdayList.length; i++ ){
        if(birthdayList[i].mm == currentMonth){
         if(element.html() == birthdayList[i].dd){
          $(".name").text(birthdayList[i].name);
           $(".modal").show();
         }
        }
       }
      var modal =document.getElementsByClassName('modal')[0]; 
      var span = document.getElementsByClassName('.close');
      $(span).click(function() {
      $(".modal").hide();
    });
  
    $(document).click(function(event) {
      if (event.target == modal) {
        $(".modal").hide();
      }
    });
      
    });
  }
  
};
 
 
