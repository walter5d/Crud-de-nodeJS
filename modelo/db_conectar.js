import mysql from 'mysql'
var conectar = mysql.createConnection({
host : 'localhost',
user : 'usr_empresa',
password : 'Empresa@123*9',
database : 'bd_empresa'
});
conectar.connect( function(err) {
   if(err){
    console.error('Error en la conexion ' + err.stack)
    return;
   }
   console.log('Conexion exitosa ID: ' + conectar.threadId);

});
export{conectar}



