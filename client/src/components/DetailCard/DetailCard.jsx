const DetailCard = (props)=>{

   console.log(props, "propppps");
    return(
        <div>
            <div>
                <h2>{props.title}</h2>
            </div>


            <div>
                <span>{props.healthScore}</span>
            </div>


            <div>
                <span>{props.summary}</span>
            </div>
            
            <div>
                <img src={props.image} alt="imgDetail"></img>
            </div> 
            <div>
                <span>{props.diets}</span>
            </div>
            <div>
                <span>{props.steps}</span>
            </div>
           
        </div>
    )
};

export default DetailCard;