// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado


$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {
    for (let i = 0; i < resposta.results.length; i++) {
      $('#movieslist').append('<li class=\"episodio\" id=\"itemepisodio'+resposta.results[i].episode_id
      +'\" data-episode-url=\"'+resposta.results[i].url+'\">Episode '+
      resposta.results[i].episode_id +' - '+resposta.results[i].title+'</li>');
    }
  }
}).done(function(resposta){
  for (let i = 0; i < resposta.results.length; i++) {
    let item = document.querySelector('#itemepisodio'+resposta.results[i].episode_id);

    item.addEventListener('click', function(e) {
      $.ajax({
        url: item.getAttribute('data-episode-url'),
        method: 'GET',      // opcional: 'GET' é o valor padrão
        success: function(resp) {
          document.getElementById("texto").innerHTML = "Episode "+resp.episode_id+"<br/>"+resp.opening_crawl;
        }
      });
    });
  }

});



/*for (let i = 0; i < resposta.results.length; i++) {
  botoesExpandir[i].addEventListener('click', function(e) {

  }
});*/

/*let requestFilmes = new XMLHttpRequest();
requestFilmes.open('GET', 'http://swapi.co/api/films/', true);
requestFilmes.send(null);


for (let i = 0; i < requestFilmes.length; i++) {
  $('#movieslist').append('<li>'+requestFilmes.title+'</li>');
}*/
