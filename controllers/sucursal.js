const {response, request } = require('express');
const bcrypt = require('bcryptjs');
const Surusal = require('../models/sucursal');

const getSucursal = async (req = request, res = response) => {

    const query = { estado: true};   
    const listaSurusal = await Promise.all([
        Surusal.countDocuments(query).populate('nombre'),
        Surusal.find(query),
        
    ]);
    
    res.json({
        msg: 'get Api - Controlador Sucursal',
        listaSurusal,

    });
}

const getSucursaById = async (req = request, res = response) => {

    const {id} = req.params;

    const sucursal = await Surusal.findById(id);
   
    res.json({
        msg: 'get Api - Controlador Sucursal',
        sucursal,

    });
}

const postSucursal = async (req = request, res = response) => {
     //Desestructuracións
     const { nombre,ubicacio} = req.body;
 
     
    const data = {
        nombre:nombre,
        empresa:req.empresa.id,
        ubicacio:ubicacio.toLowerCase()
    }
    //Guardar en BD

    const sucursal = await Surusal(data);
     await sucursal.save();
  
 
     res.json({
         msg: 'Post Api - Post Alumnos',
         sucursal,
         
         
     });
 
}

const putSucursal = async (req = request, res = response) => {
    //Req.params sirve para traer parametros de las rutas
    const { id } = req.params;
    const {_id,...resto } = req.body; 

    //Editar al alumno por el id
    const sucursalEditado = await Surusal.findByIdAndUpdate(id, resto,{new:true});

    res.json({
        msg: 'PUT editar Sucursal',
        sucursalEditado
    });
}

const deleteSucursal = async (req = request, res = response) => {
    const { id } = req.params;

    //Eliminar fisicamente de la DB
    //const usuarioEliminado = await Usuario.findByIdAndDelete( id);

    //Eliminar cambiando el estado a false
    const sucursalEliminada = await Surusal.findByIdAndUpdate(id, { estado: false });
    
    res.json({
        msg: 'DELETE eliminar user',
        sucursalEliminada
    });
}

module.exports = {
    getSucursaById,
    getSucursal,
    postSucursal,
    putSucursal,
    deleteSucursal
}