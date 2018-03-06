

$('#search').click(function() {
  console.log('search');

  var search = $('[name=searchTerm]').val();


  var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

  url += '?' + $.param({
    'api-key': "be4c7100e491487087c4aaec5f31fc4c",
    q: search
  });

  $.ajax({
    url: url,
    method: 'GET',
  }).done(function(result) {
  
    
    console.log(result);
  }).fail(function(err) {
    throw err;
  });
});
