﻿var id = null;
function myMove() {
    var elem = document.getElementById("animation");
    var pos = 0;
    clearInterval(frame, 10);
    function frame() {
        if (pos == 150) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}