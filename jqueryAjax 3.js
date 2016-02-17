var booksObject={};
var pageno;
var stringNew="" ;
var jsonArray=[];
$(document).ready(function(){
  var modal = document.getElementById('myModal');
  var span = document.getElementsByClassName("close")[0];
  $(span).click(function() {
    modal.style.display = "none";
  });
  $(window).click(function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  });
  $("a").click(function(){
    $("a").removeClass("active");
    $(this).addClass("active");
  });
  $(window).scroll( function(){
   if ($(window).scrollTop() + $(window).height() >= $(document).height())     {
     loadData(stringNew,pageno);
    } 
  });
  $('body').on("click", "button", function(){
     var bookId = this.getAttribute("data-book-id"); 
    for(i = 0; i < jsonArray.length; i++) { 
      if(bookId == jsonArray[i].ID) {
        console.log(bookId);
        $(".img1").attr("src",[jsonArray[i].Image]);
        $(".title").text(jsonArray[i].Title);
        $(".id").text(bookId);
        $(".isbn").text(jsonArray[i].isbn);
        $(".description").text(jsonArray[i].Description);
        modal.style.display = "block"; 
      }
    }
  });

});
function loadData(string,page) {
  pageno = parseInt(page);
  stringNew = string;
  var cell;
  var arr = ["","","",""];
  var str="http://it-ebooks-api.info/v1/search/" + stringNew + "/page/" + pageno;
  console.log(str);
  $.getJSON(str,function( data ){
  var array=[];
  booksObject=data;
  var limit = booksObject.Total/ 10;
    if (pageno < limit){
      for(i=0; i < booksObject.Books.length; i++){
        array[i] = booksObject.Books[i];
        var cell= "<div class=\"cell\">" +
          "<img src=" + array[i].Image + " class=\"image\"/>" +  
          "<div class=\"cell_Con\" > "+"<p class=\"titleP\">" +      array[i].Title + "</p>" +
          "<p class=\"desc\">" + array[i].Description + "</p> " + "<hr />" +
          "<button data-book-id=" + array[i].ID + ">Want More</button>               </div>" +
          "</div>"
      jsonArray.push(array[i]);
        
      var remainder = i%4
      var len0 = 0,len1 = 0,len2 = 0,len3 = 0;
      if (remainder == 0){
        arr[remainder] = arr[remainder].concat(cell);
        len0 ++;
      }
      else if(remainder == 1){
        arr[remainder] = arr[remainder].concat(cell);
        len1 ++;
      }
      else if(remainder == 2){ 
        arr[remainder] = arr[remainder].concat(cell);
        len2 ++;
      }
      else if(remainder == 3) {
          arr[remainder] = arr[remainder].concat(cell);
        len3 ++;
      }
        console.log(len0);
        minCount = len0;
        for(var j = 1; j < 4; j++) {
          if(arr[j]<minCount){
            arr[j] = arr[j].concat(cell); 
          }
          
          
        }
      }
     if (pageno == 1){
      $('.contain1').html(arr[0]);
      $('.contain2').html(arr[1]);
      $('.contain3').html(arr[2]);
      $('.contain4').html(arr[3]);
     }
     else{
      $('.contain1').append(arr[0]);
      $('.contain2').append(arr[1]);
      $('.contain3').append(arr[2]);
      $('.contain4').append(arr[3]);
    }
    }
      
  });
  return pageno++; 
}
  