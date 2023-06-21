const miBoton = document.getElementBy('miBoton')
// Define la funcion que se ejecutará cuando se haga click en el boton
function handleClick() {
    showAlert('¡Hola! Has hecho clic en el botón.');
}
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
event.preventDefault();
validateForm();
});
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
    }
    function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
    }