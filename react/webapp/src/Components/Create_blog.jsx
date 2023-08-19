import "../App.css";
import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function CreateBlog() {
	const [text, setText] = useState("");
	const quillRef = useRef(null);
	function handleQuill() {
		if (quillRef.current) {
			let editor = quillRef.current.getEditor();
			let content = editor.root.innerHTML;
			setText(content);
		}
	}

	let HtmlToCode = ({ htmlText }) => {
		let style = {
			container: {
				with: "100%",
				wordWrap: "break-word",
				backgroundColor: "gray",
				marginTop: "20",
				width: "100vw",
				overflowY: "auto",
			},
			code: {
				display: "block",
				lineHeight: "1.2",
				padding: "30px",
				color: "black",
				textAlign: "justify",
			},
		};
		return (
			<div className="container" style={style.container}>
				<code
					className="code"
					style={style.code}
					dangerouslySetInnerHTML={{ __html: htmlText }}
				></code>
			</div>
		);
	};
	let module = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			["bold", "italic", "underline", "strike"],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ indent: "-1" }, { indent: "+1" }],
			["link"],
			[{ align: [] }],
			["image"],
			["clean"],
		],
	};
	let quillFormate = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"link",
		"align",
		"list",
		"bullet",
		"ordered",
		"image",
		"clean",
	];

	return (
		<div>
			<Navbar />
			<div
				style={{
					height: "570px",
					marginTop: "20px",
				}}
			>
				<center>
					<div
						className="quill-box"
						style={{
							width: "80%",
							marginTop: "20px",
						}}
					>
						<ReactQuill
							ref={quillRef}
							onChange={handleQuill}
							modules={module}
							formats={quillFormate}
							theme="snow"
							style={{
								height: "500px",
							}}
						/>
					</div>
				</center>
			</div>
			<center>
				<button
					className="button-click"
					style={{
						overflow: "none",
						width: "300px",
						color: "white",
						backgroundColor: "rebeccapurple",
					}}
					onClick={() => {
						let arr = [];
						// console.log(document.getElementsByClassName("code")[0].innerHTML);
						let code = document.getElementsByClassName("code")[0].innerHTML;
						let getArr =
							JSON.parse(window.localStorage.getItem("blogs")) || arr;
						// console.log("get", getArr);
						arr.push(code);
						getArr.push(arr[0]);
						window.localStorage.setItem("blogs", JSON.stringify(getArr));
						// console.log(getS);
					}}
				>
					Save
				</button>
			</center>
			<li>{<HtmlToCode htmlText={text} />}</li>
		</div>
	);
}
