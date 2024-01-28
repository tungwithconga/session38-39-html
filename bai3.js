document.addEventListener("DOMContentLoaded", function () {
    const fadingImage = document.getElementById("fadingImage");
    const overlay = document.getElementById("overlay");

    fadingImage.onload = function () {
        fadingImage.style.filter = "blur(10px)";
        overlay.style.opacity = 1;

        setTimeout(function () {
            fadingImage.style.filter = "blur(0)";
            overlay.style.opacity = 0;
        }, 2000);
    };
});
