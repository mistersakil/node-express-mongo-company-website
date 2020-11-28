const { user: model } = require(`../models`);
const bcrypt = require(`bcrypt`);
const mongoose = require(`mongoose`);
const { name, phone, internet, date } = require(`faker/locale/en_IND`);

mongoose.connect(`mongodb+srv://root:root@cluster0.btmjp.mongodb.net/blog`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(`Connected to DB`);
    create(30).then(lastData => console.log('Finished', lastData));

});

let create = async (howMnay = 10) => {
    let data = {};
    let password = null;
    let newModel = null;
    let createdModel = {};
    console.log('Please wait, we are still working...')
    for (let i = 1; i <= howMnay; i++) {
        data = {
            name: name.findName(),
            email: internet.email(),
            mobile: phone.phoneNumber(),
            verifiedAt: date.past(),
            userType: Math.ceil(Math.random() * 10)

        }

        password = await bcrypt.hash('123456', 10);
        data = { ...data, password };
        newModel = new model(data);
        createdModel = await newModel.save();


    }
    return createdModel;
}
