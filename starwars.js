let textoInicial = window.localStorage.getItem('textoInicial');
document.getElementById('texto').innerHTML = textoInicial;


$.ajax({
  url: 'http://swapi.co/api/films/',
  method: 'GET',      // opcional: 'GET' é o valor padrão
  success: function(resposta) {
    for (let i = 0; i < resposta.results.length; i++) {
      $('#movieslist').append('<li class=\"episodio\" id=\"itemepisodio'+resposta.results[i].episode_id
      +'\" data-episode-url=\"'+resposta.results[i].url+'\">Episode '+
      resposta.results[i].episode_id +' - '+resposta.results[i].title+'</li>');
      if (i===0 && textoInicial===null) {
      		document.getElementById("texto").innerHTML = "Episode "+resposta.results[i].episode_id+
      		"<br/>"+resposta.results[i].opening_crawl;
      }
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
      }).done(function(){
      	window.localStorage.setItem('textoInicial', document.getElementById("texto").innerHTML);
      });
    });
  }

});

