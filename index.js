import express from 'express';
import router from './Routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv/config';


console.log(process.env.DB_HOST)

const app = express();

//conectar la base de datos

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error));
//definir puerto

const port = process.env.PORT || 4000;
//Habilitar pug

app.set('view engine', 'pug');

//obtener el año actual

app.use((req, res, next) => {

    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.agencia = "Agencia de viajes";
   // console.log(res.locals); //para compartir valores de este archivo a una vista
//next funciona para que vaya al siguiente middleware

return next(); //con return forzamos a que avance al siguiente middleware

});
//Agregar body parser para leer los datos del formulario

app.use(express.urlencoded({extended: true}));

//definir la carpeta publica

app.use (express.static('public'));

//Agregar router

app.use('/', router);


app.listen(port, () => {

console.log(`El servidor esta funcionando en el puerto ${port}`)

})