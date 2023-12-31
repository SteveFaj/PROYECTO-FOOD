import {useState} from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";


const SearchBar = ({setPaginaActual}) => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const changeHandler = (event)=>{
        setValue(event.target.value)     
    };

    const dispatchHandler = (event) => {
        event.preventDefault()
        dispatch(getByName(value));
        setPaginaActual(1) ;
    };

    return(
        <div key="searchBar">
            <form onSubmit={dispatchHandler}>
                <input type="search" value={value}  onChange={changeHandler}></input>
                <button>SEARCH</button>    
            </form>
        </div>
    )
};

export default SearchBar;