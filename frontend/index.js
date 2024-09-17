import { backend } from "declarations/backend";

async function loadCompanyValues() {
    try {
        const values = await backend.getValues();
        const valuesList = document.getElementById("valuesList");
        valuesList.innerHTML = "";
        values.forEach((value) => {
            const li = document.createElement("li");
            li.textContent = value;
            valuesList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading company values:", error);
    }
}

// Load company values when the page loads
window.addEventListener("load", loadCompanyValues);
