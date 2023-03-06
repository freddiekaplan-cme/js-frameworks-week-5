"use client"
import React from "react"
import { Formik, Form, Field } from "formik";
import form from "../form.module.css"

export default function Home() {
	return (
		<div className="page-content about">
			<h1>Contact</h1>

			<Formik
				initialValues={{
					fullName: "",
					email: "",
					message: ""
				}}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				<Form className={form.contactForm}>
					<div>
						<label htmlFor="fullName">Name</label>
					<Field id="fullName" name="fullName" />
					</div>
					<div>
							<label htmlFor="email">Email</label>
					<Field
						id="email"
						name="email"
						type="email"
					/>
					</div>
					<div>
						<label htmlFor="message">Message</label>
					<Field name="message" as="textarea" className="form-textarea" />
					</div>
				
					<button type="submit">Submit</button>
				</Form>
			</Formik>
	
		</div>
	)
}
