
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

const GifApp = () => {

    const [categories, setCategories] = useState(["Dragon Ball"]);
    console.log(categories);

    //La funci�n.map() es propia de JavaScript para trabajar con Arrays

    const onAddCategory = ( newCategory ) => {

        if (categories.includes(newCategory)) return ; //Si la categor�a ya existe que no haga nada

        setCategories([...categories, newCategory]);
    }
  return (
    <>
        <h1>GifApp</h1>
          <AddCategory
              //setCategories={setCategories}

              onNewCategory={ (event) => onAddCategory(event)}
          />
       
        <ol>
             {
                  categories.map( (category) => (

                      <GifGrid category={category} />// El valor del key no hace falta pas�rselo, ya lo coge por defecto
                  ))
             }
        </ol>
        
    </>
  )
}

export default GifApp
