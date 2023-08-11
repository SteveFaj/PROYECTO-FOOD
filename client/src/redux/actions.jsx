import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_BY_NAME = "GET_BY_NAME";

export const getAllRecipes = ()=>{
    return async function(dispatch){
        const dataRecipes = await axios.get("http://localhost:3001");
        const recipes = dataRecipes.data;
        dispatch({
            type:GET_ALL_RECIPES,
            payload: recipes
        });
    };
};

export const getRecipe = (id)=>{
    return async function(dispatch){
        const uniRecipe =  await axios.get(`http://localhost:3001/${id}`);

        const receta = uniRecipe.data;

        dispatch({
            type:GET_RECIPE,
            payload: receta
        });

    };
};

export const getDiets= ()=>{
    return async function(dispatch){
        const dataDiets = await axios.get('http://localhost:3001/diets');
        const diets = dataDiets.data;

        dispatch({
            type:GET_DIETS,
            payload: diets
        });

};
};

export const getByName = (name)=>{
    return async function (dispatch){
        const byName = await axios.get(`http://localhost:3001/?name=${name}`);
        const coincidencias = byName.data;

        dispatch({
            type : GET_BY_NAME,
            payload:coincidencias
        })

    }
}


