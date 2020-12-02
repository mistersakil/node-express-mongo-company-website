const express = require(`express`);
const mongoose = require(`mongoose`);
const path = require(`path`);
const morgan = require(`morgan`);
const session = require(`express-session`);
const mongoDbSessionStore = require('connect-mongodb-session')(session);
require(`dotenv/config`);
const routes = require(`./routes`);
const databaseConnection = require(`./appDB`);
const { dataForAllViews } = require(`./middlewares`);

const app = express();
const port = process.env.PORT || 3333;


/* set view engine */
app.set(`views`, `views`);
app.set(`view engine`, `ejs`);



/* middlewares */
app.use([
    // morgan(`dev`),
    dataForAllViews,
    express.json(),
    express.urlencoded({ extended: false }),
    express.static(path.join(__dirname, "public")),
    routes

]);

/* database connection */
databaseConnection({ mongoose, dbConnectionString: process.env.DB_CONNECTION_STRING, port, app });


/* 3 layer architecture
    controllers = controller layer : process the http request
    services = service layer : process the ebject and esend to data layer
    mongoose wrapper = data layer : process the data and get/set it to database

*/
