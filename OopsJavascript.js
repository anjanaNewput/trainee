function gridContent(){
  var booksObject={};
  var pgNo,bookN;
  var jsonArray = [];
  var counter = [0,0,0,0];
  var template = $('#template').html();
  Mustache.parse(template);
  this.initialize = function(){
    getAjax("php",1);
    getEvent();
    //showImage();
  }
  getAjax = function(bookName,pageNo) {
    pgNo = pageNo;
    bookN = bookName;
    if(pgNo == 1){ 
      counter = [0,0,0,0];
      jsonArray = []; 
    }
    var str="http://it-ebooks-api.info/v1/search/" + bookN + "/page/" + pgNo;
    pgNo++;
    $.getJSON(str,function( data ){
      booksObject = data;
      var limit = Math.ceil(booksObject.Total/10);
      if (pgNo < limit){
        var array = [];
        var arr = ["","","",""]
        for(i = 0; i < booksObject.Books.length; i++){
          array[i] = booksObject.Books[i];
          var cell = Mustache.render(template,array[i]);
          jsonArray.push(array[i]);
          loc = minimum();
      arr[loc] = arr[loc].concat(cell);
      counter[loc]++;
        }
        for(j = 0; j < 4; j++)
        { 
          if(pgNo == 2) {
            $(".contain"+j).html(arr[j]);
          }
          else {
            $(".contain"+j).append(arr[j]);
          }
        }
      }
    });
  }
  function minimum(){
    var min, k, loc;
    min = counter[0];
    loc = 0;
    for(k = 1; k < 4; k++){ 
      if(min > counter[k]){
        min = counter[k];
        loc = k;
      }     
    }
   return loc;
  };

  getEvent = function(){
    var modal =document.getElementsByClassName('modal')[0]; 
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
      if ($(window).scrollTop() + $(window).height() >= $(document).height())
      {
        getAjax(bookN,pgNo);
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
    $("li a").click(function(){
      var nameOfBook = this.getAttribute("data-bookName");
      console.log(nameOfBook);
      getAjax(nameOfBook,1);
    });

    $('body').on("myCustomEvent",".image",function(event){
      console.log("hiii");
      var url = this.getAttribute("data-image-id");
      console.log(url);
      for(i = 0; i < jsonArray.length; i++){
        if(url == jsonArray[i].Image){
          $(this).attr("src",[jsonArray[i].Image]);
        }
      }
    });
    $(window).scroll( function(){
      $(".image").trigger("myCustomEvent");  
    });
  }
  //showImage = function(){
    //for(i = 0; i < $(".image").length; i++ ){
      //console.log($(".image").length);
      //if($(".image").eq(i).offset <= $(window).height()){
      //  console.log($(".image").eq(i).offset());
       // $(".image").trigger("myCustomEvent");
      //}
   // }
  //}
};
