
//Para hacer una petición hppt la función debe ser asíncrona
export const getGifs = async (category) => {

	const url = `https://api.giphy.com/v1/gifs/search?api_key=eMv0lywXvz3Bzf3Lj9MCal7crJIt9PSC&q=${category}&limit=2`
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => ({

		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}));

	return gifs
}