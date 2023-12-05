import CardContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginado/Paginado";
import Filter from "../../components/Filter/Filter";
import style from "./Home.module.css";
import {useState} from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { getDiets } from "../../redux/actions";


const Home = ()=>{
    const recipeList = useSelector(state=>state.recipes);
    const diets = useSelector(state=>state.diets);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllRecipes());  
        dispatch(getDiets());
    },[dispatch])

    

    const [order, setOrder] = useState("");

    const [score, setScore] = useState("");
    ;

    
    const [paginaActual, setPaginaActual] = useState(1);
    const recetasPorPagina = 9;
    const totalRecipes = recipeList.length;
    const ultimoIndice = paginaActual * recetasPorPagina;
    const primerIndice = ultimoIndice - recetasPorPagina; 

    return (
        <div>
          <h1 className={style.logo}>Henry Food</h1>
          <Filter
            diets={diets}
            setOrder={setOrder}
            setScore={setScore}
            setPaginaActual={setPaginaActual}
          />
          <SearchBar
          setPaginaActual={setPaginaActual}
          />
    
    
          <CardContainer
            ultimoIndice={ultimoIndice}
            primerIndice={primerIndice}
          />
          <div>
            <Paginado
              recetasPorPagina={recetasPorPagina}
              paginaActual={paginaActual}
              setPaginaActual={setPaginaActual}
              totalRecipes={totalRecipes}
    
    
            />
          </div>
        </div>
    
      )
    };
    
    export default Home;
    
