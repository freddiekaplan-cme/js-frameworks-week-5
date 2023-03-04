'use client'
import Link from 'next/link'

export default function NotFound() {
  return <div>
      <h1 className="notFoundHeader">404</h1>
	  <div className="notFoundLine"></div>
	  <h2 className="notFoundSubHeader">Page Not Found</h2>
      <div>
        <Link href="/">Go to Home</Link>
      </div>
  </div>
}