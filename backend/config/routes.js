module.exports = app => {
    app.route('/mentors')
        .post(app.api.mentor.save)
        .get(app.api.mentor.getMentors)
        
    app.route('/mentors/:id')
        .put(app.api.mentor.save)
        .get(app.api.mentor.getMentorById)
}