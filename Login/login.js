let Btn = document.getElementById("btnLogin");
let Pass = document.getElementById("password");
let Uname = document.getElementById("username");

Btn.addEventListener("click", () => {
    if (Uname.value == "seyy" && Pass.value == "cute") {
        alert("Login Successfully");
        window.location.href = "../Main/main.html";
    } else if (Uname.value == "" && Pass.value == "") {
        alert("Please fill up!");
    } else if (Uname.value == "") {
        alert("Please Enter Username!");
    } else if (Pass.value == "") {
        alert("Please Enter Password!");
    } else {
        alert("Username or Password is invalid!");
    }
});