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
			
			{/* <Formik
       			initialValues={{ email: "", password: "" }}
       			validate={values => {
					const errors = {};

					if (!values.email) {
						errors.email = "Required";
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = "Invalid email address";
					}
					return errors;
				}}

				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
					alert(JSON.stringify(values, null, 2));
					setSubmitting(false);
					}, 400);
				}}
			>

				{({ isSubmitting }) => (
					<Form>

						<Field type="name" name="name" />
						<ErrorMessage name="name" component="div" />

						<Field type="email" name="email" />
						<ErrorMessage name="email" component="div" />

						<Field name="message" as="textarea" className="form-textarea" />

						<button type="submit" disabled={isSubmitting}>
						Submit
						</button>

					</Form>
				)}

     		</Formik> */}

		</div>
	)
}
