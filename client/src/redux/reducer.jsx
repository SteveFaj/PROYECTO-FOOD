import { GET_ALL_RECIPES, 
    GET_DIETS,
     GET_BY_NAME, 
     GET_RECIPE,
     FILTER_ALPHA ,
    FILTER_SCORE, 
    FILTER_DIETS, 
    FILTER_CREATED} from "./actions";

const inicialState = {
    recipes: [],
    recipesPrueba:[],
    receta:[],
    diets: [],
    // byName:[],

};

const rootReducer = (state = inicialState, action)=>{
    switch(action.type){
        case GET_ALL_RECIPES:
            return{...state,
                 recipes: action.payload,
                 recipesPrueba: action.payload};

        case GET_DIETS:
            return {...state, 
                diets : action.payload };

        case GET_RECIPE:
            return {...state,
                 receta: action.payload};

        case GET_BY_NAME:
            return {...state, 
                recipes: action.payload};

        case FILTER_ALPHA:
            let alphaSort =
        action.payload === 'az'
          ?  state.recipes.sort(function (a, b) {

            const atitle = a.title.toLowerCase();
            const btitle = b.title.toLowerCase();

              if (atitle > btitle) return 1;
              if (atitle < btitle) {
                return -1;
              } else return 0;
            })
          :
            state.recipes.sort(function (a, b) {
            const atitle = a.title.toLowerCase();
            const btitle = b.title.toLowerCase();
                
              if (atitle > btitle) return -1;
              if (atitle < btitle) return 1;
              else return 0;
            });
            
      return {
        ...state,
        recipes: alphaSort,  
      }; 

        case  FILTER_SCORE:
            let scoreSort =
        action.payload === 'menor'
          ? state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return 1;
              if (a.healthScore < b.healthScore) return -1;
              else return 0;
            })
          : state.recipes.sort(function (a, b) {
              if (a.healthScore > b.healthScore) return -1;
              if (a.healthScore < b.healthScore) return 1;
              else return 0;
            });
                
      return {
        ...state,
        allrecipes: scoreSort, 
      };

      case FILTER_DIETS:
        const filterDiets = state.recipesPrueba;
        if(action.payload === "all"){
            return{
                ...state,
                recipes: filterDiets,
            }
        }else{
            const filtrados = filterDiets.filter(r=> r.diets?.some((d)=> d === action.payload))
            return{
                ...state,
                recipes: filtrados,
            }
        };

        case FILTER_CREATED:
            const filterRaiz = state.recipesPrueba;
            if(action.payload === "api"){
                const raizApi = filterRaiz.filter((element)=> element.created === false)
                return{
                    ...state,
                    recipes: raizApi
                }
            }
            if(action.payload === "db"){
                const raizApi = filterRaiz.filter((element)=> element.created === true)
                return{
                    ...state,
                    recipes : raizApi
                }
            } else{
                return{
                    ...state,
                    recipes: filterRaiz
                }

            }
  
     
        default:
            return {...state};           
};
};

export default rootReducer;