

module.exports = app => {
    const { existsOrError } = app.api.validation

      const saveClasses =(request, response) => {
        const classe = { ...request.body }
        if(request.params.id) classe.id = request.params.id

        try {
            existsOrError(classe.subject, 'Nome da matéria não foi informado!')
            existsOrError(classe.cost, 'Valor da hora não foi informado!')           
            
        }catch (msg) {
            return response.status(400).send(msg)
        }       

        if(classe.id) {
            app.db('classes')
                .update(classe)
                .where({ id: classe.id })
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send(err))
        }else {
            app.db('classes')
                .insert(classe)
                .then(_ => response.status(204).send())
                .catch(err => response.status(500).send(err))
        }
    }

    const removeClass = async (request, response) => {
        try {
            existsOrError(request.params.id, 'O código da matéria não foi informado!')           

                const rowsDeleted = await app.db('classes')
                    .where({id: request.params.id}).del()
                    existsOrError(rowsDeleted, 'A matéria não foi encontrada!')
                response.status(204).send()
                
        } catch (msg) {
            response.status(400).send()
        }
        
    }

    const getClasses = (request, response) => {
        app.db('classes')
            .select('id', 'subject', 'cost', 'mentor_id')
            .then(classes => response.json(classes))
            .catch(err => response.status(500).send(err))
    }

    const getClasseByMentorId = (request, response) => {
        app.db('classes')
            .select('id', 'subject', 'cost', 'mentor_id')
            .where({mentor_id : request.params.mentor_id})
            .first()
            .then(classe => response.json(classe))
            .catch(err => response.status(500).send(err))
    }

    return { saveClasses, getClasses, getClasseByMentorId, removeClass };
}