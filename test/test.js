var scat = require('..')
    , co = require('co')
    ;

// co(scat)('../index.js', 10);

co(function *(){
    yield scat('../index.js', 10)
})()