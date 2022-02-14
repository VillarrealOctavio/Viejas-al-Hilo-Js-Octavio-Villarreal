// Contenedores de productos para incluir estructura HTML en su interior
const stockDeMates = document.querySelector(".todosMates")
const stockDeBolsos = document.querySelector(".todosBolsos")
const stockDeTermos = document.querySelector(".todosTermos")
const imgAndinista = document.querySelector(".andinista")

// Botones para incluir un "evento".
const btnBolso = document.querySelector(".botonBolsos")
const btnMate = document.querySelector(".botonMates")
const btnTermo = document.querySelector(".botonTermos")


// Eventos
btnMate.addEventListener = ("click", ()=>{
    showProduct(stockMates)
})


// Funciones
function showProduct (array) {
    imgAndinista.innerHTML="";    
    array.forEach(el =>{
        let div = document.createElement("div");
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${el.img}" class="card-img-top" alt="Guitar">
        <div class="card-body">
        <h5 class="card-title">${el.id}</h5>
        <p class="card-text">${el.tipo}</p>
        <p class="card-text">${el.precio}</p>
        </div>
        </div>
        `
        stockDeMates.appendChild(div);
    });
}


