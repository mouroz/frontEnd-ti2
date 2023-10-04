
///MODULATES THE PAGE HEADER (FOR WHEN YOU ARENT LOGGED IN)

document.addEventListener("DOMContentLoaded", function () {
    const newHeader = document.createElement("header");

    // Create content for the new header
    newHeader.innerHTML = `
<!--HEADER USED FOR UNLOGGED WEBSITE-->
<div class="websiteHeader"></div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid" id="navbarDimensions">
        <a class="navbar-brand" href="/index.html">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item mb-2">
                    <a class="nav-link active" aria-current="page" href="/index.html">Home</a>
                </li>
                <li class="nav-item mb-2">
                    <a class="nav-link" href="#">Features</a>
                </li>
                <li class="nav-item mb-2">
                    <a class="nav-link" href="#">Pricing</a>
                </li>
                <li class="nav-item mb-2">
                    <a class="nav-link" href="#"><i class="fa fa-user-circle"></i>Entrar</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`
    //newHeader.classList.add("container")
    //option for header to not fill the top


    //gets first child of body and inserts header before it
    document.body.insertBefore(newHeader, document.body.firstElementChild);
});