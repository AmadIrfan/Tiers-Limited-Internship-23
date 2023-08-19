function showData() {
	let stu = window.localStorage.getItem("student_data");
	let student = JSON.parse(stu);
	console.log(student);
	let name = document.getElementsByClassName("body")[0];
	let fname = document.getElementsByClassName("body")[1];
	let fscMarks = document.getElementsByClassName("fsc-marks")[0];
	let matricMarks = document.getElementsByClassName("mat-marks")[0];
	let ecatMarks = document.getElementsByClassName("ecat-marks")[0];
	const raVal = document.getElementsByClassName("result-value")[0];
	const aMarks = document.getElementsByClassName("aggregate-marks")[0];
	name.innerText = student.name;
	fname.innerText = student.fname;
	fscMarks.innerHTML = student.fsc;
	matricMarks.innerHTML = student.matric;
	ecatMarks.innerHTML = student.eCat;
	aMarks.innerHTML = student.aggregate;
	if (parseInt(student.aggregate) > 70) {
		raVal.innerText = "Congratulations : You are eligible  For Admission    ";
	} else {
		raVal.innerText = "Oops Good Luck try Again";
	}
}

showData()