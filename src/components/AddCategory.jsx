
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const onInputChange = ({ target }) => {

        setInputValue(target.value);
    }

    const onSubmit = ( target ) => {

        target.preventDefault(); //Evitamos que se refresque el navegador cuando lanzamos el formulario
        if ( inputValue.trim().length <= 1) return; // Sin algún espacio en blanco no vamos ejecutar la función
        console.log(inputValue);
        //setCategories(categories => [inputValue, ...categories]);
        setInputValue(target.value);
        onNewCategory( inputValue.trim() );
        
    }
    return (
        <form onSubmit={ onSubmit }>
            <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange} />
            <button onSubmit={onInputChange}>Buscar</button>
        </form>

    )
}