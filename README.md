
Start with this clean repo (either a fresh clone, or `git clean -fxd`)

    $ npm install
    
    $ jspm install
    
Fails with:

    $ node ./systemjs-build.js
    Build error:
    [Error: ENOENT: no such file or directory, open 'C:\Users\rob\projects\cycle-http-driver-require-example\emitter.js']

Ok.. so we manually install that dependency:

    $ jspm install npm:emitter
 
Try the build again:
 
    $ node ./systemjs-build.js
    Build error:
    [Error: ENOENT: no such file or directory, open 'C:\Users\rob\projects\cycle-http-driver-require-example\reduce.js']
    
Install reduce & try again:

    $ jspm install npm:reduce
    $ node ./systemjs-build.js
    Build error:
    [Error: ENOENT: no such file or directory, open 'C:\Users\rob\projects\cycle-http-driver-require-example\jspm_packages\npm\@cycle\http@8.0.0\dist\http-driver.js']
    
wut

Turns out changing `jspm_packages/npm/@cycle/http@8.0.0/dist/cycle-http-driver.js:779` fixes this. Replace:

    var _require = require('./http-driver');
    
with: 

    var _require = require('../lib/http-driver');

and try again:

    $ node ./systemjs-build.js
    Build complete

huzzah

----

Where do I go to fix this.