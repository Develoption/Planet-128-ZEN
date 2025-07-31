document.querySelector('.default').addEventListener('click', function () {
    const extraCards = document.querySelectorAll('.cards .extra');
    const button = this;

    extraCards.forEach(card => {
        card.style.display = (card.style.display === 'none' || card.style.display === '') ? 'block' : 'none';
    });

    button.textContent = button.textContent === 'Показать' ? 'Скрыть' : 'Показать';
});

function search() {
    const input = document.getElementById("search");
    const value = input.value.trim();

    if (value === "") return;

    alert("Ответ: " + value);

    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.className = "planet";
    btn.setAttribute("data-planet", value);
    btn.setAttribute("data-description", value);
    btn.textContent = value;

    btn.onclick = function() {
        modalTitle.innerText = this.dataset.planet;
        modalDescription.innerText = this.dataset.description;
        modal.style.display = "block";
    }

    li.appendChild(btn);
    document.getElementById("results").appendChild(li);

    input.value = "";
}

function clearResults() {
    document.getElementById("results").innerHTML = "";
}

const modal = document.getElementById("modal-1");
const btns = document.querySelectorAll(".planet");
const span = document.getElementsByClassName("close-1")[0];
const modalTitle = document.getElementById("modal-title-1");
const modalDescription = document.getElementById("modal-description-1");

btns.forEach(button => {
    button.onclick = function() {
        modalTitle.innerText = this.dataset.planet;
        modalDescription.innerText = this.dataset.description;
        modal.style.display = "block";
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
