const { Schema, model } = require('mongoose');

const TiposSchema = Schema({
    nombre: {
        type: String,
        required: [true , 'El tipo es obligatorio']
    },
});


module.exports = model('Tipo', TiposSchema);