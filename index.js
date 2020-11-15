const express = require(`express`)
const mongoose = require(`mongoose`)
require(`dotenv/config`);

const app = express()
const PORT = process.env.PORT || 2222;


app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.get("/", (req, res) => {
    res.send('home page');
})


/* database connection */
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to BD`);
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
});
