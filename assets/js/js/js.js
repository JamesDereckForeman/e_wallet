//inicio de sesion
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Verificar las credenciales
      if (username === 'james' && password === 'gato') {
        // Credenciales válidas, redirigir a la pantalla de wallet
        window.location.href = '/assets/pages/ewallet.html';
      } else {
        // Credenciales inválidas, mostrar mensaje de error y credenciales correctas
        alert('Usuario o contraseña invalido. Inténtalo de nuevo. (EL USUARIO ES JAMES, LA CLAVE ES GATO)');
      }
    });
  });
  
  $(document).ready(function() {
    // saldo inicial
    let balance = 100.00;

    // mostrar saldo
    $('#balance').text(balance.toFixed(1));

    // agregar boton de transaccion
    $('#add-transaction').click(function() {
        const amount = parseFloat(prompt('Ingresa la cantidad de dinero:'));
        if (!isNaN(amount)) {
            // Recargar saldo
            balance += amount;
            $('#balance').text(balance.toFixed(1));}
   
  // Subtract transaction button click event
   $('#subtract-transaction').click(function() {
    const amount = parseFloat(prompt('Ingresa la cantidad de dinero:'));
    if (!isNaN(amount)) {
        // Recargar saldo
        balance -= amount;
        $('#balance').text(balance.toFixed(1));

            // Agregar a la historia
            $('#transaction-history').append(`<li>${amount > 0 ? '+' : '-'} $${Math.abs(amount.toFixed())}</li>`);
        }
    });
});})
