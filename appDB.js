module.exports = ({ mongoose, dbConnectionString, port, app }) => {
    mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log(`Connected to DB`);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        })
    });

}
