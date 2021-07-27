module.exports = function(req, res, next){
    // console.log('Request URL :', req.originalUrl);
    // console.log('Request Type :', req.method);
    console.log(
        'Type : %s URL : %s  params : %s',
        req.method,
        req.originalUrl,
        JSON.stringify(req.params)
    );

    next();
};