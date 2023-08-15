import style from "../Card/Card.module.css";
import{Link} from "react-router-dom"

const Card = (props) => {
    return(
        <div className={style.card} key={props.id}>
            <Link to= {`/detail/${props.id}`}>
                <h3>{props.title}</h3>
            </Link>
            
         <div className={style.imgContainer}>
             <img className = {style.imgCard} src={props.image} width="250px" height="200" alt='imgCard'/>
        </div>
            {props.diets.map(e=>{
                return(<p> {e} </p>)
            })}     
        </div>
    )
};

export default Card;