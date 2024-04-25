document.getElementById('customer-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores del formulario
    var name = document.getElementById('name').value;
    var apellido = document.getElementById('apellido').value;
    var cedula = document.getElementById('cedula').value;
    var email = document.getElementById('email').value;
    var direccion = document.getElementById('direccion').value;
    var phone = document.getElementById('phone').value;

    // Aquí puedes hacer lo que quieras con los datos, como enviarlos a un servidor o guardarlos localmente
    console.log('Nombre:', name);
    console.log('Apellido:', apellido);
    console.log('Cedula:', cedula);
    console.log('Correo electrónico:', email);
    console.log('Direccion:', phone);
    console.log('Teléfono:', phone);

    // Puedes agregar aquí el código para enviar los datos a un servidor

    // Limpiar el formulario después de enviar
    document.getElementById('customer-form').reset();
});


