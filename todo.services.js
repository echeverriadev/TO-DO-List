const fs = require('fs');

let listadoPorHacer = [];
let fecha = new Date();

const saveDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No se pudo guardar');
  });
};

const loadDB = () => {
  try {
    listadoPorHacer = require('./db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }
};

const create = (name, description, date) => {
  loadDB();
  let porHacer = {
    name,
    description,
    date:
      fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getUTCFullYear(),
    completed: false,
  };
  listadoPorHacer.push(porHacer);
  saveDB();
  return porHacer;
};

const getList = () => {
  loadDB();
  return listadoPorHacer;
};

const update = (name, completed = true) => {
  loadDB();
  let index = listadoPorHacer.findIndex((tarea) => {
    return tarea.name === name;
  });
  if (index >= 0) {
    listadoPorHacer[index].completed = completed;
    saveDB();
    console.log('Tarea completada');
    return true;
  } else {
    console.log('No existe una tarea con ese nombre');
    return false;
  }
};

const deleteTarea = (name) => {
  loadDB();
  let newList = listadoPorHacer.filter((tarea) => {
    return tarea.name !== name;
  });
  if (listadoPorHacer.length === newList) {
    console.log('No existe una tarea con ese nombre');
    return false;
  } else {
    listadoPorHacer = newList;
    saveDB();
    console.log('Tarea eliminada');
    return true;
  }
};

module.exports = {
  create,
  getList,
  update,
  deleteTarea,
};
