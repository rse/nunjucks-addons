/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"
import { glob }           from "glob"

export default function (env: Nunjucks.Environment) {
    env.addGlobal("glob", (pattern: string, options: any = {}) => {
        return glob.globSync(pattern, options)
    })
}

