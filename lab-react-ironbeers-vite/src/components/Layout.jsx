import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"

function Layout() {
	return (
		<>
			<Navbar />

			<main>
				<Outlet />
			</main>

			<Footer></Footer>
		</>
	)
}

export default Layout
