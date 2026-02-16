var express = require('express');
var router = express.Router();

const pokecontroles = require ('../controllers/poke-controles');

router.get('/todos', pokecontroles.listapokemons);
router.get('/todos/:id', pokecontroles.listarperid);
router.get('/todos/nom/:nom', pokecontroles.listarpernom);
router.get('/todos/tipo', pokecontroles.listarpertipo);

//router.get('/mayores', niñoControler.listarniñosmallores);
//router.get('/menores', niñoControler.listarniñosmenores);
module.exports = router;
