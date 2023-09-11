
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click',() => {
  toggleButton.classList.toggle('close') 
  navWrapper.classList.toggle('show')
})

navWrapper.addEventListener('click',e => {
  if(e.target.id === 'nav'){
    navWrapper.classList.remove('show')
    toggleButton.classList.remove('close')
  }
})


/*AQUI VA EL CONSUMO DE LA API */

/*URL DE LA API*/
const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=3&q=caramel%20sauce';


/* API KEY Y METODO GET  */
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '19be94db4cmshcca437cbcbdb5f0p108358jsn7331bebed3c0',
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
};


const cargarPostres = async () => {

  try {
      const respuesta = await fetch(url, options);

      if (respuesta.status == 200) {
          const data = await respuesta.json();

          let postres = "";

          //  const { name, description, thumbnail_url } =data.results;

          data.results.forEach(({ name, description, thumbnail_url }) => {
                  
              postres +=`
              <div class="card-recetas">
              <img class="card-img-top" src="${thumbnail_url}" alt="Card image cap">
              <div class="card-body-recetas">
                  <h5 class="card-title-recetas">${name}</h5>
                  <p class="card-text-recetas">${description}</p>
                  <a class="btn-recetas" href="#">Preparación</a>
              </div>
          </div>
              ` 
          })


          document.getElementById("card-deck").innerHTML = peliculas;



      }


  } catch (error) {
      console.log(error.message);
  }
}

cargarPostres();