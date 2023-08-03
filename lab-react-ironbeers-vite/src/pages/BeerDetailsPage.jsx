import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import API_URL from "../api"

function BeerDetailsPage() {
	const { beerId } = useParams()
	const [beer, setBeer] = useState(null)

	useEffect(() => {
		axios
			.get(`${API_URL}/${beerId}`)
			.then((response) => {
				setBeer(response.data)
			})
			.catch(console.log)
	}, [])

	if (!beer) {
		return <div className="loading">Loading...</div>
	}
	return (
		<>
			<h2>One Beer</h2>

			<p>{beer.name}</p>
		</>
	)
}

export default BeerDetailsPage
