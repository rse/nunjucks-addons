/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"
import vm                 from "node:vm"

export default function (env: Nunjucks.Environment) {
    /*  add an "exec" extension
        SECURITY WARNING: This extension executes JavaScript code in a new context
        and should only be used with trusted template content. Never use with
        user-provided templates.  */
    class ExecExtension {
        tags: string[]
        constructor () {
            this.tags = [ "exec" ]
        }
        parse (parser: any, nodes: any, _lexer: any) {
            const tok = parser.nextToken()
            const args = parser.parseSignature(null, true)
            parser.advanceAfterBlockEnd(tok.value)
            const body = parser.parseUntilBlocks("endexec")
            parser.advanceAfterBlockEnd()
            return new nodes.CallExtension(this, "run", args, [ body ])
        }
        run (context: any, body: any) {
            const js = body()
            vm.runInNewContext(js, context.ctx)
            return ""
        }
    }
    env.addExtension("ExecExtension", new ExecExtension())
}

