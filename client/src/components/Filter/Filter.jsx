import { useDispatch } from "react-redux";
import { filterAlpha, 
         filterScore,
         filterDiets, 
         filterCreated
     } from "../../redux/actions";
import style from "./Filter.module.css";

const Filter = ({diets, setOrder, setScore}) => {

    const dispatch = useDispatch();

    const alphaHandler = (event) => {
        dispatch(filterAlpha(event.target.value));
        setOrder(event.target.value);
    };

    const scoreHandler = (event) => {
       dispatch(filterScore(event.target.value));
       setScore(event.target.value);
    };

    const filterDietHandler = (event) => {
        dispatch(filterDiets(event.target.value))
    };

    const filterCreateHandler = (event) => {
        dispatch(filterCreated(event.target.value))
    };


    return (
        <div key="filter" className={style.filters}>
          <select name="alpha" id="alpha" onChange={alphaHandler}>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
    
          <select name="score" id="score" onChange={scoreHandler}>
            <option value="mayor">Max Score</option>
            <option value="menor">Min Score</option>
          </select>
    
          <select name="diets" id="diets" onChange={filterDietHandler}>
            <option value="default" disabled>
              Eliga
            </option>
            <option value="all" defaultValue>
              All
            </option>
    
            {diets?.map((dieta) => (
              <option value={dieta.name} key={dieta.id}>
                {dieta.name}
              </option>
            ))};
          </select>
    
          <select name="raiz" id="raiz" onChange={filterCreateHandler}>
            <option value="all">
              All
            </option>
            <option value="db">
              DB
            </option>
            <option value="api">
              API
            </option>
          </select>
        </div>
      )
    };
    
    export default Filter;