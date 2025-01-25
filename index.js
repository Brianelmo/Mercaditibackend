import express from 'express'; 
import ProductControll  from './Controllers/ProductController.js';
import questions from './Controllers/QuestionController.js'
import botControl from './Controllers/BotController.js'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());  
app.use(express.static('public'));



app.get('/products', ProductControll )

app.get('/bot/options/:id', botControl)

app.get('/bot/question', questions);

app.listen(3306, () => {
    console.log('ao vivo desde puerto 8080')
})

