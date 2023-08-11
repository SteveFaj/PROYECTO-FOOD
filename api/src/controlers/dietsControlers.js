const {Diet} = require ("../db");
const axios = require("axios");

const getDiets = async ()=>{
    const dbDiets = await Diet.findAll();
    if(dbDiets.length <=0){
        const apiDiets = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=4b559c4cb96c4f208e7c4b43de66d693&addRecipeInformation=true&number=10`);
        const mapApiDiets = apiDiets.data.results.map(element=> element.diets);
        const revision = mapApiDiets.toString().split(",");
        const revision1 = revision.filter(e=> e !== "");
        const arrayFiltrado = new Set(revision1); 
        const result = [...arrayFiltrado];

        result.forEach((diet)=>{
            Diet.findOrCreate({
                where:{name: diet}
            })
        });
        return result
    }else{
        return dbDiets;
    };
};
       

    module.exports ={getDiets};
