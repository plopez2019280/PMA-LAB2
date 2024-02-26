const { Router } = require('express');
const { check } = require('express-validator');
const { postCurso, putCurso, deleteCurso, putAsignCursos,getCurso, getCursosAsignados} = require('../controllers/curso');
const { validarJWT } = require('../middlewares/validation-jwt');
const { tieneRole } = require('../middlewares/validation-roles');
const { validarCampos } = require('../middlewares/validation-campo');

const router = Router();

router.get('/mostrar', [
    check('usuario', 'No es un ID válido').isMongoId(),
    validarCampos
],getCurso);

router.post('/agregar', [
    validarJWT,
    tieneRole('MAESTRO_ROL'),
] ,postCurso);

router.put('/editar/:id', [
    validarJWT,
    tieneRole('MAESTRO_ROL'),
] ,putCurso);

router.delete('/eliminar/:id', [
    validarJWT,
    tieneRole('MAESTRO_ROL'),
] ,deleteCurso);

module.exports = router;