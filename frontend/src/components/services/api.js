
import axios from 'axios';

   


    const baseURL = 'http://localhost:3000'
    
    
    function getMentors() {
        const mentor = this.state.mentor;
        const url = mentor.id ? `${baseURL}/mentors/${mentor.id}` : `${baseURL}/mentors`;
        
        axios.get(url, mentor)
            .then(resp => {
                const list = this.getUpdatedList(resp.data);
                this.setState({user: mentor, list});
            })
    }

    function getUpdatedList (mentor, add = true) {
        const list = this.state.list.filter(m => m.id !== mentor.id);
        if(add) list.unshift(mentor);
        return list;
    }


export default { getMentors, getUpdatedList }