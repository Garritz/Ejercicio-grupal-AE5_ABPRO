<<<<<<< HEAD
let clientes = [];

clientes.push(
  { id: 1, nombre: "Ana", apellido: "Gómez", email: "ana@email.com", telefono: "12345678", activo: true },
  { id: 2, nombre: "Luis", apellido: "Ramírez", email: "luis@email.com", telefono: "87654321", activo: false },
  { id: 3, nombre: "Marta", apellido: "Pérez", email: "marta@email.com", telefono: "11223344", activo: true }
);



function mostrarClientes() {
  clientes.forEach(cliente => {
    console.log(`ID: ${cliente.id}, Nombre: ${cliente.nombre}, Apellido: ${cliente.apellido}, Email: ${cliente.email}, Telefono: ${cliente.telefono}, Activo: ${cliente.activo}`);
  });
}


function agregarCliente(id, nombre, apellido, email, telefono, activo) {
  const nuevoCliente = { id, nombre, apellido, email, telefono, activo };
  clientes.push(nuevoCliente);
  console.log(`Cliente agregado: ${nombre} ${apellido}`);
}
function eliminarCliente(id) {
  const index = clientes.findIndex(cliente => cliente.id === id);
  if (index !== -1) {
    const eliminado = clientes.splice(index, 1);
    console.log(`Cliente eliminado: ${eliminado[0].nombre} ${eliminado[0].apellido}`);
  } else {
    console.log(`Cliente con ID ${id} no encontrado.`);
  }
}

function actualizarCliente(id, nombre, apellido, email, telefono, activo) {
  const index = clientes.findIndex(cliente => cliente.id === id);
  if (index !== -1) {
    clientes[index] = { id, nombre, apellido, email, telefono, activo };
    console.log(`Cliente actualizado: ${nombre} ${apellido}`);
  } else {
    console.log(`Cliente con ID ${id} no encontrado.`);
  }
}
mostrarClientes();
actualizarCliente(1, "Ana", "Gómez", "ana.nuevo@email.com", "56566666", false);

mostrarClientes();
agregarCliente(4, "Carlos", "López", "carlos@email.com", "99887766", true);
mostrarClientes();

eliminarCliente(2);
mostrarClientes();  
=======
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
let clientes = [
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

// 4) Contar clientes con activo igual a true usando forEach
function contarClientesActivos(clientes) {
  let contador = 0;
  clientes.forEach(cliente => {
    if (cliente.activo === true) {
      contador++;
    }
  });
  return contador;
}

// 5) Agregar un nuevo cliente al arreglo usando push
function agregarCliente(id, nombre, apellido, email, telefono, activo) {
  const nuevoCliente = new Cliente(id, nombre, apellido, email, telefono, activo);
  clientes.push(nuevoCliente);
  return clientes;
}

// 6) Eliminar un cliente por su id usando splice
function eliminarClientePorId(id) {
  const index = clientes.findIndex(cliente => cliente.id === id);
  if (index !== -1) {
    clientes.splice(index, 1);
    return true; // Cliente eliminado exitosamente
  }
  return false; // Cliente no encontrado
}
>>>>>>> e4927c197eeea0423054eee6829011d05b16d15e
