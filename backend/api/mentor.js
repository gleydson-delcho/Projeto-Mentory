

module.exports = app => {
    const { existsOrError, notExistsOrError } = app.api.validation

      const saveMentor = async (request, response) => {
        const mentor = { ...request.body }
        if(request.params.id) mentor.id = request.params.id

        try {
            existsOrError(mentor.name, 'Nome não foi informado!')
            existsOrError(mentor.email, 'E-mail não foi informado!')
            // emailValidated(mentor.email, 'O e-mail informado não é válido!')            
            
            const mentorFromDb = await app.db('mentors')
                .where({ email: mentor.email }).first()

            const existentMentor = !mentor.id

            if(existentMentor){
                notExistsOrError(mentorFromDb, 'Este usuário já foi cadastrado!')
            }
        }catch (msg) {
            return response.status(400).send(msg)
        }       

        if(mentor.id) {
            app.db('mentors')
                .update(mentor)
                .where({ id: mentor.id })
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send(err))
        }else {
            app.db('mentors')
                .insert(mentor)
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send(err))
        }
    }

    const getMentors = (request, response) => {
        app.db('mentors')
            .select('id', 'name', 'email', 'avatar', 'bio', 'whatsapp')
            .then(mentors => response.json(mentors))
            .catch(err => response.status(500).send(err))
    }

    const getMentorById = (request, response) => {
        app.db('mentors')
            .select('id', 'name', 'email', 'avatar', 'bio', 'whatsapp')
            .where({id : request.params.id})
            .first()
            .then(mentor => response.json(mentor))
            .catch(err => response.status(500).send(err))
    }

    return { saveMentor, getMentors, getMentorById };
}