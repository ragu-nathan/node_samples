const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.route');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
mongoose.connect(`mongodb://localhost:27017/jwtauth`, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/checking', (req, res)=>{
    res.json({
        "Tutorial": "Welcome to the Node Express JWT tutorial"
    });
});
app.use('/user', user);
app.listen(PORT, ()=> {
    console.log(`Server is running on Port`, PORT);
});
