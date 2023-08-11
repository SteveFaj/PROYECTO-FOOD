const {Recipe, Diet} = require("../db")
const axios = require("axios");
const {API_KEY}= process.env;

const getApiRecipes= async ()=>{
    const dataApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4b559c4cb96c4f208e7c4b43de66d693&addRecipeInformation=true&number=10`);
    const recApi= dataApi.data.results.map((rec)=>{
        const receta = {
            id: rec.id,
            title: rec.title,
            healthScore: rec.healthScore,
            image: rec.image,
            summary: rec.summary.replace(/<[^>]*>?/g, ""),
            steps: rec.analyzedInstructions[0]?.steps.map(e=>{
                return(e.step)
            }),
            diets: rec.diets.toString().split(','),
            created: false,
        }
        return receta;
    });

        return recApi;
        
};

const getDbRecipes = async ()=>{
 
    const dbRecipes = await Recipe.findAll({
        include:{
            model: Diet,
            attributes:["name"],
            through:{
                attributes:[]
            }
        }
    });

    const dbMap = await dbRecipes.map((rec)=>{
        const recetaDb = {
            id: rec.id,
            title: rec.title,
            healthScore: rec.healthScore,
            image: rec.image,
            summary: rec.summary,
            steps: rec.steps?.toString().split(',').map(e=>{
                return (e)
            }),
            diets: rec.diets.map(e=>{return e.name}).toString().split(','),
            created: true,
        }
        console.log(recetaDb, "recetaaa");
        return recetaDb;
    });
    console.log(dbMap, "dbMaaaap");
    return dbMap;
};

async function getAllRecipes(){
    const infoApi = await getApiRecipes();
    const InfoDb = await getDbRecipes();
    
    return [...infoApi, ...InfoDb];
}

 

const createRecipe = async (title, summary, healthScore, image, steps, diets)=>{
    const newRecipe = await Recipe.create({title, summary, healthScore, image, steps, diets});
    dietArray = diets.split(',');
    dietArray.map(async diet=>{
        const aggDiets = await Diet.findAll({
            where:{
                name: diet.trim()
            }
        })
        await newRecipe.addDiets(aggDiets);
    })
    return newRecipe;

};

const getRecipeById = async (id, source)=>{
    
    const datosApi = await getApiRecipes();
    let recipe = source === "api" ? await datosApi.filter((e)=>e.id == id) : await Recipe.findByPk(id);

    return recipe; 

};

const searchRecipeByName = async (name)=>{
    const allRecets = await getAllRecipes();
    const nameFilter = allRecets.filter(e => e.title.toLowerCase().includes(name.toLowerCase()));

    if(nameFilter.length){
        return nameFilter;
    }else{
        return "Dont exist Match";
    }
}

module.exports={getAllRecipes, createRecipe, getRecipeById, searchRecipeByName}