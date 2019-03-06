/**
 * Default controllers
 */
exports.home = (req, res) => {
    res.json({
        message: 'Home page'
    })
}

exports.login = (req, res) => {
    res.json({
        message: 'Login page'
    })
}

exports.register = (req, res) => {
    res.sendFile()
}