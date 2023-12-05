import style from "./Paginado.module.css";
const Paginado = ({recetasPorPagina, paginaActual, setPaginaActual, totalRecipes}) => {
const pageNumber= [];

    for(let i = 1;  i <= Math.ceil(totalRecipes/ recetasPorPagina); i++){
        pageNumber.push(i)
    };
const anterior = () => {
    setPaginaActual (paginaActual - 1);
};

const siguiente = () => {
setPaginaActual(paginaActual + 1);
};

const especifico = (n) => {
    setPaginaActual(n)
};
    return(
        <div className={style.paginadoContainer} key="paginadoContainer">
            <button disabled={paginaActual === 1} onClick={anterior}>Previus</button>
            
        {pageNumber.map(noPage=>(
            <button onClick={()=> especifico(noPage)} key={noPage}>{noPage}</button>
             ))}
            
            <button disabled={paginaActual === pageNumber.length} onClick={siguiente}>Next</button>
        </div>
    )
};
export default Paginado;