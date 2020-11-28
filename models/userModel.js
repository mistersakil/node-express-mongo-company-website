const { model, Schema } = require(`mongoose`);
// const Profile = require(`./Profile`);
// name, email, password, profile ref
const newSchema = new Schema({

    name: { type: String, maxlength: 50, minlength: 5, required: true, trim: true },
    email: { type: String, maxlength: 50, minlength: 5, required: true, trim: true },
    mobile: { type: String, maxlength: 20, minlength: 10, required: true, trim: true },
    password: { type: String, maxlength: 200, minlength: 8, required: true },
    userType: { type: Number, default: 1 },
    verifiedAt: { type: Date, default: null },
    // profile: { type: Schema.Types.ObjectId, ref: Profile },

}, { timestamps: true });


module.exports = new model(`users`, newSchema);
