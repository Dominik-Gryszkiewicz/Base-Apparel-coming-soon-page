const input = document.querySelector('.content__form-input')
const btn = document.querySelector('.content__form-button')
const errorIcon = document.querySelector('.content__form-icon-error')
const errorInfo = document.querySelector('.error-info')

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    if (input.value.includes("@")) {
        errorIcon.style.display = '';
        errorInfo.style.display = '';
    } else {
        errorIcon.style.display = 'flex';
        errorInfo.style.display = 'block';
    }
})