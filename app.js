document.addEventListener("DOMContentLoaded", () => {
    const inputName = document.querySelector("#amigo");
    const nameList = document.querySelector("#listaAmigos");
    const resultList = document.querySelector("#resultado");
    let names = [];

    // Función para agregar nombres a la lista
    function agregarAmigo() {
        const name = inputName.value.trim();
        if (name && !names.includes(name)) {
            names.push(name);
            updateNameList();
            inputName.value = "";
        } else if (names.includes(name)) {
            alert("Este nombre ya está en la lista.");
        }
    }

    // Función para actualizar la lista visualmente
    function updateNameList() {
        nameList.innerHTML = "";
        names.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            nameList.appendChild(li);
        });
    }

    // Función para sortear un nombre
    function sortearAmigo() {
        if (names.length > 1) {
            const shuffled = [...names].sort(() => 0.5 - Math.random());
            resultList.innerHTML = "";
            shuffled.forEach((name, index) => {
                const nextIndex = (index + 1) % shuffled.length;
                const li = document.createElement("li");
                li.textContent = `${name} → ${shuffled[nextIndex]}`;
                resultList.appendChild(li);
            });
        } else {
            alert("Debes ingresar al menos dos nombres para sortear.");
        }
    }

    // Hacer funciones accesibles desde el HTML
    window.agregarAmigo = agregarAmigo;
    window.sortearAmigo = sortearAmigo;
});