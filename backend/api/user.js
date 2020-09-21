const bcrypt = require('bcrypt-nodejs');
// require('../config/db');

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError, idValidated, emailValidated } = app.api.validation

    const encryptPass = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (request, response) => {
        const user = { ...request.body }
        if(request.params.id) user.id = request.params.id

        try {
            existsOrError(user.name, 'Nome não foi informado!')
            existsOrError(user.email, 'E-mail não foi informado!')
            // emailValidated(user.email, 'O e-mail informado não é válido!')
            existsOrError(user.password, 'A senha não foi informada!')
            existsOrError(user.confirmPassword, 'Confirmação de senha inválida!')
            equalsOrError(user.password, user.confirmPassword, 
                'O campo senha e confirmação de senha devem ser iguais!')
            
            const userFromDb = await app.db('users')
                .where({ email: user.email }).first()
            if(!user.id){
                notExistsOrError(userFromDb, 'Este usuário já foi cadastrado!')
            }
        }catch (msg) {
            return response.status(400).send(msg)
        }

        user.password = encryptPass(user.password)
        delete user.confirmPassword

        if(user.id) {
            app.db('users')
                .update(user)
                .where({ id: user.id })
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send(err))
        }else {
            app.db('users')
                .insert(user)
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send(err))
        }
    }

    const getUsers = (request, response) => {
        app.db('users')
            .select('id', 'name', 'email', 'avatar', 'bio', 'whatsapp', 'mentor')
            .then(users => response.json(users))
            .catch(err => response.status(500).send(err))
    }
    return { save, getUsers }
}