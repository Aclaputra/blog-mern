/**
 * membuat controller auth dan membuat api baru yaitu register.
 * @param {*name, email, password} request 
 * @param {*result dari request} response 
 * @param {*} next 
 */
exports.register = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    // const password = req.body.password;

    const result = {
        message: 'Register Success',
        data: {
            uid: 1,
            name: name,
            email: email,
        }
    }
    res.status(201).json(result)
}