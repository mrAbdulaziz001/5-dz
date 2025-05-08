document.addEventListener("DOMContentLoaded", function () {
    const addLinkBtn = document.getElementById("addLinkBtn");
    const textInput = document.getElementById("textInput");
    const modeBtn = document.getElementById("toggleModeBtn");
    const linksContainer = document.getElementById("linksContainer");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        modeBtn.textContent = "qora";
    }
    addLinkBtn.addEventListener("click", function () {
        let inputValue = textInput.value.trim();
        if (inputValue === "") {
            alert("error");
            return;
        }


        let linkContainer = document.createElement("div");
        linkContainer.className = "link-item";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";

        let link = document.createElement("a");
        link.href = "#";
        link.className = "link-text";
        link.textContent = inputValue;

        let deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "remove";

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";

        editBtn.addEventListener("click", () => {
            const result = prompt("O'zgartiring", inputValue);
            if (result) {
                link.textContent = result;
            }
        });

        deleteBtn.addEventListener("click", function () {
            linkContainer.remove();
        });


        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                link.style.textDecoration = "line-through";
            } else {
                link.style.textDecoration = "none";
            }
        });

        linkContainer.appendChild(checkbox);
        linkContainer.appendChild(link);
        linkContainer.appendChild(editBtn);
        linkContainer.appendChild(deleteBtn);
        linksContainer.appendChild(linkContainer);

        textInput.value = "";
    });

    modeBtn.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            modeBtn.textContent = "qora";
        } else {
            localStorage.setItem("theme", "dark");
            modeBtn.textContent = "oq";
        }
    });
});

