// declarar variables//

const table = document.getElementById("table");

const notas = document.getElementById("notas");

const interactNotas = document.getElementById("notas");

var arrayNotas = [];

//Declarar Class//

class Nota {
    constructor(nombre, nota1, nota2, nota3, nota4, promedio) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
        this.promedio = promedio;
    }
}
//Declarar Funciones//

const promedio = (n1, n2, n3, n4) => {
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    n3 = parseInt(n3);
    n4 = parseInt(n4);
    let p = ((n1 + n2 + n3 + n4) / 4)
    console.log("nota final: " + p)
    return p
}

interactNotas.onclick = () => {
    console.log("interactuo con el formulario");
}

const generarTabla = () => {
    console.log(arrayNotas);
    const tableBody = table.querySelector("tbody")
    tableBody.innerHTML = ""
    arrayNotas.map((itemNota) => {
        const itemTable = `
    <td>
        ${itemNota.nombre}
    </td>
    <td>
    ${itemNota.nota1}
    </td>
    <td>
    ${itemNota.nota2}
    </td>
    <td>
    ${itemNota.nota3}
    </td>
    <td>
    ${itemNota.nota4}
    </td>
    <td>
    ${itemNota.promedio}
    </td>`

        let td = document.createElement("tr")

        td.innerHTML = itemTable

        tableBody.appendChild(td)

    })

}


const enviarNotas = (event) => {
    event.preventDefault();
    const {
        nombre,
        nota1,
        nota2,
        nota3,
        nota4
    } = event.target;

    const calculetPromedio = promedio(nota1.value, nota2.value, nota3.value, nota4.value);

    calculetPromedio >= 11 ? Swal.fire ("Felicidades, aprobaste!") : Swal.fire("Mis mas sinceras penas, estas desaprobado");


    const nuevaNota = new Nota(nombre.value, nota1.value, nota2.value, nota3.value, nota4.value, calculetPromedio)

    arrayNotas.push(nuevaNota)

    generarTabla();


    localStorage.setItem("Alumno", nombre.value)
    localStorage.setItem("examen 1", nota1.value)
    localStorage.setItem("examen 2", nota2.value)
    localStorage.setItem("examen 3", nota3.value)
    localStorage.setItem("examen 4", nota4.value)

    let localS = [
        localStorage.getItem("Alumno"),
        localStorage.getItem("examen 1"),
        localStorage.getItem("examen 2"),
        localStorage.getItem("examen 3"),
        localStorage.getItem("examen 4")
    ]

    console.log(localS);

    sessionStorage.setItem("Alumno", nombre.value)
    sessionStorage.setItem("examen 1", nota1.value)
    sessionStorage.setItem("examen 2", nota2.value)
    sessionStorage.setItem("examen 3", nota3.value)
    sessionStorage.setItem("examen 4", nota4.value)

    const url = 'https://jsonplaceholder.typicode.com/users'

    fetch(url)
    .then(Response => Response.json())
    .then (data => {
        console.log(data);
    })
    .catch (err=> console.log(err));



}



//declarar Eventos//

notas.addEventListener("submit", enviarNotas)
