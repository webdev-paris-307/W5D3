import { Link } from "react-router-dom"
function HomePage() {
	return (
		<nav
			style={{
				display: "flex",
				gap: "2rem",
				justifyContent: "center",
			}}>
			<Link to={`/beers`}>All Beers</Link>
			<Link to="/random-beer">Random Beer</Link>
			<Link to="/new-beer">Create Beer</Link>
		</nav>
	)
}

export default HomePage
