document.getElementById('customer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    var name = document.getElementById('name').value;
    var apellido = document.getElementById('apellido').value;
    var cedula = document.getElementById('cedula').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;
    var phone = document.getElementById('phone').value;

    // Validaciones
    if (!validateName(name)) {
        alert('Nombre no válido. Solo se permiten letras y espacios.');
        return false;
    }
    if (!validateName(apellido)) {
        alert('Apellido no válido. Solo se permiten letras y espacios.');
        return false;
    }
    if (!validateCedula(cedula)) {
        alert('Cédula no válida. Debe contener exactamente 10 dígitos.');
        return false;
    }
    if (!validateEmail(email)) {
        alert('Correo electrónico no válido.');
        return false;
    }
    if (!validateAddress(direccion)) {
        alert('Dirección no válida.');
        return false;
    }
    if (!validatePhoneNumber(phone)) {
        alert('Número de teléfono no válido. Debe contener exactamente 10 dígitos.');
        return false;
    }

    // Guardar datos en localStorage
    var customerData = {
        name: name,
        apellido: apellido,
        cedula: cedula,
        email: email,
        direccion: direccion,
        phone: phone
    };

    localStorage.setItem('customerData', JSON.stringify(customerData));

    // Mostrar datos en consola (opcional)
    console.log('Datos guardados:', customerData);

    // Limpiar el formulario después de enviar
    document.getElementById('customer-form').reset();
});

function validateName(name) {
    const nameRegex = /^[A-Za-z\s]+$/;
    return nameRegex.test(name);
}

function validateCedula(cedula) {
    const cedulaRegex = /^\d{10}$/; // Debe contener exactamente 10 dígitos
    return cedulaRegex.test(cedula);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateAddress(address) {
    const addressRegex = /^[A-Za-z0-9\s,.\-]+$/;
    return addressRegex.test(address);
}

function validatePhoneNumber(phone) {
    const phoneRegex = /^\d{10}$/; // Debe contener exactamente 10 dígitos
    return phoneRegex.test(phone);
}

document.getElementById('cedula').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').slice(0, 10); // Permitir solo dígitos y máximo 10 caracteres
});

document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '').slice(0, 10); // Permitir solo dígitos y máximo 10 caracteres
});

document.getElementById('name').addEventListener('input', function() {
    this.value = this.value.replace(/[^A-Za-z\s]/g, ''); // Permitir solo letras y espacios
});

document.getElementById('apellido').addEventListener('input', function() {
    this.value = this.value.replace(/[^A-Za-z\s]/g, ''); // Permitir solo letras y espacios
});

// Recuperar datos almacenados y mostrar en consola
var storedCustomerData = JSON.parse(localStorage.getItem('customerData'));
console.log('Datos almacenados:', storedCustomerData);
