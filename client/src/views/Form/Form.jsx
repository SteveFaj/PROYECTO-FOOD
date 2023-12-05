import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes, getDiets } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "./Form.module.css";

const validateField = (input, recipes) =>{
  let errors = {};

  if(!input.title){errors.title="Nombre Requerido"}
  else if(!/^[A-Za-z _]+$/.test(input.title)){errors.title="No debe Incluir Numeros , ni Caracteres Especiales"}
  else if(recipes.some((e)=> e.title.toLowerCase() === input.title.toLowerCase())){errors.title="Ya existe en el Recetario"}

  else if(!input.summary){errors.summary="Debe Incluir una descripcion"}
  else if(!/^.{5,500}$/.test(input.summary)){errors.summary="La Descripcion debe tener entre 5 y 500 caracteres"}

  else if(!input.healthScore){errors.healthScore="Evalua tu Receta"}
  else if(!/^[0-9\b]+$/.test(input.healthScore)){errors.healthScore="La evaluacion debe ser un Numero"}
  else if(input.healthScore < 0 || input.healthScore > 100){errors.healthScore="La evaluacion debe ser entre 0 y 100"}

  else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i.test(input.image)){errors.image="No es una URL Valida"}

  else if(!input.diets){errors.diets="Debe pertenecer al menos a tipo de dieta"}
  return errors;

};

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const recipes = useSelector(state => state.recipes);
  const diets = useSelector(state => state.diets);


  
  const [input, setInput] = useState({
    title: "",
    summary: "",
    healthScore: "",
    image: "",
    steps: "",
    diets: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getDiets());
    dispatch(getAllRecipes());
  }, [dispatch]);


  const changeHandler = (event) => {
    
    setInput({
      ...input,
      [event.target.name]: event.target.value
  })
  setErrors(
      validateField ({
          ...input,
          [event.target.name]: event.target.value
      }, recipes)
  )
  };

  const checkDiets = (event) => {
    if (event.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, event.target.value],
      })
      setErrors(
        validateField ({
          ...input,
          [event.target.name]: event.target.value
        }, recipes)  
      );
    } else {
      setInput({
        ...input,
        diets: input.diets.filter((dieta) => dieta !== event.target.value),
      }) 
      
      setErrors(
        validateField ({
          ...input,
          [event.target.name]: event.target.value
        }, recipes)  
      );
      
      
    }
  };



  const submitHandler = async (event) => {
    event.preventDefault();
    try{
      await axios.post("http://localhost:3001/recipes", input);
    alert("¡Se ha creado con éxito!");
    setInput({
      title: "",
      summary: "",
      healthScore: "",
      steps: "",
      image: "",
      diets: "",
    })
    history.push("/home")

    }catch (error){
      alert(JSON.stringify({error:error.message}))
    }
    
  };

  return (
    <>
      <h1 className={style.logo}>Henry Food</h1>
      <form className={style.crear} onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input placeholder="Title" type="text" name="title" value={input.title} onChange={changeHandler} />
          <span>{errors.title}</span>
        </div>

        <div>
          <label>Summary</label>
          <input placeholder="Summary" type="text" name="summary" value={input.summary} onChange={changeHandler} />
          <span>{errors.summary}</span>
        </div>

        <div>
          <label>Healthscore</label>
          <input placeholder="HealthScore" type="number" name="healthScore" min="1" max="100" step="1" value={input.healthScore} onChange={changeHandler} />
          <span>{errors.healthScore}</span>
        </div>

        <div>
          <label>Image</label>
          <input placeholder="Image" type="url" name="image" accept="image/*" value={input.image} onChange={changeHandler} />
          <span>{errors.image}</span>
        </div>

        <div>
          <label>Steps</label>
          <input type="text" name="steps" placeholder="steps" value={input.steps} onChange={changeHandler} />
        </div>

        <h3>Diets </h3>
        <div className={style.dietas}>
          {diets.map((dieta) => (
            <div key={dieta.name}>
              <input type="checkbox" name="diets" value={dieta.name} onChange={checkDiets} />
              <span >{dieta.name} </span>
            </div>
          ))} <span>{errors.diets}</span>
        </div>

        <button type="submit" >Crear</button>
      </form>
    </>
  );
};

export default Form;