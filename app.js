const express = require('express');
const app = express();
const jsonParser = express.json();
const morgan = require('morgan');
const cors = require('cors');



// import routers
const nameSearchRouter = require('./routes/nameSearch');
const redlistRouter = require('./routes/redlist');

// CORS origin settings
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

// parse request body as JSON
app.use(morgan('dev'))
app.use(jsonParser);
app.use('/nameSearch', nameSearchRouter);
app.use('/redlist', redlistRouter);


app.listen(4000, () => {
    console.log('listening on port 4000');
})

