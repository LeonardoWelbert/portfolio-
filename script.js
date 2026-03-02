document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("btn-ver-mais");
    const extras = document.getElementById("projetos-extras");

    btn.addEventListener("click", function () {
        extras.classList.toggle("mostrar");

        if (extras.classList.contains("mostrar")) {
            btn.textContent = "Ver menos projetos";
        } else {
            btn.textContent = "Ver mais projetos";
        }
    });

});