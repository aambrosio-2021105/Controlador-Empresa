const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const {  postEmpresa,putEmpresa,deleteEmpresa,getEmpresa,getEmpresaById } = require('../controllers/empresa');
const { validarCampos } = require('../middlewares/validar-campos');

const {  existeEmpresaPorId, empresaExiste,tipoExiste} = require('../helpers/db-validator');
const router = Router();
router.get('/',[

],getEmpresa);
router.get('/ById',[
    validarJWT,
    validarCampos
],getEmpresaById);
router.post('/agregar',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La password es obligatorio').not().isEmpty(),
    check('tipo', 'La password es obligatorio').not().isEmpty(),
    check('tipo').custom(tipoExiste),
    check('nombre').custom(empresaExiste),
    validarCampos,
],postEmpresa);

router.put('/editar',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'La password es obligatorio').not().isEmpty(),
    check('tipo', 'La password es obligatorio').not().isEmpty(),
    check('tipo').custom(tipoExiste),
    check('nombre').custom(empresaExiste),

    validarCampos,
],putEmpresa);

router.delete('/eliminar', [
    validarJWT,

    validarCampos
] ,deleteEmpresa);





module.exports = router;