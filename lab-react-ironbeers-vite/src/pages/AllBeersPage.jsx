import { useState, useEffect } from "react"
import axios from "axios"
import API_URL from "../api"
import { Link } from "react-router-dom"

function AllBeersPage() {
	const [beers, setBeers] = useState(null)

	async function fetchAllBeers(str = "") {
		try {
			const response = await axios.get(`${API_URL}/search?q=${str}`)
			setBeers(response.data)
		} catch (error) {
			console.error(error.message)
		}
	}

	useEffect(() => {
		fetchAllBeers()
	}, [])
	if (!beers) {
		return <div className="loading">Loading...</div>
	}

	function handleSearch(event) {
		fetchAllBeers(event.target.value)
	}
	return (
		<>
			<h2>All Beers</h2>
			<div>
				<h3>Search</h3>
				<input
					type="search"
					placeholder="You know the drill"
					onChange={handleSearch}
				/>
			</div>
			{beers.map((beer) => {
				return (
					<div key={beer._id}>
						<Link to={`/beers/${beer._id}`}>
							<p>{beer.name}</p>
						</Link>
					</div>
				)
			})}
		</>
	)
}

export default AllBeersPage
