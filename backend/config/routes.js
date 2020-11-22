module.exports = app => {
    app.route('/mentors')
        .post(app.api.mentor.saveMentor)
        .get(app.api.mentor.getMentors)
        
    app.route('/mentors/:id')
        .put(app.api.mentor.saveMentor)
        .get(app.api.mentor.getMentorById)

    app.route('/classes')
        .post(app.api.classe.saveClasses)
        .get(app.api.classe.getClasses)
        
    app.route('/classes/:id')
        .put(app.api.classe.getClasses)
        .get(app.api.classe.getClasseById)
        .delete(app.api.classe.removeClass)

    
}