/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"
import UUID               from "pure-uuid"

export default function (env: Nunjucks.Environment) {
    env.addGlobal("uuid", (...args: any[]) => {
        // @ts-expect-error -- spread args to constructor
        return (new UUID(...args)).format()
    })
}

