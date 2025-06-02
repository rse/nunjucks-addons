/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import jsonpath from "jsonpath"

export default function (env) {
    /*  add a "jsonpath" filter  */
    env.addFilter("jsonpath", (obj, path, count) => {
        let result
        try {
            result = jsonpath.query(obj, path, count)
        }
        catch (err) {
            return err.toString()
        }
        return result
    })

    /*  add a "jsonpath" global function  */
    env.addGlobal("jsonpath", (obj, path, count) => {
        let result
        try {
            result = jsonpath.query(obj, path, count)
        }
        catch (err) {
            return err.toString()
        }
        return result
    })
}

