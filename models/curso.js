const { Schema, model } = require('mongoose');
const Usuario = require('../models/usuario')

const cursoSchema = Schema({
    nombreCurso: {
        type: String,
        required: [true, 'El nombre del curso es obligatorio' ],
    },
    usuario: [{
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }],
    estado: {
        type: Boolean,
        default: true
    },
});


module.exports = model('Curso', cursoSchema);