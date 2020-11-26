const validator = require(`express-validator`);

const models = require(`../models`);

const { body } = validator;

module.exports = [

    body(`name`)
    .trim()
    .notEmpty()
    .withMessage(`Name can't be empty`)
    .isLength({ min: 5, max: 50 })
    .withMessage(`Name character length is 5 to 50`),

    body(`mobile`)
    .trim()
    .notEmpty()
    .withMessage(`Mobile can't be empty`)
    .isLength({ min: 11, max: 14 })
    .withMessage(`Please provide valid mobile number`),

    body(`email`)
    .notEmpty()
    .withMessage(`Email can't be empty`)
    .isEmail().withMessage(`Please provide a valid email`)
    .custom(async email => {

        let isUserExist = await models.user.findOne({ email });

        if (isUserExist) {

            return Promise.reject(`Email already in used`);

        }

        return true;
    }),

    body(`password`)
    .notEmpty()
    .withMessage(`Password can't be empty`)
    .isLength({ min: 5, max: 30 })
    .withMessage(`Password character length 6 to 30`),

    body(`confirmPassword`)
    .notEmpty()
    .withMessage(`Verify Password can't be empty`)
    .custom((confirmPassword, { req }) => {

        if (confirmPassword != req.body.password) {
            throw new Error(`Password did not match`);
        }
        return true;
    }),

    // body(`agree`).notEmpty().withMessage(`You must agree before submitting`)

]
