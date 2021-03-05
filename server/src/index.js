import express from 'express';
import router from './routes/indexRoutes.js'
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use(router);

app.listen(8000);
console.log('Server on port 8000');