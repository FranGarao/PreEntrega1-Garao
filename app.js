const btn = document.getElementById("btn");
const btnTwo = document.getElementById("btn-2");
const tocarBoton = btn.addEventListener("click", () => {
  names();
});
const tocarBotonDos = btnTwo.addEventListener("click", () => {
  promedio();
});

function names() {
  alert("Ingresa el nombre de los 5 alumnos");
  let primerAlumno = prompt("Ingresa el primer alumno");
  if (primerAlumno === "" || !isNaN(primerAlumno)) {
    alert(
      "Debe ingresar un nombre\nPor favor reinicie la pagina o aprete el boton"
    );
  } else {
    segundoAlumno = prompt("Ingresa el segundo alumno");
    if (
      segundoAlumno === "" ||
      (!isNaN(segundoAlumno) && typeof segundoAlumno === "string")
    ) {
      alert(
        "Debe ingresar un nombre\nPor favor reinicie la pagina o aprete el boton"
      );
    } else {
      tercerAlumno = prompt("Ingresa el tercer alumno");
      if (tercerAlumno === "" || !isNaN(tercerAlumno)) {
        alert(
          "Debe ingresar un nombre\nPor favor reinicie la pagina o aprete el boton"
        );
      } else {
        cuartoAlumno = prompt("Ingresa el cuarto alumno");
        if (cuartoAlumno === "" || !isNaN(cuartoAlumno)) {
          alert(
            "Debe ingresar un nombre\nPor favor reinicie la pagina o aprete el boton"
          );
        } else {
          quintoAlumno = prompt("Ingresa el quinto alumno");
          if (quintoAlumno === "" || !isNaN(quintoAlumno)) {
            alert(
              "Debe ingresar un nombre\nPor favor reinicie la pagina o aprete el boton"
            );
          } else {
            alumnos = [
              primerAlumno,
              segundoAlumno,
              tercerAlumno,
              cuartoAlumno,
              quintoAlumno,
            ];

            alert("Esta es la lista de alumnos: ");

            function lista() {
              for (alumno of alumnos) {
                lista =
                  alumnos[0] +
                  "\n" +
                  alumnos[1] +
                  "\n" +
                  alumnos[2] +
                  "\n" +
                  alumnos[3] +
                  "\n" +
                  alumnos[4];
              }
              alert(lista);
            }
            lista();
          }
        }
      }
    }
  }
}

function promedio() {
  alert(
    "Vamos a calcular tu promedio, la nota final debe ser mayor o igual a 21 para aprobar."
  );
  let primerTrimestre = parseFloat(
    prompt("Ingresa la nota de tu primer trimestre")
  );
  if (isNaN(primerTrimestre) || primerTrimestre > 10 || primerTrimestre < 0) {
    alert("Por favor, ingresa un numero del 1 al 10");
  } else {
    let segundoTrimestre = parseFloat(
      prompt("Ingresa la nota de tu segundo trimestre")
    );
    if (
      isNaN(segundoTrimestre) ||
      segundoTrimestre > 10 ||
      segundoTrimestre < 0
    ) {
      alert("Por favor, ingresa un numero del 1 al 10");
    } else {
      let tercerTrimestre = parseFloat(
        prompt("Ingresa la nota de tu tercer trimestre")
      );
      if (
        isNaN(tercerTrimestre) ||
        tercerTrimestre > 10 ||
        tercerTrimestre < 0
      ) {
        alert("Por favor, ingresa un numero del 1 al 10");
      } else {
        resultado = primerTrimestre + segundoTrimestre + tercerTrimestre;
        if (resultado >= 21) {
          alert("Tu promedio es de " + resultado + "/30" + "\n Aprobaste!");
        } else {
          alert("Tu promedio es de " + resultado + "/30" + "\n Desabrobaste!");
        }
      }
    }
  }
}
