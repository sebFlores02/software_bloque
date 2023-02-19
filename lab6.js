let alert_text = document.getElementById("alert_text")
let boton_lgn = document.getElementById("boton-lgn")
let boton_psw = document.getElementById("boton-psw")

// function aviso(){
//     if(password.value.length < 8){
//         console.log("muy chica")
//         alert_text.textContent = "Contrasena Muy Chica"
//     } else {
//         console.log("correcto")
//         alert_text.textContent = "Contrasena Bien"
//     }
// }

boton_lgn.addEventListener("click", aviso => {
    let password = document.getElementById("password").value
    let confirmacion_password = document.getElementById("confirmacion_password").value
    if(confirmacion_password != password){
        alert_text.innerHTML = "Las contrasenas no coinciden"
    } else {
        alert_text.innerHTML = "Acceso"
    }
    console.assert(password == confirmacion_password, "No coinciden")
    console.log(password)
    console.log(confirmacion_password)
} )

boton_psw.addEventListener("click", viewPassword => {
    let password = document.getElementById("password")
    let confirmacion_password = document.getElementById("confirmacion_password" )
    if (password.type === "password" && confirmacion_password.type === "password") {
      password.type = "text";
      confirmacion_password.type = "text";
    } else {
      password.type = "password";
      confirmacion_password.type = "password";
    }
    console.log("funcion")
})
