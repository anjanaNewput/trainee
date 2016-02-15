function loadData(string) {
var cell,arr=["","","",""];
var str="http://it-ebooks-api.info/v1/search/".concat(string);
 $.getJSON(str,function( data ){
 var array=[];
 for(i=0; i < data.Books.length; i++){
        array[i] = data.Books[i];
        var cell= "<div class=\"cell\">" +
          "<img src=" + array[i].Image + " />" +
          "<p> ISBN No :" + array[i].isbn + "</p>" +  
          "<p> TITLE :" + array[i].Title + "</p>" +
          "<p> DESCRIPTION :" + array[i].Description + "</p>" +
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
$("a").click(function(){
    $(this).addClass()
  });