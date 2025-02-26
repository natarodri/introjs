let miTexto = document.getElementById("text1");
let miBoton = document.getElementById("boton1");

miBoton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se recargue
    miBoton.style.backgroundColor = "purple"; // Cambia el color del botón
    
    let textoIngresado = miTexto.value.trim(); // Obtiene el texto sin espacios extras
    let cantidadLetras = textoIngresado.length; // Cuenta la cantidad de caracteres
    
    // Transforma la palabra agregando "1" después de cada letra
    let palabraTransformada = textoIngresado.split("").map(letra => letra + "1").join(" ");

    // Si el elemento ya existe, lo actualiza; si no, lo crea
    let resultado = document.getElementById("resultado");
    
    if (!resultado) {
        resultado = document.createElement("p"); // Crea un nuevo <p>
        resultado.id = "resultado"; // Le da un ID
        document.body.appendChild(resultado); // Lo agrega al body
    }

    resultado.textContent = Hola, ${textoIngresado}! Tu palabra tiene ${cantidadLetras} letras. Transformada: ${palabraTransformada};
});