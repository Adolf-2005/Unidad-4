const { v4: uuidv4 } = require('uuid');

const estudiantes = [
    {
        id: uuidv4(),
        nombre: "Alonso Moreno",
        edad: 23,
        carrera: "Ingeniería Industrial"
    }
]

module.exports = estudiantes;
