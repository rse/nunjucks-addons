/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

import type * as Nunjucks from "nunjucks"

export default function (env: Nunjucks.Environment) {
    /*  add a "set"-like "eval" extension
        SECURITY WARNING: This extension uses eval() and should only be used
        with trusted template content. Never use with user-provided templates.  */
    class EvalExtension {
        tags: string[]
        constructor () {
            this.tags = [ "eval" ]
        }
        parse (parser: any, nodes: any, _lexer: any) {
            const tok = parser.nextToken()
            const args = parser.parseSignature(null, true)
            parser.advanceAfterBlockEnd(tok.value)
            return new nodes.CallExtension(this, "run", args)
        }
        run (context: any, args: any) {
            for (const arg in args) {
                if (arg !== "__keywords")
                    /* eslint no-eval: off */
                    context.ctx[arg] = eval(args[arg])
            }
        }
    }
    env.addExtension("EvalExtension", new EvalExtension())
}

