import React, { useState, useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import { getAllRecipes, getDiets } from "../../redux/actions";
import {useHistory} from "react-router-dom";
import axios from "axios";



const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(getDiets());
        dispatch(getAllRecipes());
    },[dispatch]);

    const recipes = useSelector(state => state.recipes);
    const diets = useSelector(state => state.diets);

    const validateField = (field, value) => {
        switch (field) {
            case "title":
                if (!value) return "Toda Receta debe tener un Nombre identificativo";
                if (!/^[A-Za-z0-9 _]+$/.test(value)) return "No Incluir Caracteres Especiales";
                if (recipes.some((e) => e.title.toLowerCase() === value.toLowerCase())) return "Ya existe en el Recetario";
                return "";
            case "summary":
                if (!value) return "Debe incluir una descripción";
                if (!/^.{5,500}$/.test(value)) return "La descripción debe tener entre 5 y 500 caracteres";
                return "";
            case "healthScore":
                if (!value) return "Evalua tu receta";
                if (!/^[0-9\b]+$/.test(value)) return "La evaluación debe ser un número";
                if (value < 0 || value > 100) return "La evaluación debe ser entre 0 y 100";
                return "";
            case "image":
                if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i.test(value)) return "No es una URL válida. Se aplicará una imagen por defecto";
                return "";
            case "diets":
                if (!input.diets.length) return "Debe pertenecer al menos a un tipo de dieta";
                return ""
                
            default:
                return "";
        }
    };

    const [input, setInput] = useState({
        title: "",
        summary: "",
        healthScore: "",
        image: "",
        steps: "",
        diets: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        summary: "",
        healthScore: "",
        image: "",
        steps: "",
        diets: "",
    });

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setInput({ ...input, [property]: value });

        setErrors({
            ...errors,
            [property]: validateField(property, value),
        });
    };

    const checkDiets = (event) => {
        if (event.target.checked) {
            setInput({
                ...input,
                diets: [...input.diets, event.target.value],
            });
        } else {
            setInput({
                ...input,
                diets: input.diets.filter((dieta) => dieta !== event.target.value),
            });
        }
    };

    

    const submitHandler = async (event) => {
        event.preventDefault();
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
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Title </label>
                <input type="text" name="title" value={input.title} onChange={changeHandler} />
                <span>{errors.title}</span>
            </div>

            <div>
                <label>Summary </label>
                <input type="text" name="summary" value={input.summary} onChange={changeHandler} />
                <span>{errors.summary}</span>
            </div>

            <div>
                <label>Healthscore </label>
                <input type="number" name="healthScore" min="1" max="100" step="1" value={input.healthScore} onChange={changeHandler} />
                <span>{errors.healthScore}</span>
            </div>

            <div>
                <label>Image </label>
                <input type="url" name="image" accept="image/*" value={input.image} onChange={changeHandler} />
                <span>{errors.image}</span>
            </div>

            <div>
                <label>Steps </label>
                <input type="text" name="steps" value={input.steps} onChange={changeHandler} />
            </div>

            <div>
                <label>Diets </label>
                {diets.map((dieta) => (
                    <div key={dieta.name}>
                        <input type="checkbox" name="diets" value={dieta.name} onChange={checkDiets} />
                        <span >{dieta.name} </span>
                    </div>
                ))} <span>{errors.diets}</span>   
            </div>

            <button type="submit" >Crear</button>
        </form>
    );
};

export default Form;