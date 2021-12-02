
window.addEventListener("load",()=>{
    let lista = document.querySelector(".errores")
    let enviar = document.querySelector("#submit")
    let form = document.querySelectorAll("input , select")
    let errores = document.querySelectorAll("#errores")
    let duracion = document.querySelector("#duracion")
    let numbers = document.querySelectorAll("#numbers")
    
    let errors = []

    for (let i = 0; i < form.length; i++) {
            form[i].addEventListener("blur",()=>{
                if(form[i].value.length == 0){
                    form[i].classList.add("is-invalid")
                    form[i].classList.remove("is-valid")
                    errores[i].innerText = "Este campo no puede estar vacio"
                }else{
                    form[i].classList.remove("is-invalid")
                    form[i].classList.add("is-valid")
                    errores[i].innerText = ""
                }
            })
    }

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("blur",()=>{
            if(numbers[0].value > 10 || numbers[0].value < 0){
                numbers[0].classList.add("is-invalid")
                numbers[0].classList.remove("is-valid")
                errores[1].innerText = "Este campo debe estar entre 0 y 10"
            }else if (numbers[1].value > 10 || numbers[1].value < 0){
                numbers[1].classList.add("is-invalid")
                numbers[1].classList.remove("is-valid")
                errores[2].innerText = "Este campo debe estar entre 0 y 10"
            }
        })  
    }
   
   duracion.addEventListener("blur",()=>{
       if(duracion.value > 360 || duracion.value < 60){
           duracion.classList.add("is-invalid")
           duracion.classList.remove("is-valid")
           errores[4].innerText = "Este campo debe estar entre 60 y 360"
       }
   })

    enviar.addEventListener("click",(e)=>{
        errors = []
            if(form[0].classList.value != "is-valid"){
                errors.includes("El campo de nombre no puede estar vacio") ? null : errors.push("El campo de nombre no puede estar vacio")
            }
            if(form[1].classList.value != "is-valid" || form[2].classList.value != "is-valid"){
                errors.includes("Los campos de calificacion y premios tienen que estar entre 0 y 10") ? null : errors.push("Los campos de calificacion y premios tienen que estar entre 0 y 10")
            }
            if(form[3].classList.value != "is-valid" || form[5].classList.value != "is-valid"){
                errors.includes("Todos los campos deben estar completos") ? null : errors.push("Todos los campos deben estar completos")
            }
            if(form[4].classList.value != "is-valid"){
                errors.includes("El campo de duracion debe estar entre 60 y 360") ? null : errors.push("El campo de duracion debe estar entre 60 y 360")
            }

            if(errors.length > 0){
                e.preventDefault()
                lista.innerHTML = ""
                for (let i = 0; i < errors.length; i++) {
                    lista.innerHTML += errors[i] + "<br>"
                }
            }else{
                alert("La película se guardó satisfactoriamente")
            }
        }
    )

   
})