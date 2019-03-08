module.exports = (req, res, next) => {
    jwtUtils.valideToken(req.cookies.token, (err, payload) => {
        if(err) {
            res.status(401).json({message: 'Unauthorized'});
        } else {
            if(!res.payload){
                req.payload = payload;
            }
            next();
        }
    });
};
