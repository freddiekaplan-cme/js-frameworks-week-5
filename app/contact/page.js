import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  fullName: Yup.string()
  .required('Full Name is required'),
  email: Yup.string()
  .email('Invalid email')
  .required('Email is required'),
  message: Yup.string()
  .required('Message is required')
})

export default function Home({ data }) {
  return (
	<div>
	  <h1>Contact</h1>
	  <Formik
		initialValues={{
		  fullName: '',
		  email: '',
		  message: ''
		}}
		validationSchema={schema}
		onSubmit={async (values) => {
		  const res = await fetch('/api/form', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(values)
		  })
		  const data = await res.json()
		  if (!res.ok) alert(data.msg)
		  else alert('Success')
		}}
	  >
		{(formik) => (
		  <Form>
			<label htmlFor='fullName'>Name</label>
			<Field name='fullName' />
			{formik.touched.fullName && formik.errors.fullName ? (
			  <div>{formik.errors.fullName}</div>
			) : null}

			<label htmlFor='email'>Email</label>
			<Field type='email' name='email' />
			{formik.touched.email && formik.errors.email ? (
			  <div>{formik.errors.email}</div>
			) : null}

			<label htmlFor='message'>Message</label>
			<Field name='message' as='textarea' />
			{formik.touched.message && formik.errors.message ? (
			  <div>{formik.errors.message}</div>
			) : null}

			<button type='submit'>Submit</button>
		  </Form>
		)}
	  </Formik>
	</div>
  )
}
