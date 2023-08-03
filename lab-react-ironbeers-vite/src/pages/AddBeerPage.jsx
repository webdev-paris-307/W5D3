import { useState } from "react"
import axios from "axios"
import useForm from "../useForm"
import API_URL from "../api"
import { useNavigate } from "react-router-dom"

function AddBeerPage() {
	const [formData, handleChange] = useForm({
		name: "",
		contributed_by: "",
		attenuation_level: 0,
		tagline: "",
		description: "",
		first_brewed: "",
		brewers_tips: "",
	})
	const navigate = useNavigate()

	function handleSubmit(event) {
		event.preventDefault()

		axios.post(`${API_URL}/new`, formData).then(() => {
			navigate("/beers")
		})
	}
	return (
		<>
			<h2>Add a Beer</h2>
			<pre>{JSON.stringify(formData, null, 2)}</pre>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name: </label>
					<input
						type="text"
						value={formData.name}
						id="name"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="tagline">Tagline: </label>
					<input
						type="text"
						value={formData.tagline}
						id="tagline"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="description">Description: </label>
					<input
						type="text"
						value={formData.description}
						id="description"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="contribution">Contribution: </label>
					<input
						type="text"
						value={formData.contributed_by}
						id="contributed_by"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="brew-date">First brewed in: </label>
					<input
						type="text"
						value={formData.first_brewed}
						id="first_brewed"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="attenuation">Attenuation level:</label>
					<input
						type="number"
						value={formData.attenuation_level}
						id="attenuation_level"
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="tips">Tips: </label>
					<input
						type="text"
						value={formData.brewers_tips}
						id="brewers_tips"
						onChange={handleChange}
					/>
				</div>

				<button>Submit</button>
			</form>
		</>
	)
}

export default AddBeerPage
