const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const morgan = require(`morgan`);
const session = require(`express-session`);
const mongoDbSessionStore = require('connect-mongodb-session')(session);
require(`dotenv/config`);
const app = express();
const routes = require(`./routes`);
const PORT = process.env.PORT || 3333;

/* MengoDB Session store*/
// var store = new mongoDbSessionStore({
//     uri: process.env.DB_CONNECTION,
//     collection: 'sessions',
//     expires: 1000 * 60 * 60 * 7,
// });




/* set view engine */
app.set(`views`, `views`);
app.set(`view engine`, `ejs`);



/* middlewares */
app.use([
    // morgan(`dev`),
    express.json(),
    express.urlencoded({ extended: false }),
    express.static(path.join(__dirname, "public")),
    // session({ secret: `octapia secret token`, store, resave: false, saveUninitialized: false }),
    routes

]);


// app.get(`/`, (req, res) => {

//     res.send('home page <br>' + process.env.DB_CONNECTION + '<br>' + store);
// });


/* database connection */
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to BD`);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});
