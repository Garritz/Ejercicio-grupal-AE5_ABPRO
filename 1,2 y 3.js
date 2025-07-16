// 1) Definir la estructura de un objeto cliente
class Cliente {
  constructor(id, nombre, apellido, email, telefono, activo) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
    this.activo = activo;
  }
}

// 2) Crear un arreglo de objetos cliente
let clientes2 = [
  new Cliente(1, "Carlos", "Salvador", "carlos@gmail.com", "123456789", true),
  new Cliente(2, "Exequiel", "Muñoz", "muñoz@hotmail.com", "987654321", false),
  new Cliente(3, "Jorge", "Garrido", "garrido@yahoo.com", "555123456", true),
  new Cliente(4, "Willy", "Gonzalez", "willy@hotmail.com", "987654321", false),
];

// 3) Mostrar la información de cada cliente
function mostrarClientes(clientes) {
  for (let i = 0; i < clientes.length; i++) {
    const c = clientes[i];
    console.log(`Nombre: ${c.nombre} ${c.apellido}, Email: ${c.email}, Teléfono: ${c.telefono}`);
  }
}
