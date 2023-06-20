
function formulario(){
    
}


    const nombre = document.getElementById("nombre")
    const email = document.getElementById("email")
    const asunto = document.getElementById("asunto")
    const mensaje = document.getElementById("mensaje")
    const form = document.getElementById("form")
    const parrafo1 = document.getElementById("warning_1")
    const parrafo2 = document.getElementById("warning_2")
    const parrafo3 = document.getElementById("warning_3")
    const parrafo4 = document.getElementById("warning_4")
    const parrafo5 = document.getElementById("warning_5")

    form.addEventListener("submit", e=>{
       
        let warning_1 = ""
        let warning_2 = ""
        let warning_3 = ""
        let warning_4 = ""
        let warning_5 = ""

        entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        parrafo1.innerHTML = ""
        if(nombre.value.length <3 ){
            warning_1 += `El Nombre no es valido <br>`
            entrar = true
        }if (nombre.value.length >50) {
            warning_1 += `El Nombre no es valido <br>`
            entrar = true
        }

        if (!regexEmail.test(email.value)){
                    warning_2 += `El Email no es valido <br>`
                    entrar = true
                }

                if(asunto.value.length <2){
                    warning_3 += `El Asunto no es valido <br>`
                    entrar = true
                } if(asunto.value.length >50){
                    warning_3 += `El Asunto no es valido <br>`
                    entrar = true
                }

                if(mensaje.value.length <2){
                    warning_4 += `El Mensaje no es valido <br>`
                    entrar = true
                }if(mensaje.value.length >300){
                    warning_4 += `El Mensaje no es valido <br>`
                    entrar = true
                }



                if(entrar){
                        parrafo1.innerHTML = warning_1
                        parrafo2.innerHTML = warning_2
                        parrafo3.innerHTML = warning_3
                        parrafo4.innerHTML = warning_4

                        e.preventDefault() 
                }else{
                        parrafo5.innerHTML = "Enviado"
                }
        
        


    })