var bookObject={};
var pageno;
var stringNew="" ;
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
    for(i = 0; i < bookObject.Books.length; i++) { 
      if(bookId == bookObject.Books[i].ID){
        modal.style.display = "block";          
        $(".img1").attr("src",[bookObject.Books[i].Image]);
        $(".title").text(bookObject.Books[i].Title);
        $(".id").text(bookId);
        $(".isbn").text(bookObject.Books[i].isbn);
        $(".description").text(bookObject.Books[i].Description);
      }
    }
  });

});
function loadData(string,page) {
 // if (string.match(stringNew)){
    pageno = parseInt(page);
  //}
  //else {
  //  pageno = 1;
  // }
  stringNew = string;
  var cell;
  var arr = ["","","",""];
  var str="http://it-ebooks-api.info/v1/search/" + stringNew + "/page/" + pageno;
  console.log(str);
  $.getJSON(str,function( data ){
  var array=[];
  bookObject=data;
    
    var limit = bookObject.Total/ 10;
      if (pageno < limit){
  for(i=0; i < bookObject.Books.length; i++){
    array[i] = bookObject.Books[i];
    var cell= "<div class=\"cell\">" +
              "<img src=" + array[i].Image + " class=\"image\"/>" +  
              "<p class=\"titleP\">" + array[i].Title + "</p>" +
              "<p class=\"desc\">" + array[i].Description + "</p>" +
              "<button data-book-id=" + array[i].ID + ">Want        More</button>" +
              "</div>"
     
      remainder = i % 4;
      arr[remainder] = arr[remainder].concat(cell);
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
  