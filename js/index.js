const listaSelecaoPokemon = document.querySelectionAll('.pokemon')
const pokemonsCards = document.querySelectionAll('.cartao-pokemon')

var audioMouseOver = document.getElementsByClassName('soundMouseOver')[0];
var audioClick = document.getElementsByClassName('soundClick')[0];

listaSelecaoPokemon.forEach(pokemon => {
  pokemon.addEventListener('click', () => {
    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')
    const idPokemonSelecionado = pokemon.attributes.id.value
    const idCardSelecionado = 'card-' + idPokemonSelecionado
    const cartaoPokemonAbrir = document.getElementById(idCardSelecionado)
    cartaoPokemonAbrir.classList.add('aberto')

    const listaPokemonAnterior = document.querySelector('.ativo')
    listaPokemonAnterior.classList.remove('ativo')
    listaPokemonAnterior.classList.add('desativado')
    const listaPokemonPosterior = document.getElementById(idPokemonSelecionado)
    listaPokemonPosterior.classList.add('ativo')
    listaPokemonPosterior.classList.remove('desativado')
  })

  pokemon.addEventListener('mouseenter', () => {
    audioMouseOver.currentTime = 0;
    audioMouseOver.volume = 0.1;
    audioMouseOver.play();
  })

  pokemon.addEventListener('click', () => {
    audioMouseOver.currentTime = 0;
    audioMouseOver.volume = 0.1;
    audioMouseOver.play();
  })
})
