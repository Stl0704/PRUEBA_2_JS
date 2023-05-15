
//variables de producto y sus calculos.
var cajita = $( "#cajita" );
var carrito = $( "#carrito" );
var total = 0;
var totalElement = $("<li><h1>Total: $0</h1></li>");
cajita.after(totalElement);

// variables de login:
var login_nombre= $("#login_nombre");
var login_contrasena= $("#login_contrasena");
var login_boton= $("#login_boton");

$.ajax({

    url:"productos.json",
    dataType:"json",
    success: function(data){
        let lista_objetos = data
        let listado_personajes = ""
        let listado_cartas =""
        lista_objetos.forEach((elemento)=>{


            listado_cartas += `
            
              
            <div class="col-lg-3 col-md-6 col-sm-12 py-2 d-inline-block"> 
            <div class="card" style="width: 225px;">
                <img src="${elemento.foto}" class="card-img-top2" alt="...">
                <div class="card-body">
                  <h2 class="card-title" id ="carta1">${elemento.producto}</h2>
                  <p class="card-text">
                    <h4> Edicion: XY EVOLUTIONS</h4>
                     <h5> Año 2016.</h5>
                     <h5>Precio: $ ${elemento.valor} CLP</h5>
                     
                  </p>
                  <button onClick='agregarCarro("${elemento.producto}",${elemento.valor})' class='btn btn-danger'>Comprar</button>                </div>
            </div>
            </div>
            
            `

            listado_personajes += "<li>"+elemento.producto+" precioso: "+elemento.valor+"</li>" +"<img src='"+elemento.foto +"'> "    
            listado_personajes += `<button onClick='agregarCarro("${elemento.producto}",${elemento.valor})' class='btn btn-danger'>Comprar</button>`

            

        }
        )
        cajita.html(listado_cartas) 


    },
    error: function(){
        alert("fail");
    }
});

var ListaCarro = []
function agregarCarro(producto,valor){

    //alert("se ha agregado el producto:" + producto)
    articulo = {}
    articulo.producto=producto
    articulo.valor=valor
    ListaCarro.push(articulo)
    var Mensaje = "Productos agregados: "+ListaCarro.length
    carrito.html(Mensaje)
    //alert("productos agregados:"+ListaCarro.length)
    total += valor;
    totalElement.html("Total: $" + total);

    // Actualiza el valor total en el elemento HTML correspondiente
    $('#total-value').text("$" + total);
}
// ELEMENTO QUE BORRE, ELEMENTO QUE PAGUE SERIAN LOS RESTANTES.




