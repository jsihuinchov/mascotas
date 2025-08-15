const filterSelect = document.getElementById('category-filter');
const dogList = document.getElementById('dogs-container');
const dogs = Array.from(dogList.getElementsByClassName('dog-item'));
const pagination = document.getElementById('pagination');

const itemsPerPage = 12;
let currentPage = 1;
let filteredDogs = dogs;

// Filtrado por categoría
filterSelect.addEventListener('change', () => {
    const category = filterSelect.value;
    filteredDogs = dogs.filter(dog => category === "" || dog.dataset.category === category);
    currentPage = 1;
    renderPage();
});

// Función de renderizado de páginas
function renderPage() {
    dogs.forEach(dog => dog.style.display = "none"); // Oculta todo
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    filteredDogs.slice(start, end).forEach(dog => dog.style.display = "block");

    renderPaginationButtons();
}

// Botones de paginación
function renderPaginationButtons() {
    pagination.innerHTML = "";
    const pageCount = Math.ceil(filteredDogs.length / itemsPerPage);
    for (let i = 1; i <= pageCount; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = "page-btn";
        if (i === currentPage) btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentPage = i;
            renderPage();
        });
        pagination.appendChild(btn);
    }
}

// Inicializa la primera página
renderPage();
