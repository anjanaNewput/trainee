
var booksObject={};
var pageNo;
var bookName="" ;
var jsonArray=[];


var gridContent = function(bookName,pageNo){
  this.bookName = bookName;
  this.pageNo = pageNo;
  this.initialize = initialize;

function initialize(){
   getAjax();
  
}

function getAjax(){
  var str="http://it-ebooks-api.info/v1/search/" + bookName + "/page/" + pageNo;
  pageNo++;
  $.getJSON(str,function( data ){
  booksObject = data;
  var limit = booksObject.Total/10;
    if (pageNo < limit){
       getHtml();
    }
  });
}

function getHtml(){
    var array=[];
    var arr=["","","",""]
  var template = $('#template').html();
   Mustache.parse(template);
    for(i = 0; i < booksObject.Books.length; i++){
        array[i] = booksObject.Books[i];
        var cell = Mustache.render(template,array[i]);
        jsonArray.push(array[i]);
        var remainder = i%4
         arr[remainder] = arr[remainder].concat(cell);
            
          
          
            
          
        }
    if (pageNo == 1){
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
   getEvent();
  }

function getEvent(){
  var modal = $('.model').html();
  var span = $(".close").html();
   $(span).click(function() {
      $(".modal").hide();
    });
  
    $(document).click(function(event) {
      if (event.target == modal) {
        $(".modal").hide();
      }
    });
  
    $("a").click(function(){
      $("a").removeClass("active");
      $(this).addClass("active");
    });
  
    $(window).scroll( function(){
      if ($(window).scrollTop() + $(window).height() >=      $(document).height())
      {
        initialize(bookName,pageNo);
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
          $(".modal").show(); 
        }
      }
    });
}
  
};
