const Form = ()=>{
    return(
        <form>
            <div>
                <label>Title </label>
                <input type="text" name="title"></input>
            </div>
            <div>
                <label>Summary </label>
                <input type="text" name="summary"></input>
            </div>
            <div>
                <label>Healtscore </label>
                <input type="number" min="1" max="100"  step="1" />
                
            </div>
            <div>
                <label>image </label>
                <input type="file" accept="image"></input>
            </div>
            <div>
                <label>Steps </label>
                <input></input>
            </div>
            <div>
                <label>Diets </label>
                <input></input>
            </div>
        </form>
    )
};


export default Form;