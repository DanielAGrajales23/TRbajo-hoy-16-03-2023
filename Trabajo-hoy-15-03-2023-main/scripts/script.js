let Nombre, Correo , Mensaje;

let Formulario = document.getElementById("form")

Formulario.addEventListener ("submit" , (e)=>{
    e.preventDefault()
    leeDatos()
})

function leeDatos(){
    Nombre = document.getElementById("Nombre").value
    Correo = document.getElementById("Correo").value
    Mensaje = document.getElementById("Textarea").value
    ValidarData(Nombre,Correo,Mensaje)
    GuardarLocalStorage(Nombre,Correo,Mensaje)
}


function ValidarData(Nombre,Correo,Mensaje){
    if(Nombre.length=0 || Correo.length==0 || Mensaje.length==0){
        Swal.fire({
            Title: "Error!",
            Text:  "Do you want to continue",
            icon:  "erorr",
            confirmButtonText: "Cool",
            iconColor: "Purple"
        })  
    }
}

function GuardarLocalStorage(Nombre,Correo,Mensaje) {
localStorage.setItem("Nombre",Nombre)
localStorage.setItem("Correo",Correo)
localStorage.setItem("Mensaje",Mensaje)
ListarData()
}

function ListarData(){
    let NombreUsu = localStorage.getItem("Nombre")
    let CorreoUsu = localStorage.getItem("Correo")
    let MensajeUsu = localStorage.getItem("Correo")
}


