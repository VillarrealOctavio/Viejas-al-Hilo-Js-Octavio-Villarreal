// Contenedores de productos para incluir estructura HTML en su interior
const stockDeMates = document.querySelector(".todosMates")
const stockDeBolsos = document.querySelector(".todosBolsos")
const stockDeTermos = document.querySelector(".todosTermos")
const imgAndinista = document.querySelector(".andinista")
const productosEnCarrito = document.querySelector(".composicionCarrito")

// Botones para incluir un "evento".
const btnBolso = document.querySelector("#botonBolsos")
const btnMate = document.querySelector("#botonMates")
const btnTermo = document.querySelector("#botonTermos")
const filterMate = document.querySelector("#filtrarMate")
const showCarrito = document.querySelector("#mostrarCarrito")

// Arrays
let enElCarrito = [];

// Eventos
btnMate.addEventListener(`click`, ()=>{
    showProduct(stockMates)
})

filterMate.addEventListener(`change`,()=> {
    console.log(filterMate.value)
    if (filterMate.value=="todos") {
        showProduct(stockMates)
    }else{
        showProduct(stockMates.filter(el=>el.tipo.includes(filterMate.value)))
    }
})

showCarrito.addEventListener(`click`, ()=>{
    agregarAlCarritoDeCompras()
})   //Ayer me quedé trabado en este ejercicio. Minuto 43 del video.




// Funciones
function showProduct (array) {
    imgAndinista.innerHTML=""; 
    let filtrar = document.createElement("Select")
    filtrar.id=`filtrarMate`
    filtrar.innerHTML=`          
                <option value="todos">Todos</option>
                <option value="azul">Azul</option>
                <option value="blanco">Blanco</option>
                <option value="caramelo">Caramelo</option>
                <option value="carmin">Carmin</option>
                <option value="celeste">Celeste</option>
                <option value="fucsia">Fucsia</option>
                <option value="lila">Lila</option>
                <option value="rosa">Rosa</option>
                <option value="terracota">Terracota</option>
                <option value="turqueza">Turqueza</option>
                <option value="verde">Verde</option>
                <option value="violeta">Violeta</option>
                <option value="marrón">Marrón</option>
                <option value="naranja">Naranja</option>
                <option value="negro">Negro</option>
                <option value="rojo">Rojo</option>
    `   
        stockDeMates.prepend(filtrar)
    array.forEach(el =>{
        let div = document.createElement("div");
        div.innerHTML += `
                <div class="card" style="width: 18rem;">
                    <img src="${el.img}" class="card-img-top" alt="mate">
                    <div class="card-body">
                        <h5 class="card-title">${el.tipo}</h5>
                        <p class="card-text">Precio:$${el.precio}</p>
                        <a id="agregarProducto${el.id}" class="btn btn-primary">Agregar al carrito</a>
                    </div>
                </div>
        `
        stockDeMates.appendChild(div);
        let bntAgregarCarrito = document.querySelector(`#agregarProducto${el.id}`)
        // console.log(bntAgregarCarrito) No borrar este console.log para tenerlo de guía a la hora de ejecutar.
        bntAgregarCarrito.addEventListener(`click`,()=> {
            agregarAlCarritoDeCompras(el.id)
        })
    });
}

function agregarAlCarritoDeCompras(id) {
 let agregarElProducto = stockMates.find(el=>el.id==id);
 console.log(agregarElProducto);
 enElCarrito.push(agregarElProducto)

 let div = document.createElement("div")
 div.innerHTML= `
                <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title">Viejas al Hilo</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div class="modal-body">
                    <span>Mate: ${agregarElProducto.tipo}</span> <span>Precio: $${agregarElProducto.precio}</span> 
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Precio total: </button>
                    </div>
                </div>
                </div>
                </div>
 `
 productosEnCarrito.appendChild(div)
};


function actualizarCarrito (){

};



function recuperar (){

};

