/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2023 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

const glob = require("glob")

module.exports = (env) => {
    env.addGlobal("glob", (pattern, options = {}) => {
        return glob.globSync(pattern, options)
    })
}

