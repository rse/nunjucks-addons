/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2023 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

const addonDate     = require("./addon-date.js")
const addonDefault  = require("./addon-default.js")
const addonEval     = require("./addon-eval.js")
const addonExec     = require("./addon-exec.js")
const addonGlob     = require("./addon-glob.js")
const addonJSONPath = require("./addon-jsonpath.js")
const addonPad      = require("./addon-pad.js")
const addonSprintf  = require("./addon-sprintf.js")
const addonUUID     = require("./addon-uuid.js")

module.exports = (env) => {
    addonDate(env)
    addonDefault(env)
    addonEval(env)
    addonExec(env)
    addonGlob(env)
    addonJSONPath(env)
    addonPad(env)
    addonSprintf(env)
    addonUUID(env)
}

