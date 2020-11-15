const express = require("express")
const app = express()

// parse incoming traditional HTML form submits
app.use(express.urlencoded({ extended: false }))

// parse incoming JSON payloads
app.use(express.json())


app.get("/", (req, res) => {
    res.send('home page');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('server running on port 3000');
})
