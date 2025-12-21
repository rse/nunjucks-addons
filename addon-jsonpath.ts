/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"
// @ts-expect-error -- no type definitions available
import jsonpath           from "jsonpath"

export default function (env: Nunjucks.Environment) {
    /*  add a "jsonpath" filter  */
    env.addFilter("jsonpath", (obj: any, path: string, count?: number) => {
        let result
        try {
            result = jsonpath.query(obj, path, count)
        }
        catch (err) {
            return (err as Error).toString()
        }
        return result
    })

    /*  add a "jsonpath" global function  */
    env.addGlobal("jsonpath", (obj: any, path: string, count?: number) => {
        let result
        try {
            result = jsonpath.query(obj, path, count)
        }
        catch (err) {
            return (err as Error).toString()
        }
        return result
    })
}

