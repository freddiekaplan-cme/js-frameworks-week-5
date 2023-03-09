import Link from "next/link"

export default function Home() {
	return (
		<div className="page-content about">
			<h1>About</h1>
			
			<div className="card">
				<h2>Skills</h2>
				<div>
					I've worked with HTML5, CSS3, JavaScript and jQuery. I also have experience with PHP, SQL and working with frameworks like Wordpress and Bootstrap.
				</div>
			</div>

			<div className="card">
				<h2>Background</h2>
				<div>
					I was making simple websites in the late 90's but then went into the humanities and studied film and publishing. For the last decade I've been working mainly within the library world and website updates with different CMS's.
				</div>
				<div>
					I am also running a business for guided tours, we're proud of pioneering the free walking tour concept in Stockholm in 2010. Since then more than 275 000 people have taken our tours.
				</div>				
				<div className="link">
					<Link href="https://www.linkedin.com/in/freddiekaplan/"  target="_blank" rel="noopener noreferrer">
						Open linkedIn in a new tab
					</Link>
				</div>
				<div className="link">
					<Link href="https://www.freetourstockholm.com/"  target="_blank" rel="noopener noreferrer">
						Open Free Tour Stockholm AB in a new tab
					</Link>
				</div>
			</div>

			<div className="card">
				<h2>Podcasting</h2>
				<div>
					I am one of the co-hosts for a long running podcast about comic books and graphic novels, called Hög av Serier.
				</div>
				<div className="link">
					<Link href="https://www.hogavserier.se/"  target="_blank" rel="noopener noreferrer">
						Open Hög av Serier in a new tab
					</Link>
				</div>
			</div>

			<div className="card">
				<h2>Hobbies and interests</h2>
				<div>
					Somewhat of a pop culture addict, I am into comics, film, tv and music. I'm an avid player of Magic the Gathering, and try to have recurring sessions of role playing games. I'm also into custom mechanical keyboards.
				</div>
			</div>

		</div>
	)
}
