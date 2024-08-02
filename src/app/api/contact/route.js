import formidable from 'formidable';
import { NextResponse } from "next/server";
import { Readable } from 'stream';
import * as postmark from 'postmark';
import fs from 'fs';
import path from 'path';

const client = new postmark.ServerClient('5a8a1701-0ba4-4961-85b9-5b19abc31aea');

export const dynamic = 'force-dynamic'; // Required to disable static optimization

export const GET = async (request) => {
	return NextResponse.json({ message: 'GET method not allowed' }, { status: 405 });
};

const parseForm = async (request) => {
	const form = formidable();

	// Convert the fetch Request object to a Node.js readable stream
	const stream = new Readable();
	stream.push(Buffer.from(await request.arrayBuffer()));
	stream.push(null);
	stream.headers = Object.fromEntries(request.headers.entries()); // Copy headers

	return new Promise((resolve, reject) => {
		form.parse(stream, (err, fields, files) => {
			if (err) {
				reject(err);
			} else {
				resolve({ fields, files });
			}
		});
	});
};

function fieldsToHtml(fields) {
	let html = '<h1>Work Inquiry</h1>';
	for (const key in fields) {
		if (fields.hasOwnProperty(key)) {
			html += `<p><strong>${key}:</strong> ${fields[key]}</p>`;
		}
	}
	return html;
}

export async function POST(
	request
) {
	try {
		const { fields, files } = await parseForm(request);
		// console.log('Received fields:', fields);
		// console.log('Received files:', files);

		// Phone number validation (10 to 15 digits)
		const phonePattern = /^\d{10,15}$/;
		if (!phonePattern.test(fields.phone)) {
			return NextResponse.json({ error: 'Invalid phone number format. Please enter a phone number with 10 to 15 digits.' }, { status: 400 });
		}

		const attachments = Object.keys(files).map((key) => {
			const file = files[key];
			return {
				Name: file.originalFilename,
				Content: fs.readFileSync(file.filepath).toString('base64'),
				ContentType: file.mimetype,
			};
		});

		const options = {
			From: 'no-reply@tachyonlabs.dev',
			To: 'hello@tachyonlabs.dev',
			Subject: `${fields.name[0]} - Work inquiry`,
			HtmlBody: fieldsToHtml(fields),
			ReplyTo: fields.email[0], // Use the email field as the Reply-To address
			Attachments: attachments,
		};

		await client.sendEmail(options);

		return NextResponse.json({ message: 'Your message has been sent successfully!' }, { status: 200 });
	} catch (error) {
		console.error('Error handling request:', error);
		return NextResponse.json({ error: 'An error occurred. Please try again later.' }, { status: 500 });
	}
}
