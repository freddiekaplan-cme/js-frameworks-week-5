"use client"
import React from "react"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import form from "../form.module.css"

const ContactSchema = Yup.object().shape({
	fullName: Yup.string()
		.min(2, "Please write more than that.")
		.max(50, "That's a bit long.")
		.required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	message: Yup.string()
		.min(10, "Please write more than that.")
		.required("Required"),
})

export default function Home() {
	const handleSubmit = async (values) => {
		const { fullName, email, message } = values
		const emailBody = `Full Name: ${fullName}\n\nEmail: ${email}\n\nMessage: ${message}`
		window.location.href = `mailto:freddie.kaplan@edu.cmeducations.se?subject=Contact Form&body=${emailBody}`
	}

	return (
		<div className="page-content about">
			<h1>Contact</h1>

			<div className="card">
				<div className={form.text}>
					Get in touch with me about internships, work or anything
					else.
				</div>
				<Formik
					initialValues={{
						fullName: "",
						email: "",
						message: "",
					}}
					onSubmit={handleSubmit}
					validationSchema={ContactSchema}
				>
					{({ errors, touched }) => (
						<Form className={form.contactForm}>
							<div>
								<label htmlFor="fullName">Name</label>
								<br />
								<Field
									id="fullName"
									name="fullName"
									className={`${form.input} ${
										errors.fullName && touched.fullName
											? form.error
											: ""
									}`}
								/>
								{errors.fullName && touched.fullName && (
									<div className={form.errorMessage}>
										{errors.fullName}
									</div>
								)}
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<br />
								<Field
									id="email"
									name="email"
									type="email"
									className={`${form.input} ${
										errors.email && touched.email
											? form.error
											: ""
									}`}
								/>
								{errors.email && touched.email && (
									<div className={form.errorMessage}>
										{errors.email}
									</div>
								)}
							</div>
							<div>
								<label htmlFor="message">Message</label>
								<br />
								<Field
									name="message"
									as="textarea"
									className={`${form.input} ${
										form.textarea
									} ${
										errors.message && touched.message
											? form.error
											: ""
									}`}
								/>
								{errors.message && touched.message && (
									<div className={form.errorMessage}>
										{errors.message}
									</div>
								)}
							</div>

							<button type="submit" className={form.button}>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}
