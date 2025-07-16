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

// 7 Función para modificar los datos de un cliente por id
function modificarCliente(id, nuevosDatos) {
  const cliente = clientes.find(c => c.id === id);
  if (cliente) {
    if (nuevosDatos.nombre !== undefined) cliente.nombre = nuevosDatos.nombre;
    if (nuevosDatos.apellido !== undefined) cliente.apellido = nuevosDatos.apellido;
    if (nuevosDatos.email !== undefined) cliente.email = nuevosDatos.email;
    if (nuevosDatos.telefono !== undefined) cliente.telefono = nuevosDatos.telefono;
    if (nuevosDatos.activo !== undefined) cliente.activo = nuevosDatos.activo;
    console.log(`Cliente con id ${id} modificado correctamente.`);
  } else {
    console.log(`Cliente con id ${id} no encontrado.`);
  }
}
mostrarClientes(clientes);
// Ejemplo de uso:
modificarCliente(2, { telefono: "1111111111111", activo: true });
mostrarClientes(clientes);


// 8) Mostrar los clientes inactivos
let inactivos = clientes.filter(c => !c.activo);
console.log("Clientes inactivos:");
inactivos.forEach(c => {
  console.log(`Nombre: ${c.nombre} ${c.apellido}, Email: ${c.email}, Teléfono: ${c.telefono}`);
});

//9 Función para unir dos arreglos de clientes
function unirClientes(clientesExistentes, clientesNuevos) {
  return clientesExistentes.concat(clientesNuevos);
}

// Función para filtrar clientes duplicados por id y mostrar solo los únicos
function filtrarClientesUnicos(clientes) {
  const ids = new Set();
  const unicos = clientes.filter(cliente => {
    if (ids.has(cliente.id)) {
      return false;
    } else {
      ids.add(cliente.id);
      return true;
    }
  });
  return unicos;
}

// Ejemplo de uso:
let nuevosClientes = [
  new Cliente(5, "Ana", "Pérez", "ana@gmail.com", "123123123", true),
  new Cliente(2, "Exequiel", "Muñoz", "otrocorreo@hotmail.com", "999999999", false), // Duplicado
];
console.log("Todos los clientes despues de Unir:");
let todosLosClientes = unirClientes(clientes, nuevosClientes);
mostrarClientes(todosLosClientes);
// Filtrar clientes únicos
let clientesUnicos = filtrarClientesUnicos(todosLosClientes);

console.log("Clientes únicos después de la unión:");
mostrarClientes(clientesUnicos);

// 10. Simular consulta de cliente por id hasta que se ingrese uno válido
function consultarClientePorId() {
  let idValido = false;
  let id;
  id = parseInt(prompt("Ingrese el ID del cliente a consultar:"));
  while (!idValido) {
   
    const cliente = clientes.find(c => c.id === id);
    if (cliente) {
      console.log(`Cliente encontrado: Nombre: ${cliente.nombre} ${cliente.apellido}, Email: ${cliente.email}, Teléfono: ${cliente.telefono}, Activo: ${cliente.activo}`);
      idValido = true;
    } else {
      id = parseInt(prompt("ID No Valido, Por Favor Ingrese otro ID"));
    }
  }
}
consultarClientePorId();

// Mostrar solo los clientes activos
console.log("Clientes activos:");
clientes.forEach(c => {
  if (c.activo) {
    console.log(`Nombre: ${c.nombre} ${c.apellido}, Email: ${c.email}, Teléfono: ${c.telefono}`);
  }
});

// 11 Mostrar mensaje según el estado de cada cliente
clientes.forEach(c => {
  if (c.activo) {
    console.log(`Cliente ACTIVO: ${c.nombre} ${c.apellido}, Email: ${c.email}, Teléfono: ${c.telefono}`);
  } else {
    console.log(`Cliente INACTIVO: ${c.nombre} ${c.apellido}, Email: ${c.email}, Teléfono: ${c.telefono}`);
  }
});