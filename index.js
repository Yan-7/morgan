const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))



app.get('/', (req,res) => {
    res.send('Home page!')
})
app.get('/dog', (req,res) => {
    res.send('Dog')
})
app.get('/cat', (req,res) => {
    res.send('Cat')
})

app.listen(3000, () =>{
    console.log('app running on port 3000');
    
})