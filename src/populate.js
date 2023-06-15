import { openDB } from "./config/db.js"
import {
  CREATE_TABLE_VITIMA,
  CREATE_TABLE_OCORRENCIA,
  INSERT_VITIMA,
  INSERT_OCORRENCIA,
} from "./config/queries.js"

const vitimas = [
  {
    id: 1,
    nome: "Marcelo",
    idade: "19",
    genero: "Masculino",
  },
  {
    id: 2,
    nome: "Maria Aparecida",
    idade: "27",
    genero: "Feminino",
  },
  {
    id: 3,
    nome: "Rebeca",
    idade: "42",
    genero: "Feminino",
  },
];
const ocorrencias = [
  {
    id: 1,
    descricao: "Violência Verbal",
    endereco: "Rua Pereira Ferreira Bandeira, N89",
    id_vitima: 3,
    obito: false,
  },
  {
    id: 2,
    descricao: "Feminicídio",
    endereco: "Rua Estevão Alves Côrrea, N183",
    id_vitima: 3,
    obito: true,
  },
  {
    id: 3,
    descricao: "Feminicídio",
    endereco: "Rua Delfino Alves Côrrea, N63",
    id_vitima: 2,
    obito: true,
  },
  {
    id: 4,
    descricao: "Sequestro Relâmpago",
    endereco: "Rua Joaquim Passos, N55",
    id_vitima: 2,
    obito: false,
  },
  {
    id: 5,
    descricao: "Invasão de Terras",
    endereco: "Chácara Cintra, Próximo Ao Trevo de Anastácio",
    id_vitima: 1,
    obito: false,
  },
  {
    id: 6,
    descricao: "Tentativa de Assalto",
    endereco: "Rua Delfino Alves Côrrea, N63",
    id_vitima: 1,
    obito: false,
  },
];

(async () => {
  const db = await openDB();
  await db.exec(CREATE_TABLE_VITIMA)
  await db.exec(CREATE_TABLE_OCORRENCIA)

/*  await db.exec(TRUNCATE_ESPECIME);
  await db.exec(TRUNCATE_ESPECIE);*/

  for (let i = 0; i < vitimas.length; i++) {
    const { id, nome, idade, genero } = vitimas[i]

    console.log({ id, nome, idade, genero })

    await db.run(
      INSERT_VITIMA,
      id,
      nome,
      idade,
      genero
    )

    console.log(`Vítima #${i + 1} criada`)
  }

  for (let i = 0; i < ocorrencias.length; i++) {
    const { id, descricao, endereco, id_vitima, obito } = ocorrencias[i];

    console.log({
      id,
      descricao, 
      endereco, 
      id_vitima, 
      obito,
    })

    await db.run(
        INSERT_OCORRENCIA, 
        id, 
        descricao, 
        endereco, 
        id_vitima, 
        obito
    )
    
    console.log(`Ocorrência #${i + 1} criada`)
  }

})()