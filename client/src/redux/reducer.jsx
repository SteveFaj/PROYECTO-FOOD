import { GET_ALL_RECIPES, GET_DIETS, GET_BY_NAME, GET_RECIPE } from "./actions";

const inicialState = {
    recipes: [],
    receta:[],
    diets: [],
    // byName:[],

};

const rootReducer = (state = inicialState, action)=>{
    switch(action.type){
        case GET_ALL_RECIPES:
            return{...state, recipes: action.payload};
        case GET_DIETS:
            return {...state, diets : action.payload };
        case GET_RECIPE:
            return {...state, receta: action.payload};
        case GET_BY_NAME:
            return {...state, recipes: action.payload};
        default:
            return {...state};           
};
};

export default rootReducer;