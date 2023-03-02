const { Schema, model } = require('mongoose');

const EmpresaSchema = Schema({
    nombre: {
        type: String,
        required: [true , 'El nombre es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true , 'La passowrd es obligatorio']
    },
    estado: {
        type : Boolean,
        default : true
    },
    tipo: {
        type:String,
        required: true

    },
   
    nieveles: {
        type: Number,
        
    },
});


module.exports = model('Empresa', EmpresaSchema);