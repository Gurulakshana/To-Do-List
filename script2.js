user=localStorage.getItem("user")
document.querySelector("#signin").addEventListener("submit", function (e) {
    e.preventDefault();
    const inputUsername = document.getElementById("us").value.trim();
    const inputPassword = document.getElementById("i3").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
        alert("No user found. Please sign up first.");
        return;
    }
    for(i=0;i<storedUser.length;i++){
        if (inputUsername === storedUser[i].username && inputPassword === storedUser[i].password) {
        localStorage.setItem("n",i)
        window.location.href = "index.html";
        return;
    }
    }
    
    alert("Invalid username or password.");

})