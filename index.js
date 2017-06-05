// runs the getArticles function when the user clicks the submit button

$("#submit").on('click', function(e){
  e.preventDefault();
  var txt = $("#search-bar").val();
  getArticles(txt);
});

// the function also needs to run if the user enters a search term and hits enter

$("#search-bar").keyup(function(event){    
  if(event.which === 13){
    var txt = $("#search-bar").val();
    getArticles(txt);
  }
});

// function to call the Wikipedia API and format the results correctly in the browser. 
function getArticles() {
  var txt = $("#search-bar").val();
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + txt + "&callback=?", function(data) {
    // console.log(data);
    $("#results").empty();
    for (i = 0; i < 10; i++) {
      $("#results").append('<div class="col-sm-12 entry"><a href="' + "https://en.wikipedia.org/wiki/" + data.query.search[i].title + '"></a><h1>' + data.query.search[i].title + '</h1><p>' + data.query.search[i].snippet + '...</p></div>');
    }
  });
  
  // shrink the search section of the page to and give room to append the articles.
  $(".search").css("height", "25vh");
}
