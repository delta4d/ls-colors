ls-colors
---------

Fetch `LS_COLORS` information. With the help of `dircolors --print-database`

Installation
------------

    npm install --global ls-colors

or specify in `package.json`, and run

    npm install

Usage
-----

    const getInfo = require('ls-colors');
    const info = getInfo();
    console.log(info);
    // {
    //     TERMS: [...],
    //     COLORS: {...},
    // }

LICENSE
-------

MIT
