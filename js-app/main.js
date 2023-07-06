import { BeanForm } from "./BeanForm.js";

const url = "https://localhost:5001/api/BeanVariety/";

const button = document.querySelector("#run-button");
const beanVarietiesList = document.querySelector("#bean-list");
const beanForm = document.querySelector("#bean-form")
beanForm.innerHTML = BeanForm()

button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {

            let html = "<ul>";

            const arrayOfBeans = beanVarieties.map(bean => ({ ...bean }));

            arrayOfBeans.forEach(beanVariety => {
                html += `<li>${beanVariety.name} - ${beanVariety.region}</li>`
            });

            html += "</ul>";

            beanVarietiesList.innerHTML = html
        })
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

export const AddBean = (beanVariety) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(beanVariety)
    }

    return fetch(url, fetchOptions)
        .then(response => response.json())
}

