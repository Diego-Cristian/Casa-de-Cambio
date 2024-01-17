//EMPIEZA FUNCION PARA VERIFICAR ROL
alert(
	"Para poder ingresar al contenido de la pagina porfavor utilizar el rol de 'profesor' o 'tutor', en caso contrario no se visualizara nada."
);

//Primero se empieza obteniendo el valor de la variable nombre, con un prompt que te pregunte cual es tu rol
let nombre = prompt("¿Cual es su rol?");
//Luego se ejecuta una funcion en la cual se checkea que si el usuario es "profesor" o "tutor" se le de acceso a la pagina, y en el caso contrario se le de una advertencia que no tiene acceso a la pagina.
function checkearNombre() {
	if (nombre == "profesor" || nombre == "tutor") {
		alert("Bienvenido a la pagina de divisas");
	} else {
		alert("Usted no tiene acceso al contenido de la pagina");
		window.location.reload();
	}
}

checkearNombre();

//EMPIEZA FUNCION CONVERSION

let botonConvertir = document.getElementById("botonCotizador");
botonConvertir.addEventListener("click", convertir);

function convertir() {
	let valore = parseInt(document.getElementById("valor").value);
	let resultado = 0;
	let dolar = 1100;
	let euro = 1300.4;
	//Primero en la parte superior se declararon las variables necesarias para poder realizar la conversion, la variable valore, viene dada por lo ingresado por el usuario en el input type number con el id "valor"
	if (document.getElementById("uno").checked) {
		resultado = valore / dolar;
		alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(2));
		//Hasta aqui si el usuario selecciona el input type radio con id uno el codigo ejecuta la funcion de dividir el valore por el valor del dolar dado en la variable, dando asi el cambio en la variable resultado, luego con el metodo toFixed(2) se le indica que devuelva un numero con no mas de dos decimales.
	} else if (document.getElementById("dos").checked) {
		resultado = valore / euro;
		alert("El cambio de Pesos a Euros es: $" + resultado.toFixed(2));
		//Aqui se realiza el mismo procedimiento que antes simplemente que se cambia a la variable euro.
	} else {
		alert("Tienes que completar el formulario");
		//Aqui al final se le instruye al codigo que en caso el usuario no haber seleccionado ninguna opcion o no haber ingresado un valor se le informe que tiene que completar el formulario.
	}
}
// AQUI EMPIEZA BOTON CRIPTO
let botonCripto = document.getElementById("criptoBoton");
// SE LE DA UN VALOR ABOTON CRIPTO
botonCripto.addEventListener("click", preguntarCripto);
// SE LE AGREGA LA FUNCION
function preguntarCripto() {
	let cripto = prompt(
		"¿Que criptoprecio te gustaria saber? Puede ser : 'Ethereum', 'Bitcoin' o 'USDT'."
	);
	// AQUI SE EMPIEZA PREGUNTANDO POR UN PROMPT QUE PRECIO TE GUSTARIA SABER
	if (cripto == "Ethereum") {
		alert("El precio de ethereum es de $2300 USD");
		let rePregunta = prompt("Te gustaria saber algun precio mas?");
		if (rePregunta == "si") {
			preguntarCripto();
		} else {
			return;
		}
		// SI LA RESPUESTA ES ETHEREUM SE DA EL PRECIO Y SE PREGUNTA SI GUSTARIA SABER ALGUNO MAS, SI DICE QUE SI SE REPREGUNTA SI DICE CUALQUIER OTRA COSA SE CIERRA.
	} else if (cripto == "Bitcoin") {
		alert("El precio del Bitcoin es de $43000 USD");
		let rePregunta = prompt("Te gustaria saber algun precio mas?");
		if (rePregunta == "si") {
			preguntarCripto();
		} else {
			return;
		}
		// SI LA RESPUESTA ES BITCOIN SE DA EL PRECIO Y SE PREGUNTA SI GUSTARIA SABER ALGUNO MAS, SI DICE QUE SI SE REPREGUNTA SI DICE CUALQUIER OTRA COSA SE CIERRA.
	} else if (cripto == "USDT") {
		alert("El valor del USDT es de $ 1 USD");
		let rePregunta = prompt("Te gustaria saber algun precio mas?");
		if (rePregunta == "si") {
			preguntarCripto();
		} else {
			return;
		}
		// SI LA RESPUESTA ES USDT SE DA EL PRECIO Y SE PREGUNTA SI GUSTARIA SABER ALGUNO MAS, SI DICE QUE SI SE REPREGUNTA SI DICE CUALQUIER OTRA COSA SE CIERRA.
	} else {
		alert("Porfavor asegurese de que sea 'Ethereum', 'Bitcoin' o 'USDT'.");
	}
	// Y PARA FINALIZAR SI EL USUARIO SE EQUIVOCO SE DA UN ALERT QUE DA LOS NOMBRES CORRECTOS DE LAS CRIPTOMONEDAS QUE SE PUEDEN SABER EL PRECIO.
}

//CRIPTO NEWS

let botonCriptoNews = document.getElementById("criptoNewsBoton");

botonCriptoNews.addEventListener("click", noticiasCripto);

function noticiasCripto() {
	window.open("../pages/criptoNoticias.html");
}
