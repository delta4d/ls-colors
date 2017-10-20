'use strict';

const { execSync } = require('child_process');

const ls_color = () => {
    let _terms  = [];
    let _colors = {};

    execSync('dircolors --print-database').toString().split('\n').forEach((e) => {
        e = e.replace(/#.*$/, '').trim();
        if (e) {
            const [k, v] = e.split(/\s+/);
            if (k === 'TERM') {
                _terms.push(v);
            } else {
                _colors[k] = v;
            }
        }
    });

    return {
        'TERMS':  _terms,
        'COLORS': _colors,
    };
};

module.exports = exports = ls_color;

console.log(ls_color());
