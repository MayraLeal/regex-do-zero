const fs = require('fs')
const bancoCsv = 'database.csv'
const banco = fs.readFileSync(bancoCsv, "utf-8")

const regexTelefone = /\(\d+\)\s\d+-\d+/g

const matchTelefone = banco.match(regexTelefone)
console.log(matchTelefone);