var saldoCuenta = 11000;
var limiteExtraccion = 3000;
var nombreUsuario = prompt("Ingrese su nombre de usuario:");

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
//Funciones que tenes que completar

function iniciarSesion() {
    var password = prompt("Ingrese su contraseña: ", "(Ingresar: 1234 para tener acceso!)");

    if (password == 1234){
        alert("Bienvenido " + nombreUsuario + " ya puedes comenzar a realizar tus operaciones.");
    } else {
        alert("La cuenta ha sido bloqueada por su seguridad. Por favor, solicite ayuda a su banco emisor.")
        saldoCuenta = 0;
        limiteExtraccion = 0;
    }
}

function cambiarLimiteDeExtraccion(){
  var nuevoLimite = parseInt(prompt("Indica el nuevo límite que deseas:"));

  if(nuevoLimite >= 0){
    limiteExtraccion = parseInt(nuevoLimite);
  	alert("Nuevo límite: $"+limiteExtraccion);
  }else {
    alert("Valor ingresado incorrecto.");
  }
	actualizarLimiteEnPantalla();
}

function extraerDinero() {
	var saldoAnterior = saldoCuenta;
	var restar = parseInt(prompt("Indique el monto a extraer:"));
	var soloCien = restar % 100;

  	if (saldoCuenta>= 0 && saldoCuenta >= restar && restar <= limiteExtraccion && soloCien == 0){
  	saldoCuenta -= parseInt(restar);
  		alert("Has extraido: $"+restar+"\nSaldo anterior: $"+saldoAnterior+"\nSaldo actual: $"+saldoCuenta);
  	}
    else if(saldoCuenta < restar){
  		alert("Dinero que dispone es insuficiente.");
  	}
    else if(soloCien != 0){
  		alert("Ingrese un valor multiplo de $100.");
    }
    else{
  		alert("Límite excedido. Intente con un valor menor.");
  	}
	actualizarSaldoEnPantalla();
}

function depositarDinero() {
	var saldoAnterior = saldoCuenta;
	var sumar = parseInt(prompt("Indique el monto a depositar:"));

  if (sumar <= 50000) {
    	saldoCuenta += parseInt(sumar);
    	alert("Has depositado: $"+sumar+"\nSaldo anterior: $"+saldoAnterior+"\nSaldo actual: $"+saldoCuenta);
  } else if(sumar>=50000) {
      alert("Ingrese un monto menor. Para realizar un deposito mayor a $50000, es necesario acercarse a su banco emisor.");
  }
  else{
      alert("Por favor, ingrese un valor correcto.");
  }
	actualizarSaldoEnPantalla();
}

function pagarServicio() {
	var servicios;
  	var agua = {
  		importe: 350,
  		nombre: "Agua"
  	}
  	var telefono = {
  		importe: 425,
  		nombre: "Teléfono"
  	}
  	var luz = {
  		importe: 210,
  		nombre: "Luz"
  	}
  	var internet = {
  		importe: 570,
  		nombre: "Internet"
	};
  	servicios = prompt("Seleccione el servicio a pagar. \n 1- Agua \n 2- Teléfono \n 3- Luz \n 4- Internet")
			switch (servicios) {
				case "1":
					descontarPago(agua);
					break;
				case "2":
					descontarPago(telefono);
					break;
				case "3":
					descontarPago(luz);
					break;
				case "4":
					descontarPago(internet);
					break;
				default:
					alert("Opción no válida.");
	 }

function descontarPago(servicio) {
		var saldoAnterior = saldoCuenta;

		if (saldoCuenta >= servicio.importe) {
			saldoCuenta -= servicio.importe;
			alert("Has pagado el servicio de "+servicio.nombre+"\nSaldo anterior: $"+saldoAnterior+"\nDinero descontado: $"+servicio.importe+"\nSaldo actual: $"+saldoCuenta)
		}else {
			alert("Dinero insuficiente.\nUsted tiene en su cuenta: $"+saldoCuenta+"\nDinero necesario: $"+servicio.importe);
		}
		actualizarSaldoEnPantalla();}
}

function transferirDinero() {
	var cuentaUno = "123456";
  var cuentaDos = "654321";
    var montoATransferir = parseInt(prompt("Indique el monto a transferir:"));
    var validarCuentaAmiga = prompt("Ingrese el número de cuenta a la que quiera transferir:");

    if(saldoCuenta >= montoATransferir && validarCuentaAmiga === cuentaUno || validarCuentaAmiga === cuentaDos){
      saldoCuenta -= parseInt(montoATransferir);
      alert("Se ha transferido con exito!\nNúmero de cuenta cuenta: "+validarCuentaAmiga+"\nDinero transferido: $"+montoATransferir+"\nSaldo actual: $"+saldoCuenta);
  } else if (validarCuentaAmiga !== cuentaUno || validarCuentaAmiga !== cuentaDos){
      alert("El número de cuenta seleccionada, no esta habilitada.");
  }  else{
      alert("En este momento no dispone de fondos suficientes. Por favor ingrese un monto menor.");
    }

    	actualizarSaldoEnPantalla();
}

//Funciones que actualizan el valor de las variables en el HTML

function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
