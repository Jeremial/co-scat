var scatFile = require('..').scatFile
    , co = require('co')
    ;

// co(scat)('../index.js', 10);

co(function *(){
    yield scatFile('../index.js', 10)
})();
