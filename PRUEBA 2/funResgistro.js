
var reg_nombre = $("#reg_correo");
var reg_contrasena = $("#reg_contrasena1");
var conf_contrasena = $("#reg_contrasena2");
var reg_boton = $("#reg_boton");

reg_boton.on("click", function(e) {
  e.preventDefault();

  var valor_nombre = reg_nombre.val();
  var valor_contrasena = reg_contrasena.val();
  var valor_confirmacion = conf_contrasena.val();

  // Validar los datos según tus parámetros
  if (valor_nombre.length < 7 || valor_nombre.length > 50) {
    alert("El correo debe tener entre 7 y 50 caracteres.");
    return;
  }

  if (valor_contrasena.length < 6 || valor_contrasena.length > 30) {
    alert("La contraseña debe tener entre 6 y 30 caracteres.");
    return;
  }

  if (valor_contrasena !== valor_confirmacion) {
    alert("La contraseña y su confirmación no coinciden.");
    return;
  }

  // Registro de los datos si cumplen con los parámetros
  var datosUsuario = {
    correo: valor_nombre,
    contrasena: valor_contrasena
  };

  // Convertir los datos a formato JSON
  var jsonData = JSON.stringify(datosUsuario);

  // Guardar los datos en algún lugar, como en el almacenamiento local del navegador
  localStorage.setItem("datosUsuario", jsonData);

  // Mostrar un mensaje de éxito
  alert("Datos registrados correctamente.");

  // Redirigir a otra página
  window.location.href = "inicio.html";
});
