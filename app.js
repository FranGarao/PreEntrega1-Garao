const btn = document.getElementById("btn");
const tocarBoton = btn.addEventListener("click", () => {
  names();
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
    if (segundoAlumno === "" || !isNaN(segundoAlumno)) {
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
