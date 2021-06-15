const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
  .option('b',{
    alias:'base',
    type:'number',
    demandOption:true
  })
  .option('l',{
    alias:'list',
    type:'boolean',
    demandOption:true,
    default:false
  })
  .check((argv,options) => {
      if(isNaN(argv.b)){
        throw 'La base tiene que ser un numero'
      }
      return true;

  })
  .argv;


console.clear();

const base = 5;

let resultado = crearArchivo(argv.b,argv.l );

resultado.then(res => {

}).catch( err => {
  console.log(err);
});
