"use client"
import Link from "next/link"
import { useState } from "react"
import { Urbanist } from "next/font/google"
import menu from "./menu.module.css"
import "./globals.css"

const urbanist = Urbanist({ subsets: ["latin"] })

export const metadata = {
	title: "Portfolio Site | Freddie Kaplan",
	description: "Portfolio Site for Freddie Kaplan, web developer.",
}

export default function RootLayout({ children }) {
	const [activeMenu, setActiveMenu] = useState("")
	const [doubleClick, setDoubleClick] = useState(false)
	const [flyAway, setFlyAway] = useState(false);

	return (
		<html lang="en">
			<body className={urbanist.className}>
				<>
					<div className={` ${menu.menuItem} ${menu.menuButton} `}>
						<div onClick={() => {
							setActiveMenu(!activeMenu);
						}}
						className={activeMenu ? `${menu.menuActive}` : ""}
						>
							Menu
							<div className={`${menu.menuLineForButton} ${activeMenu ? "active" : ""}`}></div>
						</div>
					</div>
					<nav className={`${menu.menu} ${activeMenu ? "active" : ""}`}>
						<div className={`${menu.menuItem} ${flyAway ? "fly-away" : ""}`}>
							<Link href="/">
								<div onClick={() => {
									setActiveMenu("")
									if (doubleClick === true) {
										console.log("Flyg iväg!")
										setFlyAway(true)
									} else {
										setDoubleClick(true)
									}}
								}
								>
									Home
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>
						<div className={menu.menuItem}>
							<Link href="./portfolio">
								<div onClick={() => {
									setActiveMenu("")
									setDoubleClick(false)
								}}
								>
									Portfolio
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>
						<div className={menu.menuItem}>
							<Link href="./about">
								<div onClick={() => {
									setActiveMenu("")
									setDoubleClick(false)
								}}
								>
									About
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>

						<div className={menu.menuItem}>
							<Link href="./contact">
								<div onClick={() => {
									setActiveMenu("")
									setDoubleClick(false)
								}}
								>
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
