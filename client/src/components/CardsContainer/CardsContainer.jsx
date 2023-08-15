import {useSelector} from "react-redux";
import Card from "../Card/Card";
import style from "../CardsContainer/CardsContainer.module.css";

const CardContainer = ({primerIndice, ultimoIndice}) => {
    
    const prueba = useSelector(state=>state.recipes);

    if(typeof(prueba) === 'string'){
        return (
            <div className={style.dontMatch} key="dontMatch">
                <h4>{prueba}</h4>
            </div>
        )
    }else{

    return (
        
        <div  className={style.container} key="container">
            {prueba.map(recipe=>{
                return <Card key={recipe.id}
                    id={recipe.id}
                    title={recipe.title}
                    // summary={recipe.summary}
                    healthScore={recipe.healthScore}
                    // steps={recipe.steps}
                    diets={recipe.diets}
                    image={recipe.image}
                    // created={recipe.created}
                />

            }).slice(primerIndice, ultimoIndice)}
        </div>
    //     
    )}
};

export default CardContainer;