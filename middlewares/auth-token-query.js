// app.use((req, res, next) => {
//     if(!req.query.token || req.query.token !== '1234') {
//         res.status(500).json({message: 'Get Away'})
//         return;
//     }
//     next();
// })

module.exports = (token) => {
    return (req, res, next) => {
        if(!req.query.token || req.query.token !== '1234' ) {
            res.status(500).json({message: 'Get Away'});
            return;
        }
        next();
    };

}