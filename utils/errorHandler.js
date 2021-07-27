module.exports = function(err, req, res, next){

    var statusCode = err.status || 500;

    if (statusCode === 500) {
        console.error(err.stack || err);
    }

    res.status(statusCode);

    res.render('errorHandler', {
        page : 'Error',
        menu : 'Error',
        message : err.message,
        status : err.status,
        stack : err.stack
    });

};