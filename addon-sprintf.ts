/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"
// @ts-expect-error -- no type definitions available
import sprintf            from "sprintfjs"

export default function (env: Nunjucks.Environment) {
    /*  add a "sprintf" formatting filter  */
    env.addFilter("sprintf", (value: any, format: string, ...args: any[]) => {
        return sprintf(format, value, ...args)
    })

    /*  add a "sprintf" global function  */
    env.addGlobal("sprintf", (format: string, ...args: any[]) => {
        return sprintf(format, ...args)
    })
}

