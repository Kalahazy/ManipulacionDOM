/* 
DOM (Document Object Model / Modelo de Objetos del Documento)

Cuando creamos páginas que usan HTML + CSS estamos creando páginas estáticas (porque no tienen interactividad), cuando agregamos JS, nuestras páginas se convierten en sitios dinámicos (tienen interactividad).

El navegador lee el documento HTML de arriba a abajo y de izquierda a derecha (reenderización)

Para que una página se reenderice correctamente, se toma en cuenta el contenido, el peso de las imágenes, la conexión a internet, etc.

Cuando el documento se reenderiza, se crea un "árbol" (DOM), tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran "hojas" (nodos).

Cuando hablamos del DOM y entendemos que se representa como un árbol con ramas y hojas, entendemos que cada una de estas ramas y hojas es un nodo.

Que es un nodo?
Representación más básica de lo qu existe en un DOM, puede ser un elemento o etiqueta, puede ser un atributo, puede ser un texto, incluso un comentario.
    - Documento: Nodo raiz, a partir del cual se derivan los demás nodos. Es el objeto a partir del cual se puede acceder a cualquier elemento dentro de él. Todos los noso derivan de este.
    - Element: Son nodos definidos por etiquetas HTML (div, h1, p, img, meta, head, script, etc.), ya sea que se vean o no se vean (etiquetas que interpreta el navegador).
    - Text: El texto que hay dentro de un elemento se considera un nodo, con la característica que es un nodo hijo.   
    - Atribbutes: Los atributos de las etiquetas también se convierten en nodos. Son nodos que están asociados a un elemento y se pueden considerar también nodos hijos.
    - Comment: Los comentarios tambien son un nodo, porque forman parte del documento.

Para que utilizamos JS en un DOM?
    - Agregar elementos HTML
    - Modificar elementos HTML
    - Borrar elementos HTML
*/ 

//Comenzamos a trabajar con los nodos de mi documento html

//1 Paso. Guardar los elementos HTML en variables de JS (let, var, const)

/*
Métodos de selección de elementos: Permiten traer una etiqueta html y guardarla para su uso posterior.

    - Métodos tradicionales
        - getElementByID
        - getElementByTagName
        - getElementByClassName
*/

//Aqui obtengo un elemento por id
const nombrePaciente = document.getElementById("nombrePaciente");
console.log(nombrePaciente);

//Aqui obtengo varios elementos por clase
const columnas = document.getElementsByClassName("col");
console.log(columnas);

//Aqui obtengo varios elementos por etiqueta
const inputs = document.getElementsByTagName("input");
console.log(inputs);


/*
Métodos actuales

    - document.querySelector
    - document.querySelectorAll
*/

//Aqui obtengo un elemento por el selector #
let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aqui obtengo varios elementos por el selector .
let containers = document.querySelectorAll(".container");
console.log(containers);


/*
Métodos para modificar elementos en su texto

    - innerHTML: Esta propiedad nos permite acceder y modificar el contenido de nuestro elemento. Asignamos una cadena de texto y podemos modificar o eliminar el texto. (ya existe un texto)

    - texContent: Cambiar o recuperar el contenido dentro de un elemento. Podemos modificar o eliminar el texto. (crear un texto nuevo)
*/

//modificando el texto de un h1 con un innerHTML
let titulo = document.getElementById("titulo");
titulo.innerHTML = "Nuevo texto de mi título";

//Creando un nuevo texto con innerHTML
//titulo.innerHTML = "<p>Bienvenido(a)</p>"
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML = "<p>Mensaje de Confirmación</p>";


/*
Crear elementos
    1. Crear el elemento
        - createElement
        - createTextNode
        - createComment
    2. Poner el elemento
        - append
        - appendChild
*/

//Creando un elemento con createElement
let imagen = document.createElement("img");
//Crear los atributos de un elemento
imagen.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
imagen.alt = "Foto de perrito feliz";

//Poner mi imagen en el contenedor de mensajeConfirmacion
mensajeConfirmacion.appendChild(imagen);