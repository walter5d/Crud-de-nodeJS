import express from "express"
import { conectar } from "./modelo/db_conectar.js";
const app_e = express();
app_e.use(express.static('./vista'))
app_e.use(express.static('./controlador'))
app_e.use(express.static('./modelo'))
app_e.set('views', './vista')
app_e.set('view engine', 'ejs')


app_e.listen('5005',function(){
    console.log('Aplicacion Inicial en: http://localhost:5005/ ')

})
app_e.get('/', function(req,res){
    res.send("Hola mundo Como estas walter Xd")
     
})

