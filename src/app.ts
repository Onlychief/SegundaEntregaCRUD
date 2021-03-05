import {Application, Router} from 'https://deno.land/x/oak/mod.ts'
import {UsuarioController} from './controllers/usuario.ts'

const app = new Application();

const router= new Router();

const usuarioController =new UsuarioController();

router.get('/', (context) => {
    context.response.body ="Hola Mundo desde Oak";
});
router.get('/usuarios', usuarioController.listar)
    
app.use(router.routes());

await app.listen ({
    port:8082,
})

