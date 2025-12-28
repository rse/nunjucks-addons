/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"

export default function (env: Nunjucks.Environment) {
    /*  add a "keys" formatting filter  */
    env.addFilter("keys", (value: any, index?: number) => {
        if (typeof value !== "object")
            return undefined
        let keys
        if (Array.isArray(value))
            keys = Object.keys(value[0])
        else
            keys = Object.keys(value)
        return (index !== undefined ? keys[index] : keys)
    })
}

