const argv = require('./yargs.config.js').argv;
const colors = require('colors');
const porHacer = require('./todo.services.js');

let comand = argv._[0];

switch (comand) {
  case 'create':
    console.log('Crear tarea por hacer'.red);
    let tarea = porHacer.create(argv.name, argv.description, argv.date);
    console.log(tarea);
    break;
  case 'list':
    console.log('Listado de tareas'.red);
    let list = porHacer.getList();
    console.table(list);
    break;
  case 'update':
    console.log('Actualizar tarea por hacer'.red);
    let updated = porHacer.update(argv.name, argv.completed);
    console.log(updated);
    break;
  case 'delete':
    console.log('Eliminar tarea por hacer'.red);
    let deleted = porHacer.deleteTarea(argv.name);
    console.log(deleted);
    break;
  default:
    console.log('NO SE RECONOCE EL COMANDO'.red);
    break;
}
