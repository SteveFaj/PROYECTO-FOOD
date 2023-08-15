const {getAllRecipes, createRecipe, getRecipeById, searchRecipeByName} = require("../controlers/recipeControlers");
const {getDiets} = require("../controlers/dietsControlers");


const getAllDietsHandler = async (req, res)=>{
    try{
        const diets = await getDiets();
        res.status(200).json(diets);

    }catch(error){
        res.status(400).json({error: error.message})
    }

}

const getAllRecipeHandler = async(req, res)=>{
    
    try{
        const {name}= req.query;
        const recipes = name ? await searchRecipeByName(name) : await getAllRecipes();
        res.status(200).json(recipes);

    }catch(error){
        res.status(400).json({error: error.message})

    }

};

const createRecipeHandler = async (req, res)=>{
 try{
    const {title, summary, healthScore, image,  steps, diets,} = req.body;
    console.log(diets, "dietts");
    const nuevaRecipe = await createRecipe(title, summary, healthScore, image, steps, diets );
    res.status(201).json("Creado Exitosamente");

 }catch(error){
    res.status(400).json({error: error.message})
 }
};

const getDetailRecipeHandler =async (req, res)=>{
    const {id} = req.params;
    const source = isNaN(id) ? "bdd" : "api";
     try{
        const recipe = await getRecipeById(id, source);
        res.status(200).json(recipe);
     }catch(error){
        res.status(400).json({error: error.message});
     };     

};




module.exports = {getAllRecipeHandler, createRecipeHandler, getAllDietsHandler, getDetailRecipeHandler};