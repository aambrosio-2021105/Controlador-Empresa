const { Schema, model } = require('mongoose');
 
const SucursalSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    empresa: {
        type: Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true

    },
    ubicacio: {
        type:String,
        required: true

    },
    estado: {
        type:Boolean,
        default:true,
        required: true

    },
});


module.exports = model('Sucursale', SucursalSchema);