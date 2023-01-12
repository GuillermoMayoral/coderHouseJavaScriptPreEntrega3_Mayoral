//contact
let mensajeContact = document.getElementById('notificacionContacto');
let nombreContact = document.getElementById('confirmacionContacto');

//valores form
let userContact = document.getElementById('nombreForm');
let lastNameContact = document.getElementById('apellidoForm');
let cellContact = document.getElementById('numeroForm')
let emailContact = document.getElementById('eMailForm');


let btnContact = document.getElementById('contactando');

if (btnContact) {
    btnContact.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('user', userContact.value);
        localStorage.setItem('apellidos', lastNameContact.value);
        localStorage.setItem('celular', cellContact.value);
        localStorage.setItem('email', emailContact.value);
        let saludoUser = localStorage.getItem('user');
        mensajeContact.innerHTML = '<h2>¡GRACIAS ' + saludoUser + '!</h2> <p>Nos pondremos en contacto.</p>';
    });
}

//array productos

const tenisNike = {
    id: "1",
    marca: "nike",
    costo: "$2,499.00",
    img: "../img/productos/producto1.png.png",
}

const tenisAdidas = {
    id: "2",
    marca: "adidas",
    costo: "$2,099.00",
    img: "../img/productos/producto2.png.png",
}

const tenisSketchers = {
    id: "3",
    marca: "sketchers",
    costo: "$2,299.00",
    img: "../img/productos/producto3.png.png",
}

const carritoCompras = []
const carritoComprasDatos = []

//selectores de productos
let btnNike = document.getElementById('btnNike')
let btnAdidas = document.getElementById('btnAdidas')
let btnSketchers = document.getElementById('btnSketchers')



let cuadroCarrito = document.getElementById('carroDeComprasTenis')

let varCarrito = 0;
let varCarritoDatos = 0;

console.log(varCarrito);

if (btnNike) {
    btnNike.addEventListener('click', () => {
        cuadroCarrito.innerHTML += '<div id="' + varCarrito + '" class="cardShop"><img src="' + tenisNike.img + '" alt="tenis nike"><div><p>Modelo: ' + tenisNike.marca + '</p><p>costo: ' + tenisNike.costo + '</p></div></div>'
        carritoCompras[varCarrito] = 2499;
        varCarrito = varCarrito + 1;
        carritoComprasDatos.push("Tenis: nike.  $2499.00")
        sessionStorage.setItem('producto1',JSON.stringify(tenisNike))
    })
}

if (btnAdidas) {
    btnAdidas.addEventListener('click', () => {
        cuadroCarrito.innerHTML += '<div id="tenisAdidas" class="cardShop"><img src="' + tenisAdidas.img + '" alt="tenis adidas"><div><p>Modelo: ' + tenisAdidas.marca + '</p><p>costo: ' + tenisAdidas.costo + '</p></div></div>'
        carritoCompras[varCarrito] = 2499;
        varCarrito = varCarrito + 1;
        carritoComprasDatos.push("Tenis: adidas.  $2099.00")
        sessionStorage.setItem('producto2',JSON.stringify(tenisAdidas))
    })
}


if (btnSketchers) {
    btnSketchers.addEventListener('click', () => {
        cuadroCarrito.innerHTML += '<div id="tenisSketchers" class="cardShop"><img src="' + tenisSketchers.img + '" alt="tenis sketchers"><div><p>Modelo: ' + tenisSketchers.marca + '</p><p>costo: ' + tenisSketchers.costo + '</p></div></div><div></div>'
        carritoCompras[varCarrito] = 2499;
        carritoComprasDatos.push("Tenis: sketchers.  $2299.00")
        sessionStorage.setItem('producto3',JSON.stringify(tenisSketchers))
    })
}


//valores form productos
let userProduct = document.getElementById('nombreForm');
let lastNameProduct = document.getElementById('apellidoForm');
let cellProduct = document.getElementById('numeroForm')
let emailProduct = document.getElementById('eMailForm');
let datosFactura = document.getElementById('datosFactura')
let datosFacturaTotal = document.getElementById('datosFacturaTotal')

let btnPagar = document.getElementById('pagarCarro');

let sumar = function (n1, n2) {
    return n1 + n2
}

//funcion constructora
function darPorcentaje(a, b) {
    let descuento = a * b;
    return descuento;
}



function aplicarPromo(a, b) {
    let totalAplicado = a - b;
    return totalAplicado;
}

// factura;

if (btnPagar) {
    btnPagar.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('user', userProduct.value);
        localStorage.setItem('apellidos', lastNameProduct.value);
        localStorage.setItem('celular', cellProduct.value);
        localStorage.setItem('email', emailProduct.value);
        let user = localStorage.getItem('user');
        let apellidos = localStorage.getItem('apellidos');
        let celular = localStorage.getItem('celular');
        let email = localStorage.getItem('email');

        let total = carritoCompras.reduce(sumar);

        console.log(total);

        let promoPar = carritoCompras.length;
        let porciento;
        let porciento2;

        while (promoPar > 1) {
            porciento = "20%"
            porciento2 = .2
            break;
        }

        let totalMenosDescuento = aplicarPromo(total, darPorcentaje(total, porciento2));

        let carroFact = document.getElementById('productosFact')

        datosFactura.innerHTML = '<h1>Factura</h1>' + '<p>Nombre: ' + user + '</p><p>Apellidos: ' + apellidos + '</p><p>Celular de contacto: ' + celular + '</p><p>E-m@il: ' + email;

        // carroFact.innerHTML = carritoComprasDatos;

        datosFacturaTotal.innerHTML = '<p>Total: $' + total + '.00</p>';

        if (porciento == "20%") {
            datosFacturaTotal.innerHTML += '<p>Descuento: ' + porciento + '</p><p>Total con descuento aplicado: ' + totalMenosDescuento + '</p>'
        }

        console.log(aplicarPromo(promoPar, darPorcentaje(porciento2 * promoPar)));


        for (i = 0; i < carritoComprasDatos.length; i++) {
            let momento = carritoComprasDatos[i];
            carroFact.innerHTML += '<p>' + momento + '</p>';
        }

    });
}