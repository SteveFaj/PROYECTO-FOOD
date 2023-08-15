import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const GET_BY_NAME = "GET_BY_NAME";
export const FILTER_ALPHA = "FILTER_ALPHA";
export const FILTER_SCORE = "FILTER_SCORE";
export const FILTER_DIETS = "FILTER_DIETS";
export const FILTER_CREATED = "FILTER_CREATED";


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
            payload: coincidencias
        });

    };
};

export const filterAlpha=(order)=>{
    return{
        type:FILTER_ALPHA,
        payload: order
    };
};

export const filterScore = (score)=>{
    return{
        type:FILTER_SCORE,
        payload:score
    };
};

export const filterDiets = (diet) =>{
    return{
        type: FILTER_DIETS,
        payload: diet
    };
};

export const filterCreated = (raiz)=>{
    return{
        type: FILTER_CREATED,
        payload: raiz
    };
};

