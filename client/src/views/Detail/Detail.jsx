import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";
import style from "../Detail/Detail.module.css";


const Detail =  ()=>{ 
    const {id} = useParams()   
    const dispatch = useDispatch();
    const detalle =  useSelector((state) => state.receta)
    

    useEffect( ()=>{
        dispatch(getRecipe(id))
    },[dispatch, id ])
   

// const detalle = [
// 	{
// 		"id": 715415,
// 		"title": "Red Lentil Soup with Chicken and Turnips",
// 		"healthScore": 100,
// 		"image": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
// 		"summary": "Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains 477 calories, 27g of protein, and 20g of fat. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for Autumn. From preparation to the plate, this recipe takes approximately 55 minutes. It is a good option if you're following a gluten free and dairy free diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a spectacular spoonacular score of 99%. If you like this recipe, you might also like recipes such as Red Lentil and Chicken Soup, Red Lentil and Chicken Soup, and Red-Lentil Soup.",
// 		"steps": [
// 			"To a large dutch oven or soup pot, heat the olive oil over medium heat.",
// 			"Add the onion, carrots and celery and cook for 8-10 minutes or until tender, stirring occasionally.",
// 			"Add the garlic and cook for an additional 2 minutes, or until fragrant. Season conservatively with a pinch of salt and black pepper.To the pot, add the tomatoes, turnip and red lentils. Stir to combine. Stir in the vegetable stock and increase the heat on the stove to high. Bring the soup to a boil and then reduce to a simmer. Simmer for 20 minutes or until the turnips are tender and the lentils are cooked through.",
// 			"Add the chicken breast and parsley. Cook for an additional 5 minutes. Adjust seasoning to taste.",
// 			"Serve the soup immediately garnished with fresh parsley and any additional toppings. Enjoy!"
// 		],
// 		"diets": [
// 			"gluten free",
// 			"dairy free"
// 		],
// 		"created": false
// 	}
// ]

if(Array.isArray(detalle)){
    return (
    
    <div>
        {detalle.map((receta)=>{

            return(
                <div className={style.detailContainer}key={receta.id}>
                    <h2>{receta.title}</h2>
                    <div>
                    <img  className={style.imgDetail} src={receta.image} alt={receta.id} width="400px" height="300px"></img>
                    </div>
                    <div className={style.health}>
                        <h4>Health Score = {receta.healthScore}</h4>
                        </div>
                    <span className={style.summary}>Descripcion= {receta.summary}</span>
                    <div className={style.diets}>
                        Dietas= {receta.diets?.map((e)=>{
                            return(
                                <li className={style.lista}>{e.toString()}</li>
                            )
                        })}
                    </div>
                    <div className={style.steps}>
                        Paso a Paso= {receta.steps?.map(e=>{
                            return(<li className={style.listaStep}>{e}</li>)
                        })}
                    </div>
                    </div>
            )
        })}
        
    </div>
)}else{
    return(
        <div className={style.detailContainer}key={detalle.id}>
        <h2>{detalle.title}</h2>
         <div>
        <img  className={style.imgDetail} src={detalle.image} alt={detalle.id} width="400px" height="300px"></img>
        </div>
        <div className={style.health}>
            <h4>Health Score = {detalle.healthScore}</h4>
            </div>
         <span className={style.summary}>Descripcion= {detalle.summary}</span>
     <div className={style.diets}>
            Dietas= {detalle.diets?.map((e)=>{
                return(
                    <li className={style.lista}>{e}</li>
                )
            })}
        </div>
        <div className={style.steps}>
             Paso a Paso= {detalle.steps.split(".")}
        </div>
        </div>
    )
   
}
    

}

export default Detail;