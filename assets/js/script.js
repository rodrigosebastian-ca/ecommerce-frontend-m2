
// Contador de carrito //

let contador = 0;
  const agregarProducto = () => {
      contador++;
  const visorContador = document.getElementById("suma-del-carrito");
  visorContador.innerText = contador;
  console.log("Productos dentro del carrito:", contador);
};


