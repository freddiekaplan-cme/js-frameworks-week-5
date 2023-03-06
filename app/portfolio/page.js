import Image from "next/image"

export default function Home() {
	return (
		<div className="page-content portfolio">
			<h1>Portfolio</h1>
			<p>lorem ipsum dolor sit amet, consectetur adipis.</p>
			<div>
				<Image
					src="/js-frameworks-week-1.png"
					alt="Assignment 1 screenshot thumbnail"
					width={478}
					height={231}
					priority
				/>
			</div>
			<div>
				<Image
					src="/js-frameworks-week-2.png"
					alt="Assignment 1 screenshot thumbnail"
					width={478}
					height={231}
					//priority
				/>
			</div>
		</div>
	)
}
