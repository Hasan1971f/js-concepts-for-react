const addToLocalStorage = () =>{
    const idInput = document.getElementById('Storage-id')
    const id = idInput.value
    
    const valueInput = document.getElementById('Storage-value')
    const value = valueInput.value

    localStorage.setItem(id, value)
    idInput.value = ''
    valueInput.value = ''
}
    