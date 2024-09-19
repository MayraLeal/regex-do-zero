const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const patternNomes = /^([A-Za-zÀ-ÿ]+)(?:\s([A-Za-zÀ-ÿ]+))+/gm


const matchNomes = banco.match(patternNomes)
console.log(`Todos os Nomes:`, matchNomes);