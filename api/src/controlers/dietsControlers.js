const {Diet} = require ("../db");
const {API_KEY} = process.env;
const axios = require("axios");


const getDiets = async () => {
    const dbDiets = await Diet.findAll();
        if(dbDiets.length <= 0){
          const apiDiets = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=10`);
          const mapApiDiets = apiDiets.data.results.map(element=> element.diets);
          const revision = mapApiDiets.toString().split(",");
          const revision1 = revision.filter(e=> e !== "");
          const arrayFiltrado = new Set(revision1); 
          const result = [...arrayFiltrado];

        result.forEach((diet) => {
            Diet.findOrCreate({
                where:{name: diet}
            })
        });
        return result
    }else{
        return dbDiets;
    };
};
       

    module.exports = {getDiets};
