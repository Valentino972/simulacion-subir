const bbdd = [{
    usuario:"Valentino",
    contraseña: "pepito"
},
{
    usuario:"juan",
    contraseña: "juan123"
},
{   
    usuario:"Thiago",
    contraseña:"barca123"
}]

const user = {
    usuario: "",
    contraseña: ""
}

const buttonLogin = document.getElementById("login-button");
const app = document.querySelector("#app");
const input = document.querySelectorAll("input");

const bienvenidaAlUsuario = nombre => {
    app.innerHTML = "<h1 class='title'>Bienvenido sr/sra ${nombre}</h1>"
}

buttonLogin.addEventListener("click", ()=>{

});

inputs.forEach( (elemento) => {
    elemento.addEventListener("input",(event)=>{
        console.log(event)  
    })
})