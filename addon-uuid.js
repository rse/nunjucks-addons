/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2024 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

const UUID = require("pure-uuid")

module.exports = (env) => {
    env.addGlobal("uuid", (...args) => {
        return (new UUID(...args)).format()
    })
}

