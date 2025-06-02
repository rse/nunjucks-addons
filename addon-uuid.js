/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import UUID from "pure-uuid"

export default function (env) {
    env.addGlobal("uuid", (...args) => {
        return (new UUID(...args)).format()
    })
}

