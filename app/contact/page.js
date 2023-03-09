"use client"
import React from "react"
import { Formik, Form, Field } from "formik"
import form from "../form.module.css"

export default function Home() {
	return (
		<div className="page-content about">
			<h1>Contact</h1>

			<div className="card">
				<div className={form.text}>
					Get in touch with me about internships, work or anything else. 
				</div>
				<Formik
					initialValues={{
						fullName: "",
						email: "",
						message: "",
					}}
					onSubmit={async (values) => {
						await new Promise((r) => setTimeout(r, 500))
						alert(JSON.stringify(values, null, 2))
					}}
				>
					<Form className={form.contactForm}>
						<div>
							<label htmlFor="fullName">Name</label><br />
							<Field id="fullName" name="fullName" className={form.input} />
						</div>
						<div>
							<label htmlFor="email">Email</label><br />
							<Field id="email" name="email" type="email" className={form.input} />
						</div>
						<div>
							<label htmlFor="message">Message</label><br />
							<Field
								name="message"
								as="textarea"
								className={`${form.input} ${form.textarea} `}
							/>
						</div>

						<button type="submit" className={form.button}>Submit</button>
					</Form>
				</Formik>
			</div>
		</div>
	)
}
