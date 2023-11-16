
import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

//Un Hook es una funci�n de devuelve un objecto
export const useFetchGifs = ( category ) => {

	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState( true );//Hacemos un estado de carga si no ninguna im�gen para mostrar

	const getImages = async() => {

		const newImages = await getGifs(category);
		setImages(newImages);
		setIsLoading(false); //Si hay im�genes no hay carga
	}

	useEffect(() => {

		getImages();
	}, []);


    return {
        images: images,
        isLoading: isLoading
    }
}