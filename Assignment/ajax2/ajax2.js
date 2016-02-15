function loadData(string) {
  var xhttp,txt,i,x,y;
  var array=new Array();
  var arr = new Array("","","","");
  var remainder;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(xhttp.readyState == 4 && xhttp.status == 200){
      var txt = xhttp.responseText;
      x = JSON.parse(txt);
      for(i=0; i < x.Books.length; i++){
        array[i] = x.Books[i];
        var cell= "<div>" +
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
    }
  
  document.getElementById('contain1').innerHTML = arr[0];
  document.getElementById('contain2').innerHTML = arr[1];
  document.getElementById('contain3').innerHTML = arr[2];
  document.getElementById('contain4').innerHTML = arr[3];

  };
  var str = "http://it-ebooks-api.info/v1/search/".concat(string);
  xhttp.open("GET",str,true);
  xhttp.send();
}
