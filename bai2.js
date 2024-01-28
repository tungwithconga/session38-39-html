document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("searchIcon");
    const searchBar = document.getElementById("searchBar");

    let isExpanded = false;

    searchIcon.addEventListener("click", function () {
        if (isExpanded) {
            searchBar.style.width = "0";
            searchIcon.style.transform = "scale(1)";
        } else {
            searchBar.style.width = "50px"; 
            searchIcon.style.transform = "scale(0)";
        }

        isExpanded = !isExpanded;
    });
});
