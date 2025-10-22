/*Cargar la información del televisor dentro de un array llamado productos*/
const productos = [
    {
      nombre: 'Llavero de gato triste',
      descripcion: 'Llavero del sticker de un gato naranja triste.',
      precio: 32.00,
      imagen: 'cat1.jpg'
    },
    {
      nombre: 'Llavero de gato juzgón',
      descripcion: 'Llavero del sticker de un gato naranja juzgando con la mirada.',
      precio: 29.99,
      imagen: 'cat2.webp'
    },
    {
      nombre: 'Llavero de gato sorprendido',
      descripcion: 'Llavero del sticker de un gato bicolor sorprendido.',
      precio: 35.00,
      imagen: 'cat3.webp'
    },
    {
      nombre: 'Llavero de gato Chad',
      descripcion: 'Llavero del sticker de un gato naranja con el filtro de Chad.',
      precio: 49.99,
      imagen: 'cat4.webp'
    }
  ];
 
/*crear las tarjetas mediante la función crearTarjetaProducto*/
const catalogo = document.getElementById('catalogo');


function crearTarjetaProducto(producto) {
  const card = document.createElement('div');
  card.className = 'producto-card';


  const imagen = document.createElement('img');
  imagen.src = producto.imagen;
  imagen.alt = producto.nombre;


  const titulo = document.createElement('h2');
  titulo.textContent = producto.nombre;


  const descripcion = document.createElement('p');
  descripcion.textContent = producto.descripcion;


  const precio = document.createElement('span');
  precio.className = 'precio';
  precio.textContent = '$' + producto.precio.toFixed(2);


  const boton = document.createElement('button');
  boton.className = 'btn-comprar';
  boton.textContent = 'Comprar';


  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);
  card.appendChild(precio);
  card.appendChild(boton);


  return card;
}
/*3. Mediante una función llamada renderizarCatalogo se encargará de tomar todos los datos de tus
productos y dibujarlos (o renderizarlos) como tarjetas HTML dentro del contenedor principal de tu
página.Utilizando un bucle para procesar cada producto individualmente y agregarlo al catálogo.*/


function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
 
/*4. por ultimo se llamara a la función renderizarCatalogo para cargar la pagina*/
window.onload = renderizarCatalogo;
