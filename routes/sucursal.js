const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getSucursaById,getSucursal,postSucursal,putSucursal,deleteSucursal } = require('../controllers/sucursal');
const { validarCampos } = require('../middlewares/validar-campos');
//const { existeMunicip } = require('../middlewares/validar-municipios');
const {  existeSucursalPorId,existeMunicip} = require('../helpers/db-validator');
const router = Router();

router.get('/',[
    validarJWT,
    validarCampos
],getSucursal);


router.get('/:id',[
    validarJWT,
    validarCampos
],getSucursaById);


router.post('/agregar',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('ubicacio', 'La ubicacio es obligatorio').not().isEmpty(),
    check('ubicacio').custom(existeMunicip),
    validarCampos,
],postSucursal);

router.put('/editar/:id',[
    validarJWT,
    check('id').custom( existeSucursalPorId ), 
    check('id', 'No es un id de Mongo Válido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('ubicacio', 'La ubicacio es obligatorio').not().isEmpty(),
    validarCampos,
],putSucursal);

router.delete('/eliminar/:id', [
    validarJWT,
    check('id', 'No es un id de Mongo Válido').isMongoId(),
    check('id').custom( existeSucursalPorId ),
    validarCampos
] ,deleteSucursal);


module.exports = router;