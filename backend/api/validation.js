module.exports = app => {
    function existsOrError (value, msg) {
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }

    function notExistsOrError (value, msg) {
        try {
            existsOrError(value, msg)
        } catch (msg) {
            return
        }
        throw msg
    }

    function equalsOrError (valueA, valueB, msg) {
        if(valueA !== valueB) throw msg
    }

    function idValidated (value, msg) {
        if(value <= 0) throw msg
    }

    // Corrigir função.
    function emailValidated (value, msg) {        
        if(value.match(/^([0-9a-z]+[_.-]?[0-9a-z]+)*@[a-z]+[a-z]*(.){1}[a-z]{2,4})+$/)) throw msg
    }

    return { existsOrError, notExistsOrError, equalsOrError, idValidated, emailValidated }
}

