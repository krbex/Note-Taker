const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const api = require('./routes/apiroutes/routes');
const html = require('./routes/htmlroutes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api', api);
app.use('/', html);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});