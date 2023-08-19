import React from "react";

export default function Form() {
	return (
		<div className="form">
			<form
				action="http://localhost:4000/userReg"
				method="post"
				encType="multipart/form-data"
			>
				<div className="row">
					<label htmlFor="myName">Name</label>
					<input type="text" name="name" id="myName" />
				</div>
				<div className="row">
					<label htmlFor="myEmail">Email</label>
					<input type="email" name="email" id="myEmail" />
				</div>
				<div className="row">
					<label htmlFor="myMarks">Marks</label>
					<input type="number" name="marks" id="myMarks" />
				</div>
				<div className="row">
					<label htmlFor="file">Marks</label>
					<input type="file" name="profileImage" multiple id="file" />
				</div>
				<div className="row">
					<label htmlFor="file">Marks</label>
					<input type="file" name="images" id="file" />
				</div>
				<div className="btn-save">
					<button type="submit">Save</button>
				</div>
			</form>
		</div>
	);
}
