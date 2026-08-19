fetch("navbar.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("navbar-placeholder").innerHTML = data
    })

    fetch("footer.html")
    .then(Response => Response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data
    })