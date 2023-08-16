import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";
import style from "./Detail.module.css";


const Detail =  ()=>{ 
    const {id} = useParams()   
    const dispatch = useDispatch();
    const detalle =  useSelector((state) => state.receta)
    

    useEffect( ()=>{
        dispatch(getRecipe(id))
    },[dispatch, id ])
   


if(Array.isArray(detalle)){
    return (
    
    <div>
        {detalle.map((receta)=>{

return (
    <>
      <h1 className={style.logo}>Henry Food</h1>
      <div className={style.detailContainer} key={receta.id}>
        <h1>{receta.title}</h1>
        <h5>Health Score = {receta.healthScore}</h5>
        <img className={style.imgDetail} src={receta.image} alt={receta.id} width="400px" height="300px"></img>
        {/* <div className={style.health}>
      </div> */}
        <p className={style.summary}>{receta.summary}</p>
        <div className={style.steps}>
          <h3>Preparación</h3>
          <ul className={style.preparacion}>{receta.steps?.map(e => {
            return (<li className={style.listaStep}>{e}</li>)
          })}
          </ul>
        </div>
        <div className={style.diets}>
          <h3>Dietas</h3>
          <ul className={style.dietList}>
            {receta.diets?.map((e) => {
              return (
                <li className={style.lista}>{e.toString()}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
})}

</div>
)
} else {
return (
<div className={style.detailContainer} key={detalle.id}>
<h2>{detalle.title}</h2>
<div>
  <img className={style.imgDetail} src={detalle.image} alt={detalle.id} width="400px" height="300px"></img>
</div>
<div className={style.health}>
  <h4>Health Score = {detalle.healthScore}</h4>
</div>
<span className={style.summary}>Descripcion= {detalle.summary}</span>
<div className={style.diets}>
  Dietas= {detalle.diets?.map((e) => {
    return (
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