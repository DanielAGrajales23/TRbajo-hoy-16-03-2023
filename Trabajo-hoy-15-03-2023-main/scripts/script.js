let Nombre, correo , Mensaje;

let Formulario = document.getElementById("form")

Formulario.addEventListener ("submit" , (e)=>{
    e.preventDefault()
    leeDatos()
})

function leeDatos(){
    Nombre = document.getElementById("nombre").value
    Correo = document.getElementById("correo").value
    Mensaje = document.getElementById("Textarea").value
    ValidarData(Nombre,Correo,Mensaje)
    GuardarLocalStorage(Nombre,Correo,Mensaje)
}


function ValidarData(Nombre,Correo,Mensaje){
    if(Nombre.length=0 || Correo.length==0 || Mensaje.length==0){
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'ok'
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

