export function handleClickOutside(inputElement, callback) {
    function onClick(event) {
        if (!inputElement.contains(event.target)) {
            callback();
            document.removeEventListener('click', onClick);
        }
    }

    document.addEventListener('click', onClick);
}