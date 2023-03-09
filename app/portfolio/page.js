import Image from "next/image"

export default function Home() {
	return (
		<div className="page-content portfolio">
			<h1>Portfolio</h1>
			<p>lorem ipsum dolor sit amet, consectetur adipis.</p>
			<div className="portfolioPicture">
				<Image
					src="/js-frameworks-week-1.png"
					alt="Assignment 1 screenshot thumbnail"
					width={478}
					height={231}
					priority
				/>
			</div>
			<div className="portfolioPicture">
				<Image
					src="/js-frameworks-week-2.png"
					alt="Assignment 1 screenshot thumbnail"
					width={478}
					height={231}
					priority
				/>
			</div>
			<div className="portfolioPicture">
				<Image
					src="/js-frameworks-week-3.png"
					alt="Assignment 1 screenshot thumbnail"
					width={478}
					height={231}
					priority
				/>
			</div>
			<div className="portfolioPicture">
				<Image
					src="/js-frameworks-week-4.png"
					alt="Assignment 1 screenshot thumbnail"
					width={478}
					height={231}
					priority
				/>
			</div>

			{/* 
			https://js-frameworks-week-3.vercel.app/ 
			https://github.com/freddiekaplan-cme/js-frameworks-week-3
			
			https://js-frameworks-week-4.vercel.app/
			https://github.com/freddiekaplan-cme/js-frameworks-week-4
			
			https://js-frameworks-week-5.vercel.app/
			https://github.com/freddiekaplan-cme/js-frameworks-week-5

			*/}
		</div>
	)
}
