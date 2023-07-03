let aggregate = 0.0;
let matric = document.getElementById("input-mat-marks");
let fsc = document.getElementById("input-fsc-marks");
let ecat = document.getElementById("input-etest-marks");
const formSubmitBtn = document.getElementById("form-submit-btn");
const resultText = document.getElementsByClassName("result-text");
formSubmitBtn.addEventListener("click", onSubmitClick);
// console.log(resultText);

function onSubmitClick(e) {
  if (ecat.value != "" && matric.value != "" && fsc.value) {
    aggregate =
      (0.25 * parseFloat(matric.value) +
        0.45 * parseFloat(fsc.value) +
        0.3 * parseFloat(ecat.value)) /
      10;
    e.preventDefault();
    console.log(aggregate.toFixed(2));
    alert(" Your Aggregate is  : " + aggregate.toFixed(2));
  } else {
    alert("must fill all field is empty");
  }
}
