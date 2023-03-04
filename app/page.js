// "use client"
// import { useRef } from 'react';

export default function Home() {
	// const divRef = useRef(null);

	// const handleClick = () => {
		
	// 	if (divRef.current) {
	// 	  divRef.current.scrollIntoView({
	// 		behavior: 'smooth',
	// 		block: 'nearest',
	// 		inline: 'nearest'
	// 	  })
	// 	}
	//   };

  	return (
		<div className="page-content home">
			<h1>Freddie Kaplan</h1>
			<h2>Web Development Portfolio</h2>
			<p>lorem ipsum dolor sit amet, consectetur adipis.</p>

			{/* <button onClick={handleClick}>Scroll to bottom</button>
     		<div className="scrollContainer" ref={divRef}>
			 	html<br />
				body<br />
				div<br />
				flex<br />
				npm i react<br />
				import<br />
				export<br />
				git push<br />
				portfolio
			</div> */}


			{/* <div className="scrollContainer">
				html<br />
				body<br />
				div<br />
				flex<br />
				npm i react<br />
				import<br />
				export<br />
				git push<br />
				portfolio
			</div> */}
		</div>
	)
}
