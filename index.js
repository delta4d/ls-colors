'use strict';

const ls_colors = (() => {
    const c = process.env.LS_COLORS;
    if (!c) return undefined;
    return c.split(':').reduce((acc, cur) => {
        const [k, v] = cur.split('=');
        if (k) acc[k] = v;
        return acc;
    }, {});
})();

module.exports = exports = ls_colors;
