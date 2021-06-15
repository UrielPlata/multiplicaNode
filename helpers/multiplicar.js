const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, listar = false ) => {


  let salida = '';

  for (let i = 0; i <= 10; i++) {
    salida += `${base} x ${i} = ${base*i}\n`;
  }

  if (listar) {
    console.log('====================='.green);
    console.log(' Tabla del'.green, base);
    console.log('====================='.green);
    console.log(salida);
  }


  const cuerpoPromesa = new Promise((resolve,reject) => {

    try {
      let creacion = fs.writeFileSync(`./salida/tabla-${ base}.txt`,salida);
      resolve(console.log(`tabla-${ base }.txt creado`));
    }catch(err){
      reject(console.log(`No se pudo crear. ${err}`));
    }

  })

  return cuerpoPromesa;
}

module.exports = {
  crearArchivo
}
