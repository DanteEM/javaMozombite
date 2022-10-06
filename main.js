const nombredeAlumno = prompt("Introduzca su nombre")

function saludar(Nombre) {
    alert("Bienvenido Alumno " + Nombre)
}
saludar(nombredeAlumno)


let question = 0
let nota1 = parseInt(prompt("Ingrese su nota del Primer Examen"));
for (question < 5; question++;) {
    if (nota1 <= 20) {
        break;
    } else {
        nota1 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }

}

let nota2 = parseInt(prompt("Ingrese su nota del Segundo Examen"));
for (question < 5; question++;) {
    if (nota2 <= 20) {
        break;
    } else {
        nota2 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }

}

let nota3 = parseInt(prompt("Ingrese su nota del Tercero Examen"));
for (question < 5; question++;) {
    if (nota3 <= 20) {
        break;
    } else {
        nota3 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }

}



let nota4 = parseInt(prompt("Ingrese su nota del Cuarto Examen"));
for (question < 5; question++;) {
    if (nota4 <= 20) {
        break;
    } else {
        nota4 = parseInt(prompt("ingrese numero del 1 al 20, porfavor"));
    }

}


function sumaYDivision(Nota1, Nota2, Nota3, Nota4) {
    return (Nota1 + Nota2 + Nota3 + Nota4) / 4;
}
let resultado = sumaYDivision(nota1, nota2, nota3, nota4);
alert("Tu calificacion final es " + resultado)

if (resultado >= 11) {
    alert("Felicidades! Estas aprobado")
} else {
    alert("Mis mas sinceras penas, estas desaprobado")
}





class Notas {
    constructor(nombre, nota) {
        this.nombre = nombre.toUpperCase();
        this.nota = nota
    }
}
const primerExamen = new Notas("Primer Examen", nota1)
const segundoExamen = new Notas("Segundo Examen", nota2)
const tercerExamen = new Notas("Tercer Examen", nota3)
const cuartoExamen = new Notas("Cuarto Examen", nota4)

const arrayDeNotas = [primerExamen, segundoExamen, tercerExamen, cuartoExamen]

const examenes = [];
examenes.push(primerExamen);
examenes.push(segundoExamen);
examenes.push(tercerExamen);
examenes.push(cuartoExamen);

console.log(examenes);
for (let Notas of examenes) {
    console.log(Notas);
}

const listaDeNotas = [nota1, nota2, nota3, nota4]
alert("Estas son las notas de tu primer hasta el ultimo examen " + listaDeNotas.join("\n"))

const lstaDeNotas = document.getElementById("notas");


arrayDeNotas.forEach(notas => {
    let li = document.createElement("li");
    li.innerHTML = `<p>${notas.nombre} </p>
    <p>Nota: ${notas.nota}</p>`

    lstaDeNotas.appendChild(li)
})


document.getElementById("Usuario").innerHTML = nombredeAlumno


class Quejas {
    constructor(nombre, gradoSection, queja){
        this.nombre = nombre;
        this.gradoSection = gradoSection;
        this.queja = queja;
    }
}

const arrayDeQuejas = [];


const formularioQuejas =document.getElementById("formularioQuejas");


formularioQuejas.addEventListener("submit", (e) =>{
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const grado = document.getElementById("gradoSection");
    const quejas = document.getElementById("queja");
    const quejaCompleta = new Quejas(nombre.value, grado.value, quejas.value)
    arrayDeQuejas.push(quejaCompleta)
    console.log(arrayDeQuejas);
formularioQuejas.reset();
})

formularioQuejas.onclick = () => {
    console.log("interactuo con el formulario");
}

localStorage.setItem ("Alumno", nombredeAlumno )
localStorage.setItem ("examen 1", nota1 )
localStorage.setItem ("examen 2", nota2 )
localStorage.setItem ("examen 3", nota3 )
localStorage.setItem ("examen 4", nota4 )

let localS = [
    localStorage.getItem ("Alumno"),
    localStorage.getItem ("examen 1"),
    localStorage.getItem ("examen 2"),
    localStorage.getItem ("examen 3"),
    localStorage.getItem ("examen 4")
]

console.log(localS);