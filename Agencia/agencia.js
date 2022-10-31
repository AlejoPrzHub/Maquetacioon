let personas =[];
function agregarPersonas()
{
    let nombre = document.getElementById("nombre");
    let origen = document.getElementById("origen");
    let destino = document.getElementById("destino");
    let cantidad = document.getElementById("numPersonas")
    let date = document.getElementById("fecha")


    let persona =
    {
        nombre_persona:nombre.value,
        origen_persona:origen.value,
        destino_persona:destino.value,
        cantidad_persona:cantidad.value,
        date_persona:date.value
    };
    personas.push(persona);
    console.log(persona);
}

function mostrarInfo()
{
    let lista = document.getElementById("personas");
    let aside = document.querySelector(".lista2");
   
            let imprimir =[];
            for (let i = 0; i < personas.length; i++) 
            {
                if(
                    personas[i].destino_persona.toLowerCase() == "canarias",
                    personas[i].destino_persona.toLowerCase() == "mallorca",
                    personas[i].destino_persona.toLowerCase() == "galicia"
                  )
                {
                    imprimir.push(personas[i])
                }
                
            }


            if(aside.classList.contains("lista1"))
            {
                aside.classList.remove("lista1")
            }

                lista.innerHTML =  `<tr class="tablaa">
                                    <th>Nombre</th>
                                    <th>Origen</th>
                                    <th>Destino</th>
                                    <th>Num. P</th>
                                    <th>Fecha</th>`;

                for(let i = 0;i < imprimir.length; i++)
                {
                    lista.innerHTML +=
                    `<tr class="tablaa">
                        <th > ${imprimir[i].nombre_persona}</th>
                        <th > ${imprimir[i].origen_persona}</th>
                        <th > ${imprimir[i].destino_persona}</th>
                        <th > ${imprimir[i].cantidad_persona}</th>
                        <th > ${imprimir[i].date_persona}</th>
                    </tr>`
                }
    
}

