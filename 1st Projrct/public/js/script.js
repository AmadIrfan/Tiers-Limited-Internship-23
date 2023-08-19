let navBtn = document.getElementsByClassName("nav-bold-buttons")[0];
let showUserName = document.getElementsByClassName("name-button")[0];
const menuBtn = document.querySelector(".response-menu");

menuBtn.addEventListener("click", showMenu);
function showMenu(e) {
	// console.log(e);
	const navbar = document.querySelector(".navbar");
	navbar.classList.toggle("nav-active");
}


function checkUserLogin() {
	let logInBool = window.localStorage.getItem("userLogin");
	let user = window.localStorage.getItem("user");
	let u = JSON.parse(user);
	console.log(logInBool);
	if (logInBool === "true") {
		navBtn.style.display = "none";
		showUserName.style.display = "block";
		showUserName.innerHTML = u.name;
	}
}
checkUserLogin();

let logOut = document.getElementsByClassName("name-button")[0];
logOut.addEventListener("click", OnLogOut);
function OnLogOut() {
	console.log("called");
	window.localStorage.setItem("userLogin", JSON.stringify(false));
	navBtn.style.display = "flex";
	showUserName.style.display = "none";
	// showUserName.innerHTML = u.name;
}

