/*
**  nunjucks-addons -- Nunjucks Template Rendering Engine Addons
**  Copyright (c) 2019-2025 Dr. Ralf S. Engelschall <http://engelschall.com>
**  Licensed under MIT <http://spdx.org/licenses/MIT.html>
*/

module.exports = (env) => {
    const globals = {
        toBool: (val) => {
            if      (typeof val === "undefined") return false
            else if (typeof val === "boolean")   return val
            else if (typeof val === "number")    return !isNaN(val) && val !== 0
            else if (typeof val === "string")    return val.match(/^(?:true|yes)$/i) !== null
            else                                 return !!val
        },
        toInt: (val) => {
            if      (typeof val === "undefined") return NaN
            else if (typeof val === "boolean")   return val ? 1 : 0
            else if (typeof val === "number")    return val
            else if (typeof val === "string")    return parseInt(val, 10)
            else                                 return 0
        },
        toFloat: (val) => {
            if      (typeof val === "undefined") return NaN
            else if (typeof val === "boolean")   return val ? 1.0 : 0.0
            else if (typeof val === "number")    return val
            else if (typeof val === "string")    return parseFloat(val)
            else                                 return 0.0
        },
        toString: (val) => {
            if      (typeof val === "undefined") return "undefined"
            else if (typeof val === "boolean")   return val.toString()
            else if (typeof val === "number")    return val.toString()
            else if (typeof val === "string")    return val
            else                                 return val.toString()
        },
        def: (val, def, type) => {
            if (val === undefined)
                val = def
            if      (type === "bool")   val = globals.toBool(val)
            else if (type === "int")    val = globals.toInt(val)
            else if (type === "float")  val = globals.toFloat(val)
            else if (type === "string") val = globals.toString(val)
            else throw new Error(`invalid coercion type "${type}"`)
            return val
        }
    }
    Object.keys(globals).forEach((name) => {
        env.addGlobal(name, globals[name])
    })
}

