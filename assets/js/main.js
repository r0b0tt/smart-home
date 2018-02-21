$(document).ready(function() {
    $('#fullpage').fullpage();
});

function openNav() {
    /**
     * Open the side nav bar
     */
    document.querySelector('#side-nav').style.display = "block";
    document.querySelector('#side-nav').style.width = "300px";

    document.querySelector('#open-nav').style.display = "none";
}

function closeNav() {
    /**
     * Close the side nav bar
     */
    document.querySelector('#side-nav').style.display = "none";
    document.querySelector('#side-nav').style.width = "0";

    document.querySelector('#open-nav').style.display = "block";
}