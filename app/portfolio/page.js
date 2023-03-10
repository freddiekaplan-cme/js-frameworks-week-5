import Image from "next/image"
import Link from "next/link"

export default function Home() {
	return (
		<div className="page-content portfolio">
			<h1>Portfolio</h1>
			<p>These are some of my current projects created with React JS.</p>

			<div className="portfolioPicture">
				<div className="card">
					<div>
						<h2>React Week 1: My Project</h2>
						Simple site with different articles, show all or one at
						a time.
					</div>
					<Link
						className="link"
						href="https://github.com/freddiekaplan-cme/js-frameworks-week-1"
					>
						<Image
							className="image"
							src="/js-frameworks-week-1.png"
							alt="Assignment 1 screenshot thumbnail"
							width={500}
							height={242}
							priority
						/>
					</Link>
					<div>
						<Link
							className="link"
							href="https://github.com/freddiekaplan-cme/js-frameworks-week-1"
						>
							GitHub Link
						</Link>
					</div>
				</div>
			</div>

			<div className="portfolioPicture">
				<div className="card">
					<div>
						<h2>Date & Time with NPM</h2>
						Experimenting with dates using Node packages and
						creating a site with the results.
					</div>
					<Link
						className="link"
						href="https://github.com/freddiekaplan-cme/js-frameworks-week-2"
					>
						<Image
							className="image"
							src="/js-frameworks-week-2.png"
							alt="Assignment 1 screenshot thumbnail"
							width={500}
							height={242}
						/>
					</Link>
					<div>
						<Link
							className="link"
							href="https://github.com/freddiekaplan-cme/js-frameworks-week-2"
						>
							GitHub Link
						</Link>
					</div>
				</div>
			</div>

			<div className="portfolioPicture">
				<div className="card">
					<div>
						<h2>Web Dev Rap Name Generator</h2>
						Design from a mockup. Click to generate web dev rap
						name. Responsive by using a set of media queries.
					</div>
					<Link href="https://js-frameworks-week-3.vercel.app/ ">
						<Image
							className="image"
							src="/js-frameworks-week-3.png"
							alt="Assignment 1 screenshot thumbnail"
							width={500}
							height={242}
						/>
					</Link>
					<div>
						<Link
							className="link"
							href="https://js-frameworks-week-3.vercel.app/ "
						>
							Link to site
						</Link>
					</div>
					<div>
						<Link
							className="link"
							href="https://github.com/freddiekaplan-cme/js-frameworks-week-3"
						>
							GitHub Link
						</Link>
					</div>
				</div>
			</div>

			<div className="portfolioPicture">
				<div className="card">
					<div>
						<h2>Random Post from Wikpedia API</h2>
						Design from a mockup. Click the "Explore More" button to
						replace a lot of text with random posts titles from
						Wikpedia.
					</div>
					<Link
						className="link"
						href="https://js-frameworks-week-4.vercel.app/ "
					>
						<Image
							className="image"
							src="/js-frameworks-week-4.png"
							alt="Assignment 1 screenshot thumbnail"
							width={500}
							height={242}
						/>
					</Link>
					<div>
						<Link
							className="link"
							href="https://js-frameworks-week-4.vercel.app/ "
						>
							Link to site
						</Link>
					</div>
					<div>
						<Link
							className="link"
							href="https://github.com/freddiekaplan-cme/js-frameworks-week-4"
						>
							GitHub Link
						</Link>
					</div>
				</div>
			</div>

			<div className="portfolioPicture">
				<div className="card">
					<div>
						<h2>Portfolio Site</h2>
						Multi page site made with Next.js 13. Fully responsive
						and using some dynamic routing. What happens if you
						click the "Home" button twice?
					</div>
					<Link
						className="link"
						href="https://js-frameworks-week-5.vercel.app/ "
					>
						<Image
							className="image"
							src="/js-frameworks-week-5.png"
							alt="Assignment 1 screenshot thumbnail"
							width={500}
							height={242}
						/>
					</Link>
					<div>
						<Link
							className="link"
							href="https://js-frameworks-week-5.vercel.app/ "
						>
							Link to site
						</Link>
					</div>
					<div>
						<Link
							className="link"
							href="https://github.com/freddiekaplan-cme/js-frameworks-week-5"
						>
							GitHub Link
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
