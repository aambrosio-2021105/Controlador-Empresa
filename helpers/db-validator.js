const Tipo = require('../models/tipo');
const Sucursal = require('../models/sucursal');
const Empresa = require('../models/empresas');

const existeEmpresaPorId = async(id) => {

    const existeEmpresa = await Empresa.findById(id);

    if ( !existeEmpresa ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}
const existeSucursalPorId = async(id) => {

    const existeSucursal = await Sucursal.findById(id);

    if ( !existeSucursal ) {
        throw new Error(`El id ${ id } no existe en la DB`);
    }

}
const empresaExiste = async(nombre = '')=>{
    const existeNombre = await Empresa.findOne( { nombre } );

    //Si existe (es true) lanzamos excepción
    if ( existeNombre ) {
        throw new Error(`El nombre: ${nombre } ya existe y esta registrado en la DB`);
    }
}
const tipoExiste = async(nombre = '')=>{
    const existeTipo = await Tipo.findOne( { nombre } );

    //Si existe (es true) lanzamos excepción
    if ( !existeTipo ) {
        throw new Error(`El nombre: ${nombre } no esta registrado en la DB`);
    }
}
const existeMunicip = async(ubicacio = '',next)=>{
    const municipios = [
        "amatitlán",
        "chinautla",
        "chuarrancho",
        "fraijanes",
        "guatemala",
        "mixco",
        "palencia",
        "san josé del golfo",
        "san josé pinula",
        "san juan sacatepéquez",
        "san miguel petapa",
        "san pedro ayampuc",
        "san pedro sacatepéquez",
        "san raymundo",
        "santa catarina pinula",
        "villa canales",
        "villa nueva"
    ];
    const ubicacion2 = ubicacio.toLowerCase();
    
    
    if(!municipios.includes(ubicacion2)){
        throw new Error(`El municipio: ${ubicacion2 } no esta registrado Guatemala`);
    }
    
    
}

module.exports = {
    existeEmpresaPorId,
    empresaExiste,
    existeSucursalPorId,
    tipoExiste,
    existeMunicip
}
