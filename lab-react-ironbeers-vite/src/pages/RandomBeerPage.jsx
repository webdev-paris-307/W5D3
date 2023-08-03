import { useEffect, useState } from "react"
import axios from "axios"
import API_URL from "../api"

function RandomBeerPage() {
	const [beer, setBeer] = useState(null)

	function fetchRandomBeer() {
		axios
			.get(`${API_URL}/random`)
			.then((response) => {
				setBeer(response.data)
			})
			.catch(console.log)
	}
	useEffect(() => {
		fetchRandomBeer()
	}, [])

	if (!beer) {
		return <div className="loading">Loading...</div>
	}
	return (
		<>
			<h2>One Beer</h2>

			<p>{beer.name}</p>
			<button onClick={fetchRandomBeer}>Fetch a random beer</button>
		</>
	)
}

export default RandomBeerPage
