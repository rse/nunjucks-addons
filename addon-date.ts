/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"
import moment             from "moment"
// @ts-expect-error -- no type definitions available
import nlib               from "nunjucks/src/lib.js"

export default function (env: Nunjucks.Environment) {
    /*  add a "date" formatting filter  */
    env.addFilter("date", (date: any, format: string, ...args: any[]) => {
        let result
        const errs: Error[] = []
        let obj
        try {
            obj = moment(date)
        }
        catch (err) {
            errs.push(err as Error)
        }
        if (obj) {
            try {
                if (obj[format as keyof typeof obj] && nlib.isFunction(obj[format as keyof typeof obj]))
                    result = (obj[format as keyof typeof obj] as any)(obj, ...args.slice(2))
                else
                    result = obj.format(format)
            }
            catch (err) {
                errs.push(err as Error)
            }
        }
        if (errs.length)
            return errs.join("\n")
        return result
    })
}

