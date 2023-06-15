import { openDB } from './config/db.js'
import { SELECT_OCORRENCIA, SELECT_OCORRENCIA_LOCAL, SELECT_VITIMA, } from './config/queries.js';

(async () => {
    const db = await openDB()
    
    console.log("Vítimas com Idade entre 30 e 50 anos");
    let results = await db.all(SELECT_VITIMA)
    console.log(results)
  
    console.log("Vítima(s) que sofreram Feminicídio");
    results = await db.all(SELECT_OCORRENCIA)
    console.log(results)

    console.log("Ocorrência(s) no mesmo local");
    results = await db.all(SELECT_OCORRENCIA_LOCAL)
    console.log(results)
})()