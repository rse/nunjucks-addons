/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"

import addonDate     from "./addon-date.js"
import addonDefault  from "./addon-default.js"
import addonEval     from "./addon-eval.js"
import addonExec     from "./addon-exec.js"
import addonGlob     from "./addon-glob.js"
import addonJSONPath from "./addon-jsonpath.js"
import addonPad      from "./addon-pad.js"
import addonSprintf  from "./addon-sprintf.js"
import addonUUID     from "./addon-uuid.js"

export default function (env: Nunjucks.Environment) {
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

