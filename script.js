fetch("navbar.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data
    })