function readMovements(req, res) {
    // pedir con el usuario la base de datos y devolverla
}
function createMovement(req, res) {
    // recibir un movimiento y agregarlo a la base de datos, pero tambien devolver los datos del objeto para agregarlo a react automaticamente sin actualizar
}
function updateMovement(req, res) {
    // recibe datos del formulario de actualizacion y los actualiza por id en la base de datos
}
function deleteMovement(req, res) {
    // busca el dato por id y lo quita de la base de datos
}

export { readMovements, createMovement, updateMovement, deleteMovement };