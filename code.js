/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt("Ingrese su nombre:");
  datosPersona.edad = parseInt(prompt("Ingrese su año de nacimiento:"));
  datosPersona.ciudad = prompt("Ingrese su ciudad:");
  datosPersona.interesPorJs = confirm("¿Le interesa Javascript?");
  
  let anioActual = 2023
  datosPersona.edad = anioActual - datosPersona.edad;

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombreSpan = document.getElementById("nombre");
  let edadSpan = document.getElementById("edad");
  let ciudadSpan = document.getElementById("ciudad");
  let interesSpan = document.getElementById("javascript");

  nombreSpan.textContent = datosPersona.nombre;
  edadSpan.textContent = datosPersona.edad;
  ciudadSpan.textContent = datosPersona.ciudad;
  interesSpan.textContent = datosPersona.interesPorJs ? "Si" : "No";
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById('fila');

  // listado.forEach(materia => {
  //   const caja = document.createElement('div');
  //   caja.classList.add('caja');

  //   const imagen = document.createElement('img');
  //   imagen.src = materia.imgUrl;
  //   imagen.alt = materia.lenguajes;
    
  //   const parrafoLenguajes = document.createElement('p');
  //   parrafoLenguajes.classList.add('lenguajes');
  //   parrafoLenguajes.textContent = materia.lenguajes;
    
  //   const parrafoBimestre = document.createElement('p');
  //   parrafoBimestre.classList.add('bimestre');
  //   parrafoBimestre.textContent = materia.bimestre;

  //   caja.appendChild(imagen);
  //   caja.appendChild(parrafoLenguajes);
  //   caja.appendChild(parrafoBimestre);

  //   fila.appendChild(caja);
  // });
  
  listado.forEach(materia => {
      const caja = document.createElement('div');
      caja.classList.add('caja');
  
      caja.innerHTML = `
        <img src="${materia.imgUrl}" alt="${materia.lenguajes}">
        <p class="lenguajes">${materia.lenguajes}</p>
        <p class="bimestre">${materia.bimestre}</p>
      `;
      
      fila.appendChild(caja);
    });

  const botonObtenerMaterias = document.getElementById('obtener-materias');
  botonObtenerMaterias.disabled = true;

}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  const sitio = document.getElementById("sitio");
  sitio.classList.toggle("dark");
 
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener('keydown', function(event) {
  if (event.key === 'F' || event.key === 'f') {
    const sobreMi = document.getElementById('sobre-mi');
    sobreMi.classList.remove('oculto');
  }
});
