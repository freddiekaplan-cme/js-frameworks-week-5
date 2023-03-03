import Script from "next/script"

export default function Custom404() {
	return ( <>
	<h1>404: Page not found</h1>
	<p>Redirecting to home page</p>

	<Script id="redirect">
		{`
		document.location.href = "/";
		`}
	</Script>

	</>)
}
