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
						<div className={menu.menuItem}>
							<Link href="/">
								<div onClick={() => {
									setActiveMenu("");
								}}
								>
									Home
									<div className={menu.menuLine}></div>
								</div>
							</Link>
						</div>
						<div className={menu.menuItem}>
							<Link href="./portfolio">
								<div onClick={() => {
									setActiveMenu("");
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
									setActiveMenu("");
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
									setActiveMenu("");
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
