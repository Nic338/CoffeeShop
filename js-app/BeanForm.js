import { AddBean } from "./main.js";

const beanForm = document.querySelector("#bean-form");

export const BeanForm = () => {
    return `
    <div class="field">
            <label class="label" for="bean-name">Name</label>
            <input type="text" name="bean-name" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bean-region">Region</label>
            <input type="text" name="bean-region" class="input" />
        </div>
        <div class="field">
            <label class="label" for="bean-notes">Notes</label>
            <input type="text" name="bean-notes" class="input" />
        </div>
        
        <button style="margin: 10px;" class="form_submit" id="submit-form">Add Bean</button>
        `
}

beanForm.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submit-form") {

        const name = document.querySelector("input[name='bean-name']").value
        const region = document.querySelector("input[name='bean-region']").value
        const notes = document.querySelector("input[name='bean-notes']").value

        const dataToSendToAPI = {
            Name: name,
            Region: region,
            Notes: notes
        }

        AddBean(dataToSendToAPI)
    }
})