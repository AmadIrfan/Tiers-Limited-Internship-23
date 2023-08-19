let aggregate = 0.0;
let matric = document.getElementById("input-mat-marks");
let fsc = document.getElementById("input-fsc-marks");
let name = document.getElementById("input-name");
let fname = document.getElementById("input-f-name");
let eCat = document.getElementById("input-eTest-marks");
const formSubmitBtn = document.getElementById("form-submit-btn");
const resultText = document.getElementsByClassName("result-text");
formSubmitBtn.addEventListener("click", onSubmitClick);

function onSubmitClick(e) {
	if (eCat.value != "" && matric.value != "" && fsc.value) {
		aggregate =
			// 0.25 * ((parseFloat(matric.value) / 1100) * 100) +
			0.7 * ((parseFloat(fsc.value) / 1100) * 100) +
			0.3 * ((parseFloat(eCat.value) / 400) * 100);
		let student = {
			name: name.value,
			fname: fname.value,
			fsc: fsc.value,
			matric: matric.value,
			eCat: eCat.value,
			aggregate: aggregate,
		};
		e.preventDefault();
		window.localStorage.setItem("student_data", JSON.stringify(student));
		window.location.href = "result.html";
	} else {
		alert("must fill all field is empty");
	}
}
