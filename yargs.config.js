const name = {
    demand: true,
    alias: 'n',
    desc: 'Name'
}

const description = {
    demand: true,
    alias: 'd',
    desc: 'Description'
}

const date = {
    alias: 'f',
    demand: true,
    desc: 'Date'
}

const completed = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado pendiente la tarea'
}

const argv = require('yargs')
    .command('create', 'Crea una tarea por hacer', { name, description })
    .command('update', 'Actualiza el estado completado de una tarea por hacer', {
        name,
        completed
    })
    .command('delete', 'Elimina una tarea por hacer', { name })
    .help()
    .argv;

module.exports = {
    argv
}