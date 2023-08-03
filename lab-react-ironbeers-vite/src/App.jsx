import "./App.css"
import { Routes, Route } from "react-router-dom"
import CreateBeerPage from "./pages/AddBeerPage"
import AllBeersPage from "./pages/AllBeersPage"
import OneBeerPage from "./pages/BeerDetailsPage"
import RandomBeerPage from "./pages/RandomBeerPage"
import HomePage from "./pages/HomePage"
import Layout from "./components/Layout"

function App() {
	return (
		<div className="App">
			<h1>LAB | React IronBeers</h1>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route element={<Layout />}>
					<Route path="/beers" element={<AllBeersPage />} />
					<Route path="/beers/:beerId" element={<OneBeerPage />} />
					<Route path="/random-beer" element={<RandomBeerPage />} />
					<Route path="/new-beer" element={<CreateBeerPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
