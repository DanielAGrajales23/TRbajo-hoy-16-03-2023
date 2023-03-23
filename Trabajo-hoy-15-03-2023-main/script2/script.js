let propietario,modelo,placa,tipodevehiculo,fecha,horas,cantidad;

let Formulario = document.getElementById("form")

Formulario.addEventListener ("submit" , (e)=>{
    e.preventDefault()
    leeDatos()
})

function leeDatos(){
    propietario = document.getElementById('Propietario').value
    modelo = document.getElementById("Modelo").value
    placa = document.getElementById("Placa").value
    tipodevehiculo = document.getElementById("Tipodevehiculo").value
    fecha = document.getElementById("Fecha").value
    horas = document.getElementById("Horas").value
    cantidad = document.getElementById("Cantidad").value
    ValidarData(propietario,modelo,placa,tipodevehiculo,fecha,horas,cantidad)
    GuardarLocalStorage(propietario,modelo,placa,tipodevehiculo,fecha,horas,cantidad)
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
function GuardarLocalStorage(propietario,modelo,placa,tipodevehiculo,fecha,horas,cantidad){
    localStorage.setItem("Propietario",propietario)
    localStorage.setItem("Modelo",modelo)
    localStorage.setItem("Placa",placa)
    localStorage.setItem("Tipodevehiculo",tipodevehiculo)
    localStorage.setItem("Fecha",fecha)
    localStorage.setItem("Horas",horas)
    localStorage.setItem("Cantidad",cantidad)
    ListarData()
}
function ListarData(){
    let propietariousu = localStorage.getElementById("Propietario")
    let modelousu = localStorage.getElementById("Modelo")
    let placausu = localStorage.getElementById("Placa")
    let tipodevehiculousu = localStorage.getElementById("Tipodevehiculo")
    let fechausu = localStorage.getElementById("Fecha")
    let horasusu = localStorage.getElementById("Horas")
    let cantidadusu = localStorage.getElementById("Cantidad")
}