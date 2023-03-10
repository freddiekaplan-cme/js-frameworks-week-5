"use client"
import { React, useState } from "react"
import { Urbanist } from "next/font/google"
import Link from "next/link"
import PropTypes from "prop-types"
import menu from "./menu.module.css"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })

// export const metadata = {
// 	title: "Portfolio Site | Freddie Kaplan",
// 	description: "Portfolio Site for Freddie Kaplan, web developer.",
// }

export default function RootLayout({ children }) {
	const [activeMenu, setActiveMenu] = useState("")
	const [doubleClick, setDoubleClick] = useState(false)
	const [flyAway, setFlyAway] = useState(false)

	const menuItemClick = () => {
		setActiveMenu("")
		setDoubleClick(false)
	}

	const homeClick = () => {
		setActiveMenu("")
		doubleClick ? setFlyAway(true) : setDoubleClick(true)
	}

	return (
		<html lang="en">
			<body className={urbanist.className}>
				<>
					<div className={` ${menu.menuItem} ${menu.menuButton} `}>
						<div
							onClick={() => {
								setActiveMenu(!activeMenu)
							}}
							className={activeMenu ? `${menu.menuActive}` : ""}
						>
							Menu
							<div
								className={`${menu.menuLineForButton} ${
									activeMenu ? "active" : ""
								}`}
							></div>
						</div>
					</div>
					<nav
						className={`${menu.menu} ${activeMenu ? "active" : ""}`}
					>
						<div
							className={`${menu.menuItem} ${
								flyAway ? "fly-away" : ""
							}`}
						>
							<Link href="/">
								<div onClick={homeClick}>
									Home
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>
						<div className={menu.menuItem}>
							<Link href="./portfolio">
								<div onClick={menuItemClick}>
									Portfolio
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>
						<div className={menu.menuItem}>
							<Link href="./about">
								<div onClick={menuItemClick}>
									About
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>

						<div className={menu.menuItem}>
							<Link href="./contact">
								<div onClick={menuItemClick}>
									Contact
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>
					</nav>

					<main>{children}</main>

					<footer className="footer">
						&copy; 2023 Freddie Kaplan
					</footer>
				</>
			</body>
		</html>
	)
}

RootLayout.propTypes = {
	children: PropTypes.node.isRequired,
  }