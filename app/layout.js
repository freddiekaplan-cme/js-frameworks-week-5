import Link from "next/link"
import { Urbanist } from "next/font/google"
import menu from "./menu.module.css"
import "./globals.css"

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
	title: "Portfolio Site | Freddie Kaplan",
	description: "Portfolio Site for Freddie Kaplan, web developer.",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={urbanist.className}>
				<>

				<nav className={menu.menu}>
					<div className={menu.menuItem}><Link href="/">
						Home
						<div className={menu.menuLine}></div>
					</Link></div>
					<div className={` ${menu.menuItem} "portfolio" `}><Link href="./portfolio">
						Portfolio
						<div className={menu.menuLine}></div>
					</Link></div>
					<div className={menu.menuItem}><Link href="./about">
						About
						<div className={menu.menuLine}></div>
					</Link></div>

					<div className={menu.menuItem}><Link href="./contact">
						Contact
						<div className={menu.menuLine}></div>
					</Link></div>
				</nav>

				<main>{children}</main>

				</>
			</body>
		</html>
	)
}