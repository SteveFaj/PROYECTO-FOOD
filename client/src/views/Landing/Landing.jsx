import { Link } from 'react-router-dom';
import style from "./Landing.module.css"

const Landing = ()=>{
    return (
        <div className={style.landing}>
          <div className={style.intro}>
            <h1 className={style.logo}>Henry Food</h1>
            <Link to="/home">Entrar</Link>
          </div>
        </div>
    )
};

export default Landing;
