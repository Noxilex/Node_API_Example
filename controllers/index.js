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
        u => {
            u.password = '';

            jwtUtils.generateToken(u, (err, token) => {
                res.cookie('token', token, {
                    path: '/',
                    maxAge: 1000 * 60,
                    httpOnly: true, 
                    secure: false
                });
                jsonUtils.send(res, 200, u);
            });
        },
        error => {
            logger.error(err);
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