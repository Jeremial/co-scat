## co-scat
slow cat your files or raw string to stdout

### Install

    npm install co-scat

### Help

    scat -h

      Usage: scat [options]

      Options:

        -h, --help       output usage information
        -V, --version    output the version number
        -s, --sps <sps>  strings per second

      Report bugs to <jeremial90@gmail.com>

### CLI

    % scat -s 20 a.txt b.txt

### Node.js
When use `scat` as cli, there's no need to install `co`, but when use `scat` as
dependence, you should install `co` by your self

    var scat = require('co-scat')
        , scatFile = scat.scatFile
        , scatString = scat.scatString
        , co = require('co')
        ;

    // slow cat file
    co(scatFile)('a.txt', 20);

    // or slow cat raw string
    co(scatString)('raw string to output', 10);

    // or use in other functions
    co(function *(){
        yield scatFile('../index.js', 30);
    })();

### License
MIT