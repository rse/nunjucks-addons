/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2026 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"

export default function (env: Nunjucks.Environment) {
    /*  add a "pad" formatting filter  */
    env.addFilter("pad", (input: any, num: number, char: string = " ", toRight: boolean = false) => {
        let result = typeof input === "string" ? input : String(input)
        if (result.length < num) {
            const pad = char.repeat(num - result.length)
            result = toRight ? result + pad : pad + result
        }
        return result
    })
}

