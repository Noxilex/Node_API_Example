/**
 * Default controllers
 */

const user = require('../models/user')

exports.home = (req, res) => {
    res.json({
        message: 'Home page'
    })
}

exports.login = (req, res) => {
    user.authenticate(req.body).then(
        success => {
            jsonUtils.send(res, 200, {message: 'ok'})
        },
        error => {
            jsonUtils.send(res, 401, {message: 'Authentication failed'})
        }
    )
}

exports.register = (req, res) => {
    user.register(req.body)
        .then(
        success => {
            delete user.password;
            jsonUtils.send()
            jsonUtils.noContent(res);
        },
        error => {
            logger.error(err);
            jsonUtils.internalErr(res);
        }
    )
}