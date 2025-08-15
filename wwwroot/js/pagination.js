document.addEventListener("DOMContentLoaded", () => {
    const itemsPerPage = 10;
    const container = document.getElementById("dogs-container");
    const dogs = Array.from(container.getElementsByClassName("dog-item"));
    const pagination = document.getElementById("pagination");

    let currentPage = 1;

    function renderPage(page) {
        dogs.forEach((dog, index) => {
            dog.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage)
                ? "block" : "none";
        });
    }

    function setupPagination() {
        const totalPages = Math.ceil(dogs.length / itemsPerPage);
        pagination.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement("button");
            btn.textContent = i;
            btn.addEventListener("click", () => {
                currentPage = i;
                renderPage(currentPage);
            });
            pagination.appendChild(btn);
        }
    }

    setupPagination();
    renderPage(currentPage);
});
