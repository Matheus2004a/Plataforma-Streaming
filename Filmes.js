var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BMTg5Mjg0MjgxMl5BMl5BanBnXkFtZTgwNjUzNDg0NzE@._V1_UX182_CR0,0,182,268_AL_.jpg",
  "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTQ0ODIyMzE1N15BMl5BanBnXkFtZTcwODEwODczMw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzRhNWIxYTEtYjc2NS00YWFlLWFhOGEtMDZiMWM1M2RkNDkyXkEyXkFqcGdeQXVyNjc0MjkzNjc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNTkzMzRlYjEtMTQ5Yi00OWY3LWI0NzYtNGQ4ZDkzZTU0M2IwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmMzBhZjE0Mjc1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZTg3OTczYmMtMWIxNi00NWIzLTg3ZjAtZjRkMTNkNGQ5Y2E0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZGE1MDg5M2MtNTkyZS00MTY5LTg1YzUtZTlhZmM1Y2EwNmFmXkEyXkFqcGdeQXVyNjA3OTI0MDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMDM4MzliYmQtNTNjYS00NzM4LWJhYjEtZWFiNWFmYTgzMmVkXkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_UY268_CR8,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BY2E3MzI3YzQtN2Y1Yi00ZTQxLWE1ODgtZjI0MDk5MTA0MTJhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR9,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var nomeListaFilmes = ["Toy Story", "A Onda", "Interestelar", "Show de vizinha", "Família Moderna", "A Grande Jogada", "Batman Begins", "A Origem", "Batman: O Cavaleiro das Trevas Ressurge", "A Rede Social", "La Casa de Papel", "Stranger Things", "Riverdale", "Vingadores: Ultimato", "Soul", "Chiquititas", "Unidade 42", "Velozes & Furiosos"]

/* A cada filme adicionado é preenchido no array filmes. O listaFilmes.length é igual a quantidade de elementos do array listaFilmes */
for (var i = 0; i < listaFilmes.length; i++) {
  for (var i = 0; i < nomeListaFilmes.length; i++) {
    document.write(`<picture class=container-lista-filmes>`)
    document.write(`<img class=img-lista-filmes src=${listaFilmes[i]} >`)
    document.write(`<h3 id=nome-lista-filmes> ${nomeListaFilmes[i]} </h3>`)
  }
}

/* Se a altura da janela for maior ou igual a 600 mostra o botão de voltar ao topo, senão ele não aparece */
const btnVoltaTopoPag = document.querySelector(".return-topo")
window.addEventListener("scroll", () => {
  scrollY >= 600 ? btnVoltaTopoPag.classList.add("show-button") : btnVoltaTopoPag.classList.remove("show-button")
})