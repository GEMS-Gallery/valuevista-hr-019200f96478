import { backend } from "declarations/backend";

async function loadCompanyValues() {
    try {
        const values = await backend.getValues();
        const valuesList = document.getElementById("valuesList");
        valuesList.innerHTML = "";
        values.forEach((value, index) => {
            const li = document.createElement("li");
            if (value.includes("Josh")) {
                li.innerHTML = `<span class="primary-value">${value}</span> <i class="fas fa-star cool-icon" aria-hidden="true"></i>`;
                li.classList.add("primary-value");
            } else {
                li.textContent = value;
            }
            valuesList.appendChild(li);
        });
    } catch (error) {
        console.error("Error loading company values:", error);
    }
}

// Load company values when the page loads
window.addEventListener("load", loadCompanyValues);
