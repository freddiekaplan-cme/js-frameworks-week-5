import nodemailer from 'nodemailer';

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
	user: process.env.MAIL_USER,
	pass: process.env.MAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  const { fullName, email, message } = req.body

  // Send mail with defined transport object
  try {
	const info = await transporter.sendMail({
	  from: `"${fullName}" <${email}>`, // sender address
	  to: process.env.EMAIL_RECEIVER, // list of receivers
	  subject: "New contact from portfolio site ✔", // Subject line
	  text: `Hello Freddie!\n\nYou've got a new message from ${fullName} (${email})\n\nMessage: ${message}`, // plain text body
	  html: `<p>Hello Freddie!</p><p>You've got a new message from ${fullName} (${email}):</p><p>${message}</p>`,
	});
	console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
	console.error(error);
	return res.status(500).json({ msg: 'Error sending message' })
  }

  return res.status(200).json({ msg: 'Message sent successfully!' })
};
