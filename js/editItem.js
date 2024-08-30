import { getDateTime } from "./getDateTime.js";

export const editItem = (element, editNameinput, dateText) => {
    element.textContent = editNameinput.value;
    dateText.innerText = getDateTime();
}