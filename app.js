const express = require('express');
const app = express();
const jsonParser = express.json();
const morgan = require('morgan');

// import routers
const nameSearchRouter = require('./routes/nameSearch');

// parse request body as JSON
app.use(morgan('dev'))
app.use(jsonParser);
app.use('/nameSearch', nameSearchRouter);


app.listen(4000, () => {
    console.log('listening on port 4000');
})

