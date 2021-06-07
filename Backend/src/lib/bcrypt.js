//Archivo centralizado donde va la configuración de bcrypt para ocuparlo donde sea en el proyecto
const bcrypt = require('bcrypt')

//Sobre escribe la función hash que viene predefinida
function hash (plainText){
    return bcrypt.hash(plainText, 10)
}

//Exportamos todo lo que tiene bcrypt y la función hash sobreescrita!!!
module.exports = {
    ...bcrypt,
    hash
}