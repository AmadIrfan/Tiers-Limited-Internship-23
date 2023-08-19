import React from "react";
import "../App.css";
export default function Form() {
	return (
		<div className="myFrom">
			<div className="title">Form</div>
			<form
				action="http://localhost:4000/register"
				method="post"
				encType="multipart/form-data"
			>
				<div className="inputField">
					<div className="field">
						<label htmlFor="name-text">Name</label>
						<input type="text" name="name" id="name-text" />
					</div>
					<div className="field">
						<label htmlFor="email-text">Email</label>
						<input type="email" name="email" id="email-text" />
					</div>
					<div className="field">
						<label htmlFor="password-text">Password</label>
						<input type="password" name="password" id="password-text" />
					</div>
					<div className="field">
						<input type="file" name="file" id="file-text" />
					</div>
					<div className="field1">
						<input type="file" name="file1" id="file-text" />
					</div>
					<div className="field">
						<button>Click</button>
					</div>
				</div>
			</form>
		</div>
	);
}
