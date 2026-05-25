const alunos = [
  {
    nome: "Pedro",
    sobrenome: "Alcantara",
    mediaDasNotas: 7,
  },
  {
    nome: "Bruno",
    sobrenome: "Silva",
    mediaDasNotas: 8,
  },
  {
    nome: "Amanda",
    sobrenome: "Santos",
    mediaDasNotas: 8,
  },
  {
    nome: "Aline",
    sobrenome: "Ferroso",
    mediaDasNotas: 3,
  },
  {
    nome: "Mateus",
    sobrenome: "Moraes",
    mediaDasNotas: 7,
  },
  {
    nome: "Leandro",
    sobrenome: "Antunes",
    mediaDasNotas: 10,
  },
  {
    nome: "Silvia",
    sobrenome: "Camargo",
    mediaDasNotas: 9,
  },
  {
    nome: "Evandro",
    sobrenome: "Silveira",
    mediaDasNotas: 0,
  },
  {
    nome: "Marconio",
    sobrenome: "Lima",
    mediaDasNotas: 6,
  },
  {
    nome: "Adalberto",
    sobrenome: "Cavalcante",
    mediaDasNotas: 5,
  },
];

function listagemDeAlunos() {
  alunos.map((lista) => {
    return console.log(
      `${lista.nome} ${lista.sobrenome}, média das notas: ${
        lista.mediaDasNotas
      },
      situação: ${lista.mediaDasNotas < 7 ? "reprovado" : "aprovado"}`
    );
  });
}

listagemDeAlunos();
