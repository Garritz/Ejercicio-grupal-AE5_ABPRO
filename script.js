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