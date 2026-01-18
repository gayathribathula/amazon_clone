const searchInput = document.querySelector(".navinput");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", function () {
    const searchText = searchInput.value.toLowerCase();

    boxes.forEach(box => {
        const title = box.querySelector("h2").innerText.toLowerCase();

        if (title.includes(searchText)) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
});
