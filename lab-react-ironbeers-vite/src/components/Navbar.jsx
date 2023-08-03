import { Link, Outlet } from "react-router-dom"
function Navbar() {
	return (
		<>
			<nav
				style={{
					display: "flex",
					justifyContent: "center",
				}}>
				<Link to="/">Home</Link>
			</nav>
		</>
	)
}

export default Navbar
