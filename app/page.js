import React from "react"
import Link from "next/link"

export default function Home() {
	return (
		<div className="page-content home">
			<h1>Freddie Kaplan</h1>

			<div className="card">
				<h2>Web Development Portfolio</h2>
				<div>
					I&apos;m currently studying web development full time at{" "}
					<Link
						className="link"
						href="https://cmeducations.se/utbildningar/program/frontend-app-developer"
					>
						ChangeMaker Educations
					</Link>{" "}
					in Stockholm. This is my portfolio site. Feel free to check
					out my projects.
				</div>
				<div>
					I&apos;m looking for internships for the semester starting
					in January 2024. Got any tips for me?{" "}
					<Link className="link" href="./contact">
						Shoot me an email
					</Link>
					, it would be greatly appropriated.
				</div>
			</div>
		</div>
	)
}
