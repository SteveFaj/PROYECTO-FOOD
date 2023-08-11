import CardContainer from "../../components/CardsContainer/CardsContainer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Paginado from "../../components/Paginado/Paginado";
import {useState} from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { getDiets } from "../../redux/actions";


const Home = ()=>{
    
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllRecipes());
        dispatch(getDiets());
    },[dispatch])

    const recipeList = useSelector(state=>state.recipes)
    const recetasPorPagina = 3;
    const [paginaActual, setPaginaActual] = useState(1)
    const totalRecipes = recipeList.length;
    const ultimoIndice = paginaActual * recetasPorPagina;
    const primerIndice = ultimoIndice - recetasPorPagina; 

    return(
        <div>
            <SearchBar/>
<h1> ESTO ES VISTA HOME</h1>

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
