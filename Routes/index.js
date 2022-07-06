import express from 'express';
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalle} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';
const router = express.Router();

/*router.get('/paginaInicio', (req, res) => { // req funciona para lo que enviamos y res para lo que exprees responde
    
    res.render('inicio', {

        pagina: 'Inicio'

    });
    
});*/
router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalle);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

/*router.get('/nosotros', (req, res) => { // req funciona para lo que enviamos y res para lo que exprees responde
    
    //const viajes = 'Viaje a Alemania'; //e incluso podemos cambiar el texto
    res.render('nosotros', {

        pagina: 'Nosotros'

    });
    
});*/

/*router.get('/viajes', (req, res) => { // req funciona para lo que enviamos y res para lo que exprees responde
    
    
    res.render('viajes', {

        pagina: 'Viajes'

    });
    
});
router.get('/testimoniales', (req, res) => { // req funciona para lo que enviamos y res para lo que exprees responde
    res.render('testimoniales', {

        pagina: 'Testimoniales'
    });
}); */

        export default router;
