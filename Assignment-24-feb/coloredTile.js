$(document).ready( function(){
  var arrayOfColor = [ "#FFEBCD","#0000FF","#8A2BE2","#A52A2A","#DEB887",
                      "#5F9EA0","#7FFF00","#D2691E","#FF7F50","#6495ED","#FFF8DC","#DC143C","#00FFFF",	                                     "#00008B","#008B8B","#B8860B","#A9A9A9","#006400","#BDB76B","#8B008B",
                      "#556B2F","#FF8C00","#9932CC","#8B0000","#E9967A","#8FBC8F","#483D8B","#2F4F4F",	                                     "#2F4F4F","#00CED1","#9400D3","#FF1493","#00BFFF",	"#696969","#696969","#1E90FF",                                     "#B22222","#FFFAF0","#228B22","#FF00FF","#DCDCDC","#F8F8FF","#FFD700", 
                      "#2F4F4F","#00CED1","#9400D3","#FF1493","#00BFFF","#696969","#696969","#1E90FF",                                     "#B22222","#FFFAF0","#228B22","#FF00FF","#DCDCDC","#F8F8FF","#FFD700" ];
  var index = 0;
  var template = $('#template').html();
  Mustache.parse(template);
  var heading = $(".heading").text();
  var introduction = $(".description").text();
  function showTile (){
    console.log(template);
    var data ={
      image: "flag.png",
      title: heading,
      description: introduction,
      color: index
    }
    console.log(data);
    var cell =Mustache.render(template,data);
    $(".new-cell").append(cell);
    $("#"+index).css("background-color",arrayOfColor[index]);
    }
  $(".click-button").click(function(){
    showTile();
    index++; 
  });
});