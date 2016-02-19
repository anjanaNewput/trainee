function calender(){
  this.calenderdata = calenderdata;
  this.month = month;
  var dayView = {
    day : 0
  }
  console.log(calenderdata);
  console.log(month);
  
 function month(){
   var i;
 var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   var monthView = {
       year: "2016",
       month : monthArray[0]
   }
  
  var template = $('#templateMonth').html();
  Mustache.parse(template);
   for (i = 0; i < 12; i++){
  var cell = Mustache.render(template,monthView); 
     console.log(monthView);
   }
   $(".monthTitle").html(cell);
   
 } 
  
function calenderdata(){
  
  
  var i,j=5;
  var template = $('#templateWeek').html();
  Mustache.parse(template);
  var d = new Date();
  d.setFullYear(2016, 0, 1);
  var day = d.getDay();
  console.log(day);
  
  for (i=0; i<31; i++){
    setdata(i);
    var cell = Mustache.render(template,dayView); 
    if (j<7){
      $(".row1").append(cell);
    }
    else {
      j=0;
      $(".row2").append(cell);
    }
  }
  
}
 function setdata(i){
   dayView.day = i;
    
 }       
        
       
      
  
   //$(".row3").append(cell);
   //$(".row4").append(cell);
  // $(".row5").append(cell);
  }
 
