/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2023 Dr. Ralf S. Engelschall <http://engelschall.com>
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
            var tok = parser.nextToken()
            var args = parser.parseSignature(null, true)
            parser.advanceAfterBlockEnd(tok.value)
            var body = parser.parseUntilBlocks("endexec")
            parser.advanceAfterBlockEnd()
            return new nodes.CallExtension(this, "run", args, [ body ])
        }
        run (context, body) {
            var js = body()
            vm.runInNewContext(js, context.ctx)
            return ""
        }
    }
    env.addExtension("ExecExtension", new ExecExtension())
}

