// Contenedores de productos para incluir estructura HTML en su interior
const stockDeMates = document.querySelector(".todosMates")
const stockDeBolsos = document.querySelector(".todosBolsos")
const stockDeTermos = document.querySelector(".todosTermos")
const imgAndinista = document.querySelector(".andinista")
const carritoModal = document.querySelector(".modalCarrito")
const totalPrice = document.querySelector("#precioTotal")

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
        showProduct(stockMates.filter(el=> el.color==filterMate.value))
    }
})


// Funciones
function showProduct (array) {
    imgAndinista.innerHTML=""; 
    stockDeMates.innerHTML="";

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
 let repeated = enElCarrito.find(item=>item.id==id)
 /*if(repeated){
     repeated.cantidad=repeated.cantidad + 1;
 }else{*/
    let agregarElProductoAlCarrito = stockMates.find(el=>el.id==id);
    console.log(agregarElProductoAlCarrito);
    enElCarrito.push(agregarElProductoAlCarrito)
    actualizarCarrito();
       carritoModal.innerHTML += `
               <p>Producto: ${agregarElProductoAlCarrito.tipo}</p>
               <p>Precio: $${agregarElProductoAlCarrito.precio}</p>
               <p id="cantidad${agregarElProductoAlCarrito.id}">Cantidad: ${agregarElProductoAlCarrito.cantidad}</p>
               <button id="btnEliminar${agregarElProductoAlCarrito.id}">Eliminar Producto</button>
    `
       const btnEliminar = document.querySelector(`#btnEliminar${agregarElProductoAlCarrito.id}`)
       btnEliminar.addEventListener(`click`,()=>{
           console.log(btnEliminar)})
        //    console.log(btnEliminar.parentElement)
   
    //    enElCarrito = enElCarrito.filter(el => el.id != agregarElProductoAlCarrito.id)
 //}
//  localStorage.setItem=(`carritoDeCompra`, JSON.stringify(enElCarrito))
};

// ------------------------------------------------------------
function actualizarCarrito (){
    totalPrice.innerText= enElCarrito.reduce((acc, producto)=>acc+(producto.cantidad*producto.precio), 0);
};

// -----------------------------------------------------------

function recuperar (){
    // let recuperar = JSON.parse(`carritoDeCompras`)
};
let mail = document.querySelector(".correo");
localStorage.setItem("correoElectronico", JSON.stringify(mail))
let obtener = JSON.parse(localStorage.getItem("correoElectronico"))