const express = require('express');
const morgan = require('morgan');
const { database }  = require('./keys');

const app = express();

app.set('port' , process.env.port || 4000 );

//app.use(morgan('dev'));

app.use(require('./routes/index'))

app.listen(app.get('port') , () => {
    console.log('El servidor esta en el puerto', app.get('port'));
})