var express = require('express')
var app = express();

const pokeRoutes = require('./routes/poke-routes');
app.use('/api', pokeRoutes);



app.use(express.json());
app.listen(3000, () => console.log('Server started on port 3000'));

