const fs = require('fs');

const objeto = fs.readFileSync('./tareas.json', 'utf-8');

const datosConvertidos = JSON.parse(objeto);

console.log(datosConvertidos);

let accion = process.argv[2]

switch(accion) {
    // primer caso: accion = 'listar'
    case 'listar':
        console.log('Listado de tareas');
        let tareas = archivoTareas.leerJSON();
        for (let i = 0;  i < tareas.length; i++) {
            console.log(i + '. ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        }
        break;
    // segundo caso: sin parámetros
    case undefined:
        console.log('Atención - Tenés que pasarme una acción');
        break;

    // tercer caso: cualquier otra cosa menos [vacío] y "listar"
    default:
        console.log('No entiendo qué querés hacer');
        break;
}