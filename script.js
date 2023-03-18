// console.log(document.getElementById("title"));
function sayHello() {
	var name = document.getElementById("name").value
	var message = "<h3>Hello " + name + "!</h3>";
	var studentDashboard = "<h2>Student Dashboard</h2>"

	if (name === "student" || name === "Student") {
		document.querySelector("#title").innerHTML = studentDashboard;
		document.querySelector("#content").innerHTML = message;
		document.querySelector("#dashboard").innerHTML = "<h3>Welcome to your student dashboard!</h3>";
	}

	else {
		document.getElementById("title").innerHTML = "Homepage";
		document.getElementById("content").innerHTML = message;
		document.getElementById("dashboard").innerHTML = "";
	};
}