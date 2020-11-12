const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const morgan = require(`morgan`);
const session = require(`express-session`);
const mongoDbSessionStore = require('connect-mongodb-session')(session);
require(`dotenv/config`);
const app = express();
const routes = require(`./routes`);
const port = process.env.PORT || 1234;

/* MengoDB Session store*/
var store = new mongoDbSessionStore({
    uri: `mongodb+srv://root:root@cluster0.btmjp.mongodb.net/blog`,
    collection: 'sessions',
    expires: 1000 * 60 * 60 * 7,
});

/* set view engine */
app.set(`views`, `views`);
app.set(`view engine`, `ejs`);

/* middlewares */
app.use([
    morgan(`dev`),
    express.json(),
    express.static(`public`),
    express.urlencoded({ extended: false }),
    session({ secret: `octapia secret token`, store, resave: false, saveUninitialized: false }),
    routes
]);


/* database connection */
mongoose.connect(`mongodb+srv://root:root@cluster0.btmjp.mongodb.net/blog`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to BD`);
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })
});
