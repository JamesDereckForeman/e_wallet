//inicio de sesion
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Verificar las credenciales
      if (username === 'profe_cesar' && password === 'pongameunsiete') {
        // Credenciales válidas, redirigir a la pantalla de wallet
        window.location.href = '/assets/pages/ewallet.html';
      } else {
        // Credenciales inválidas, mostrar mensaje de error y credenciales correctas
        alert('Usuario o contraseña invalido. Inténtalo de nuevo. (EL USUARIO ES "profe_cesar", LA CLAVE ES "pongameunsiete")');
      }
    });
});
  //inicio de sesion mutante
$(document).ready(function() {
    $('#formulario').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Verificar las credenciales
      if (username === 'profe_cesar' && password === 'pongameunsiete') {
        // Credenciales válidas, redirigir a la pantalla de wallet
        window.location.href = '/assets/pages/ewallet.html';
      } else {
        // Credenciales inválidas, mostrar mensaje de error y credenciales correctas
        alert('Usuario o contraseña invalido. Inténtalo de nuevo. (Usuario: profesor_cesar, clave: pongameunsiete)');
      }
    });
  });
  
  function credenciales() {
  alert("Usuario: profe_cesar Clave: pongameunsiete");
}

$(document).ready(function () {
  // saldo inicial
  let balance = 0;

  // mostrar saldo
  $('#balance').text(balance.toFixed(1));

  // agregar boton de transaccion
  $('#add-transaction').click(function () {
    const amount = parseFloat(prompt('Ingresa la cantidad de dinero:'));
    if (!isNaN(amount)) {
      // Recargar saldo
      balance += amount;
      $('#balance').text(balance.toFixed(1));
    }
    
    // Subtract transaction button click event
    $('#subtract-transaction').click(function () {
      const amount = parseFloat(prompt('Ingresa la cantidad de dinero:'));
      if (!isNaN(amount)) {
        // Recargar saldo
        balance -= amount;
        $('#balance').text(balance.toFixed(1));
      }
    })
  })
})
function boton_buscar() {
  alert("Buscando Contacto");
}
function modal_agregar_contacto() {
  alert("Contacto agregado con exito");
}