var sleep = require('co-sleep')
    , fs = require('co-fs')
    , is = require('jistype')
    ;

function *scatFile(files, sps){
    if(is.isString(files)){
        files = [files];
    }
    var file, exist, content;
    for(var i = 0; i < files.length; i++){
        file = files[i];
        exist = yield fs.exists(file);
        if(!exist){
            throw new Error('file not exist: ' + file);
            process.exit(1);
        }
        content = yield fs.readFile(file, 'utf8');
        yield scatString(content, sps);
    }
}

function *scatString(str, sps){
    var per = 1000 / sps;
    for(var i = 0; i < str.length; i++){
        process.stdout.write(str[i]);
        yield sleep(per);
    }
}

exports.scatFile = scatFile;
exports.scatString = scatString;
