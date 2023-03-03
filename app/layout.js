import Link from "next/link"
import "./globals.css"
import menu from "./menu.module.css"

export const metadata = {
  title: "Portfolio Site | Freddie Kaplan",
  description: "Portfolio Site for Freddie Kaplan, web developer.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <>
        <nav className={menu.menu}>
          <div className={menu.menuItem}><Link href="./">Home</Link></div>
          <div className={menu.menuItem}><Link href="./portfolio">Portfolio</Link></div>
          <div className={menu.menuItem}><Link href="./about">About</Link></div>
        </nav>

        <main>{children}</main>
        </>
      </body>
    </html>
  )
}