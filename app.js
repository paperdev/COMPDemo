const http      = require('http');
const cluster   = require('cluster');
const os        = require('os');

const main      = require('./main');
const CONFIG    = require('./config/server');
const PORT      = CONFIG.SERVER.PORT.HTTP;
const CPUS      = os.cpus().length;

const main_server = http.createServer(main);

if (CONFIG.SERVER.CLUSTER && cluster.isMaster) {
    for (let i = 0; i < CPUS; i++) {
        cluster.fork();
    }
}
else {
    main_server.listen(PORT);
}

////////////////////////////////////////////////////////////////////////////////////////////////
// Http Event Listener
main_server.on('listening', function(err) {
    if (err) {
        return console.error('Server start failed.\n' + err);
    }
    console.log('Server running on port : ' + main_server.address().port);
});

main_server.on('errorHandler', function(err) {
    console.error('Server start failed.\n' + err);
});

main_server.on('close', function(err) {
    if (err) {
        return console.error('Server close failed.\n' + err);
    }
    console.log('Server closed.');
});
////////////////////////////////////////////////////////////////////////////////////////////////
// Cluster Event Listener
cluster.on('online', function(worker) {
    console.log('Worker %d is online.', worker.process.pid);
});

cluster.on('exit', function(worker, code, signal) {
    console.log('Worker %d ended.', worker.process.pid);
    cluster.fork();
});
////////////////////////////////////////////////////////////////////////////////////////////////