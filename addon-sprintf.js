/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2024 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

const sprintf = require("sprintfjs")

module.exports = (env) => {
    /*  add a "sprintf" formatting filter  */
    env.addFilter("sprintf", (value, format, ...args) => {
        return sprintf(format, value, ...args)
    })

    /*  add a "sprintf" global function  */
    env.addGlobal("sprintf", (format, ...args) => {
        return sprintf(format, ...args)
    })
}

