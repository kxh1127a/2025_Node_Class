const express = require('express');
const app = express();

app.get('', (req, res)=>{
    res.send('hello world!!!!')
});

app.listen('3333', ()=>{
    console.log('port 3333 daemon open!')
})