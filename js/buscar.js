const fallasUrl = "http://mapas.valencia.es/lanzadera/opendata/Monumentos_falleros/JSON";

function filtroLetra(elemento) {
  // let letra = document.querySelector(`input[name="calle"]`).value;
  // return elemento.properties.nombre.startsWith(letra);
  return elemento;
}

function toUpp() {
  document.querySelector(`input[name="calle"]`).value = document.querySelector(`input[name="calle"]`).value.toUpperCase();
}

function buscar() {
  const fetchPromesa = fetch(fallasUrl);
  fetchPromesa.then(response => {return response.json();})
  .then(respuesta => {

    console.log(respuesta.features[0].properties);
    const resultado = respuesta.features.filter(filtroLetra);
    // const columnas = document.querySelector(".column");
    let column1 = document.createElement("div");
    column1.classList.add('column');
    let column2 = document.createElement("div");
    column2.classList.add('column');
    let column3 = document.createElement("div");
    column3.classList.add('column');
    let columns = [];
    columns[0]=column1;
    columns[1]=column2;
    columns[2]=column3;
    let i = 0;
    
    document.querySelector("main").innerHTML = "";
    document.querySelector("main").appendChild(column1);
    document.querySelector("main").appendChild(column2);
    document.querySelector("main").appendChild(column3);

    resultado.forEach(falla => {
      let item = document.createElement("div");
      item.innerHTML += `<img src='${falla.properties.boceto}'></img>`;
      item.innerHTML += `<button class="ubicationBtn">ver mapa</button>`;
      item.classList.add('falla');
      columns[i].appendChild(item);
      i++;
      if(i==3) i = 0;
       // + " -- [" + fuente.geometry.coordinates + "]"
    });


  });
}

function init() {

  // Click en el boton de buscar
  // document.querySelector(`input[type="button"]`).addEventListener("click", buscar);
  // Texto cambia en el <input>
  // document.querySelector(`input[type="text"]`).addEventListener("input", toUpp);

  buscar();
}

// The mother of the lamb.
window.onload = init;
