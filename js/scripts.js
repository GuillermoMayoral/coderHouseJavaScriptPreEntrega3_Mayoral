//contact
let mensajeContact = document.getElementById('notificacionContacto');
let nombreContact = document.getElementById('confirmacionContacto');

//valores form
let userContact = document.getElementById('nombreForm');
let lastNameContact = document.getElementById('apellidoForm');
let cellContact = document.getElementById('numeroForm')
let emailContact = document.getElementById('eMailForm');


let btnContact = document.getElementById('contactando');

if(btnContact){
    btnContact.addEventListener('click', (e)=>{
        e.preventDefault();
        localStorage.setItem('user', userContact.value);
        localStorage.setItem('apellidos', lastNameContact.value);
        localStorage.setItem('celular', cellContact.value);
        localStorage.setItem('email', emailContact.value);
        let saludoUser = localStorage.getItem('user');
        mensajeContact.innerHTML =  '<h2>¡GRACIAS '+saludoUser+'!</h2> <p>Nos pondremos en contacto.</p>';
    });
}

//array productos

const tenisNike = {
    id:"1",
    marca:"nike",
    costo:"$2,499.00",
    img:"../img/productos/producto1.png.png",
}

const tenisAdidas = {
    id:"2",
    marca:"adidas",
    costo:"$2,499.00",
    img:"../img/productos/producto2.png.png",
}

const tenisSketchers = {
    id:"3",
    marca:"sketchers",
    costo:"$2,499.00",
    img:"../img/productos/producto3.png.png",
}

const carritoCompras = []
console.log(carritoCompras);

//selectores de productos
let btnNike = document.getElementById('btnNike')
let btnAdidas = document.getElementById('btnAdidas')
let btnSketchers = document.getElementById('btnSketchers')



let cuadroCarrito = document.getElementById('carroDeComprasTenis')

let varCarrito = 0;

console.log(varCarrito);

if(btnNike){
    btnNike.addEventListener('click', ()=>{
        cuadroCarrito.innerHTML += '<div id="'+varCarrito+'" class="cardShop"><img src="../img/productos/producto1.png.png" alt="tenis nike"><div><p>Modelo: Nike</p><p>costo: $2,499.00</p></div></div>'
        carritoCompras[varCarrito]={
            id:"1",
            marca:"nike",
            costo:"$2,499.00",
            img:"../img/productos/producto1.png.png",
        };
        varCarrito = varCarrito+1;
    })
}

//borrar productos





//descuento
let descuentoPar = document.getElementById('descuento')

let promoPar = carritoCompras.length;
console.log("hola "+promoPar);

while(promoPar > 1){
    descuentoPar.innerHTML += '<p>20%</p>';
    brake;
}