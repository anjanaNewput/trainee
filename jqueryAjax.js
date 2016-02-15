var bookObject={};
var obj={};
$(document).ready(function(){
$("a").click(function(){
    $("a").removeClass("active");
    $(this).addClass("active");
     
  });

/*$("document").on("click",".b1", function(){
           $(".b1").data(bookObject);
          console.log($(this).bookObject);
       //$(".b1").click(function(){
         for(var j=0; j < bookObject.Books.length; j++) {
              $(".b1").data(Books[j].Object.ID);
              
          if(bookObject.Books.ID=="data-book-id"){
                console.log( $( this ).Books[j].Object);
           }
         }
     //}
        });*/
  $('body').on("click", ".b1", function(){
          $(this).data(bookObject.Books);
      var bookId = this.getAttribute("data-book-id");
     for(i = 0; i < bookObject.Books.length; i++) 
     { if(bookId == bookObject.Books[i].ID)
        {    console.log(bookId);
             console.log(bookObject.Books[i].Title);
             console.log(bookObject.Books[i].Image);
             console.log(bookObject.Books[i].Description);
             console.log(bookObject.Books[i].isbn);
          obj=bookObject.Books[i].Object;
        }
         console.log($(this).data(obj));
      }
   
    
   });
});
function loadData(string) {
var cell;
var arr = new Array("","","","");
var str="http://it-ebooks-api.info/v1/search/".concat(string);
 $.getJSON(str,function( data ){
 var array=[];
  bookObject=data;
 for(i=0; i < bookObject.Books.length; i++){
        array[i] = bookObject.Books[i];
        var cell= "<div class=\"cell\">" +
          "<img src=" + array[i].Image + " />" +
          "<p> ISBN No :" + array[i].isbn + "</p>" +  
          "<p> TITLE :" + array[i].Title + "</p>" +
          "<p> DESCRIPTION :" + array[i].Description + "</p>" +
          "<button class=\"b1\" data-book-id=" + array[i].ID + ">Want More</button>" +
                  "</div>"
       if(i<4) {
        arr.push(cell);
        }
        else {
          remainder = i % 4;
          arr[remainder] = arr[remainder].concat(cell);
        }
     }
  document.getElementById('contain1').innerHTML = arr[0];
  document.getElementById('contain2').innerHTML = arr[1];
  document.getElementById('contain3').innerHTML = arr[2];
  document.getElementById('contain4').innerHTML = arr[3];
});
  
}
