const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllRecipeHandler, createRecipeHandler, getAllDietsHandler, getDetailRecipeHandler} = require("../handlers/RecipeHandlers")
const {validate} = require("../middleware/validate");

const router = Router();

router.get('/', getAllRecipeHandler);

router.get('/diets', getAllDietsHandler);

router.get('/:id', getDetailRecipeHandler);

router.post('/recipes', validate, createRecipeHandler);



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
