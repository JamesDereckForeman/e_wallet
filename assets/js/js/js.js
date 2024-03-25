//inicio de sesion
$(document).ready(function() {
    $('#loginForm').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Verificar las credenciales
      if (username === 'profe_cesar' && password === 'pongameunsiete') {
        // Credenciales válidas, redirigir a la pantalla de wallet
        window.location.href = '/assets/pages/menu.html';
      } else {
        // Credenciales inválidas, mostrar mensaje de error y credenciales correctas
        alert('Usuario o contraseña invalido. Inténtalo de nuevo.');
      }
    });
});
  //inicio de sesion *arreglo
$(document).ready(function() {
    $('#formulario').submit(function(event) {
      event.preventDefault();
      var username = $('#username').val();
      var password = $('#password').val();
  
      // Verificar las credenciales
      if (username === 'profe_cesar' && password === 'pongameunsiete') {
        // Credenciales válidas, redirigir a la pantalla de wallet
        window.location.href = '/assets/pages/menu.html';
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
})//alerta contactos
function boton_buscar() {
  alert("Buscando Contacto");
}
function modal_agregar_contacto() {
  alert("Contacto agregado con exito");
}
  document.addEventListener("DOMContentLoaded", function() {
    var welcomeText = document.getElementById("welcomeText");
    welcomeText.classList.add("fade-in");
  });
  // Datos de transaccion
  var transactions = [
    { date: "2024-03-20", description: "Pago Recibido", amount: 80 },
    { date: "2024-03-22", description: "Compra Online", amount: -50 },
    { date: "2024-03-25", description: "Retiro de Fondos", amount: -30 },
  ];

  // Funcion para poblar la tabla
  function populateTransactions() {
    var transactionTable = document.getElementById("transactionTable");
    transactions.forEach(function(transaction) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.description}</td>
        <td>${transaction.amount}</td>
      `;
      transactionTable.appendChild(row);
    });
  }

  // Llamar a la funcion cuando carga la pagina
  window.onload = function() {
    populateTransactions();
  };