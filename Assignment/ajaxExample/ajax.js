function loadData() {
 var xhttp,xmlDoc,txt,i,x,y;
 var array=new Array();
   var row1="",row2="",row3="",row4="";
 xhttp=new XMLHttpRequest();
 xhttp.onreadystatechange= function() {
  if(xhttp.readyState==4 && xhttp.status==200){
    var txt=xhttp.responseText;
      x = JSON.parse(txt);
      for(i=0; i < x.Books.length; i++){
        array[i] = x.Books[i];
          
        var cell= "<div>" +
                   "<p> ID :" + array[i].ID + "</p>" +
                   "<p> TITLE :" + array[i].Title + "</p>" +
                   "<p> DESCRIPTION :" + array[i].Description + "</p>" +
                   "<p> ISBN No :" + array[i].isbn + "</p>" +  
                   "<img src=" + array[i].Image + " />" +
                   "</div>"
           if (i % 4==0){
             row1 = row1.concat(cell);
           }
          else if (i%4==1) {
              row2=row2.concat(cell);
          }
           else if(i%4==2) {
              row3=row3.concat(cell);
          }
          else {
             row4=row4.concat(cell);
          }
          
      }
  }
       document.getElementById('contain1').innerHTML=row1;
    document.getElementById('contain2').innerHTML=row2;
      document.getElementById('contain3').innerHTML=row3;
      document.getElementById('contain4').innerHTML=row4;
  }
 
 xhttp.open("GET","http://it-ebooks-api.info/v1/search/php%20mysql/page/3",true);
 xhttp.send();
}