console.log("Sesion js009 NPM y Axios");

const apiFetch = document.getElementById("apiFetch");
const apiAxios = document.getElementById("apiAxios");

// apiFetch.addEventListener();

apiFetch.onclick = async () => {
   // console.log("boton apifetch");
    const responseJson = await fetch("https://fakestoreapi.com/products");
    const response = await responseJson.json();
    console.log( response );
}

/**
 * Solicitud HTTP usando Axios
 */
apiAxios.onclick = async () => {
     const response = await axios.get("https://fakestoreapi.com/products");
     console.log( response );
 } // con axios ya no hay que convertir a json

 
