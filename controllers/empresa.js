const {response, request } = require('express');
const bcrypt = require('bcryptjs');
const Empresea = require('../models/empresas');
const Sucursal = require('../models/sucursal');
 
const getEmpresa = async (req = request, res = response) => {

    const query = { estado: true};   
    const listaEmpresas = await Promise.all([
        Empresea.countDocuments(query),
        Empresea.find(query),
        
    ]);
    
    res.json({
        msg: 'get Api - Controlador Empresa',
        listaEmpresas,

    });
}
const getEmpresaById = async (req = request, res = response) => {
    const _idEmpresa = req.empresa.id;
    const query = { estado: true,empresa:_idEmpresa};   
    const listaEmpresas = await Promise.all([
        Sucursal.countDocuments(query),
        Sucursal.find(query),
        
    ]);
    
    res.json({
        msg: 'get Api - Controlador Empresa',
        listaEmpresas,

    });
}
const postEmpresa = async (req = request, res = response) => {
    //Desestructuración

    const { nombre, password, tipo,nieveles} = req.body;
    const EmpresaGuardadoDB = new Empresea({nombre, password, tipo, nieveles });

    //Encriptar password
    const salt = bcrypt.genSaltSync();
    EmpresaGuardadoDB.password = bcrypt.hashSync(password, salt);

    //Guardar en BD
    await EmpresaGuardadoDB.save();
 

    res.json({
        msg: 'Post Api - Post Alumnos',
        EmpresaGuardadoDB,
        
        
    });

}

const putEmpresa = async (req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const _idEmpresa = req.empresa.id
    const { ...resto} = req.body;
    //Los parametros img, rol, estado y google no se modifican, el resto de valores si (nombre, correo y password)

    //Si la password existe o viene en el req.body, la encripta
    if ( resto.password ) {
        //Encriptar password
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(resto.password, salt);
    }

    //Editar al alumno por el id
    const EmpresaEditado = await Empresea.findByIdAndUpdate(_idEmpresa, resto, { new: true });

    res.json({
        msg: 'PUT editar Empresa',
        EmpresaEditado
    });
}  
const deleteEmpresa = async(req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const _idEmpresa = req.empresa.id

    
     const EmpreseaEliminado = await Empresea.findByIdAndUpdate(_idEmpresa, { estado: false });
    
    res.json({
        msg: 'DELETE eliminar user',
        EmpreseaEliminado
    });
}

module.exports = {
    postEmpresa,
    putEmpresa,
    deleteEmpresa,
    getEmpresa,
    getEmpresaById
}