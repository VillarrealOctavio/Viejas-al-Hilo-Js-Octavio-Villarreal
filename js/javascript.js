// Minuto 46 del video.
// Contenedores de productos para incluir estructura HTML en su interior
const stockDeMates = document.querySelector(".todosMates")
const stockDeBolsos = document.querySelector(".todosBolsos")
const stockDeTermos = document.querySelector(".todosTermos")
const imgAndinista = document.querySelector(".andinista")
const carritoModal = document.querySelector(".modalCarrito")

// Botones para incluir un "evento".
const btnBolso = document.querySelector("#botonBolsos")
const btnMate = document.querySelector("#botonMates")
const btnTermo = document.querySelector("#botonTermos")
const filterMate = document.querySelector("#filtrarMate")

// Arrays
let enElCarrito = [];

// Eventos
btnMate.addEventListener(`click`, ()=>{
    showProduct(stockMates)
})

filterMate.addEventListener(`change`,()=> { //Preguntar este ejercicio al profe
    console.log(filterMate.value)
    if (filterMate.value=="todos") {
        showProduct(stockMates)
    }else{
        showProduct(stockMates.filter(el=>el.tipo.includes(filterMate.value)))
    }
})


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
// ------------------------------------------------------------


function agregarAlCarritoDeCompras(id) {
 let agregarElProducto = stockMates.find(el=>el.id==id);
 console.log(agregarElProducto);
 enElCarrito.push(agregarElProducto)

 let div = document.createElement("div")
 div.innerHTML= `
            <p>Producto: ${agregarElProducto.tipo}</p>
            <p>Precio: $${agregarElProducto.precio}</p>
            <p>Cantidad: ${agregarElProducto.cantidad}</p>
 `
 carritoModal.appendChild(div)
};

// ------------------------------------------------------------
function actualizarCarrito (){

};

// -----------------------------------------------------------

function recuperar (){

};

