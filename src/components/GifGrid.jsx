
//import { getGifs } from "../helpers/getGifs" Esta importación se hace desde el Hook
import { useFetchGifs} from "../hooks/useFetchGifs"
import { useState, useEffect } from "react"
import { GifGridItem } from "./GifGridItem"
import "../estilos.css"

export const GifGrid = ({ category }) => {

	//Como se hace con Hooks
	const { images, isLoading } = useFetchGifs( category ); //El useFetchGifs es un hook en donde resumimos todo el código del objeto en una sola línea

	//Como se hace sin Hooks

	//El useState debe estar vacio si no nada que mostrar
	//const [images, setImages] = useState([]);

	//const getImages = async() => {

		//const newImages = await getGifs(category);
		//setImages(newImages);
	//}

	//useEffect( () => {

		//getImages();
	//}, []) //Si dejamos este segundo argumento como un array vacio signica que nuestro Hook se va construir y lanzar una vez

	//getGifs({ category });

	return (
		<>
			<h3>{category}</h3>
			{
				isLoading ? (<h2>Cargando...</h2>) : null
			}
			<div className="card-grid">
				{
					images.map(( image ) => (
						<GifGridItem key={image.id} {...image} />//Desesestructuramos de golpe todas las propiedades que están dentro de image, con el operador exprect
					))	
				}
			</div>
		</>
	)
}
//<li key={id}>{title}</li>