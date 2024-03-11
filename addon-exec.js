/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2024 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

const vm = require("node:vm")

module.exports = (env) => {
    /*  add an "exec" extension  */
    class ExecExtension {
        constructor () {
            this.tags = [ "exec" ]
        }
        parse (parser, nodes, lexer) {
            const tok = parser.nextToken()
            const args = parser.parseSignature(null, true)
            parser.advanceAfterBlockEnd(tok.value)
            const body = parser.parseUntilBlocks("endexec")
            parser.advanceAfterBlockEnd()
            return new nodes.CallExtension(this, "run", args, [ body ])
        }
        run (context, body) {
            const js = body()
            vm.runInNewContext(js, context.ctx)
            return ""
        }
    }
    env.addExtension("ExecExtension", new ExecExtension())
}

