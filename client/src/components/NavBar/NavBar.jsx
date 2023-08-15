import {Link} from "react-router-dom";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";


const NavBar = () => {
 
  const dispatch = useDispatch();
  const regresar= () => {
    dispatch(getAllRecipes())

  }
  return(
    <div className = {style.mainContainer} key="mainContainer">
        <button onClick={regresar}>Regresar</button>
          <Link to="/home">Home</Link>
          <Link to="/create">Create</Link>
    </div>
 )

};

    


export default NavBar;