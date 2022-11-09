const Clickbuttoon =document.querySelectorAll(".buttoon")
const tbody =document.querySelector(".tbody")
let carrito=[];

Clickbuttoon.forEach
(
    btn=>
    {
        btn.addEventListener("click", addToCarritoItem)
    }
    )

    function addToCarritoItem(e)
    {
        const buttoon = e.target
        const item = buttoon.closest(".hola")
        const itemTitle = item.querySelector(".card-tittle").textContent;
        const itemPrice = item.querySelector(".precio").textContent;
        const itemImages =item.querySelector(".ima_gen").src

        const newObjeto = 
        {
            title:itemTitle,
            precio:itemPrice,
            img:itemImages,
            cantidad:1
        }

        addItemCarrito(newObjeto)
    }

    function addItemCarrito(newObjeto)
    {
        const ImputElemento = tbody.getElementsByClassName("input__elemento")
        for(let i=0;i<carrito.length;i++)
        {if(carrito[i].title.trim()===newObjeto.title.trim())
        {
            carrito[i].cantidad ++;
            const inputValue = ImputElemento[i]
            inputValue.value++;
            carritoTotal()

            return null;
        }}
        carrito.push(newObjeto)
        renderCarrito()
    }

    function renderCarrito()
    {
        tbody.innerHTML=""
        carrito.map(item=>
            {
                const tr = document.createElement("tr")
                tr.classList.add("itemCarrito")
                const Content = `


                <th scope="row">1</th>
            <td class="table__productos" style="display:flex;" >
                <img src=${item.img}  style="width: 9rem;object-fit:contain;border-radius: 6px;margin-right: 20px;">
                <h6 class="title">${item.title}</h6>
            </td>
            <td class="table__precios"><p>${item.precio}</p></td>
            <td class="table__cantidad">
                <input class="input__elemento" type="number" min="1" value=${item.cantidad} style="width: 40px;border:none;outline: 0;font-size: 16px;font-weight: 700;margin-right: 30px;margin-bottom: 20px;">
                <button class="delete btn btn-danger">x</button>
            </td>
            `

            tr.innerHTML = Content;
            tbody.append(tr);

            tr.querySelector(".delete").addEventListener("click",removeItemCarrito)
            // tr.querySelector("input__elemento").addEventListener(`change`,sumaCantidad)
            })
            carritoTotal()
    }

function carritoTotal()
{
    let total = 0;
    const itemCartTotal = document.querySelector(".itemCartTotal")
    carrito.forEach((item) =>
    {
        const precio = Number(item.precio.replace ("$", ""))
        total = total + precio * item.cantidad
    })
    itemCartTotal.innerHTML = `Total $${total}`

}

function removeItemCarrito(e)
{
   const buttonDelete = e.target;
   const tr = buttonDelete.closest(".itemCarrito")
   const title = tr.querySelector(".title".textContent)
   for(i=0;i<carrito.length;i++)
    {
        if(carrito[i].title.trim() === title.trim())
        {
        carrito.splice(i,1)
        }
    }
    tr.remove()
    carritoTotal()
}

function sumaCantidad(e)
{
    const sumaImput = e.target
    const tr = sumaImput.closest(".ItemCarrito")
    const title = tr.querySelector(".title").textContent;
    carrito.forEach(item =>{if(item.title.trim()===title)
        {
            sumaImput.value <1? (sumaImput.value = 1) : sumaImput.value;
            item.cantidad = sumaImput.value;
            carritoTotal()
        }})
}