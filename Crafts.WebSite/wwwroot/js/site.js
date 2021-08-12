// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var id = null;
function myMove() {
    var elem = document.getElementById("animation");
    var pos = 50;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
        if (pos == 250) {
            clearInterval(id);
        } else {
            pos++;
           
            elem.style.left = pos + 'px';
        }
    }
}