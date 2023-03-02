const { Router } = require('express');
const { check } = require('express-validator');

//Controllers
const { login } = require('../controllers/auth');

const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

//Manejo de rutas
router.post('/login', [
    check('nombre', 'El nombre no es valido').not().isEmpty(),
    check('password', 'La password es obligatoria').not().isEmpty(),
    validarCampos,
] ,login);


module.exports = router;