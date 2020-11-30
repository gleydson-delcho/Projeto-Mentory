import './Forms.css'
import React, { useState }  from 'react';
import warning from '../../assets/images/warning.png';
//import api from '../services/api';
// import { useHistory } from 'react-router';


export default 
    function Forms() {


        const [name, setName] = useState('')  
        const [avatar, setAvatar] = useState('')  
        const [email, setEmail] = useState('')  
        const [whatsapp, setWhatsapp] = useState('')  
        const [bio, setBio] = useState('')  
        const [time_from, setTime_from] = useState('')  
        const [time_to, setTime_to] = useState('')  
        
                 
        // const url = api.baseURL

        // api.post(url).then(response => {
        //     console.log(response.data)
        // })
        
        
        
        async function handleSubmit(event) {
            event.preventDefault();

            // const history = useHistory();
            const data = new FormData();
            
            data.append('name', name);
            data.append('avatar', avatar);
            data.append('email', email);
            data.append('bio', bio);
            data.append('whatsapp', whatsapp);
            // data.append('time_from', time_from);
            // data.append('time_to', time_to);
            
            //pode ser adicionado uma resposta com .then() ou utilizar uma resposta customizada com async/await.
            await console.log('mentors', data);
                
            alert('Seu cadastro foi realizado com sucesso!');
            // history.push('/students');

        }

        return(
            <div className="container">
                <div className="container-content">
                    <form onSubmit={handleSubmit} className="save-mentors">
                        <fieldset>
                            <legend>Informe seus dados</legend>
                            <div className="input-block">
                                <label htmlFor="name">Nome Completo: </label>
                                <input 
                                    id="name" 
                                    value={ name }
                                    onChange={event => setName(event.target.value)}
                                    />
                            </div>
                            <div className="input-block">
                                <label htmlFor="avatar">Inclua uma foto:<small>(use um link começando com https://)</small>
                                </label>
                                <input 
                                    id="avatar" 
                                    value={avatar} 
                                    onChange={event => setAvatar(event.target.value)} 
                                    />
                            </div>                
                            <div className="input-block">
                                <label htmlFor="email">E-mail: </label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={event => setEmail(event.target.value) } />
                            </div>
                            <div className="input-block">
                                <label htmlFor="whatsapp">Telefone:<small>(Somente números)</small></label>
                                <input 
                                    type="number" 
                                    name="whatsapp" 
                                    id="whatsapp" 
                                    value={whatsapp} 
                                    onChange={event => setWhatsapp(event.target.value)} />
                            </div>                
                            <div className="input-block">
                                <label htmlFor="bio">Conte para nós um pouco sobre você: </label>
                                <textarea 
                                    name="bio" 
                                    id="bio" 
                                    value={bio} 
                                    onChange={event => setBio(event.target.value)} >

                                </textarea>
                            </div>
                        </fieldset>
                            <legend>Escolha suas matérias e sua disponibilidade!</legend>
                        <div className="schedule-item">
                            <div className="select-block">
                                <label htmlFor="subject">Matéria: </label>
                                <select name="subject" id="subject">
                                    <option value="" disabled="" hidden="" >Selecione uma opção</option>
                                    <option value="0">Javascript</option>
                                    <option value="1">Java</option>
                                    <option value="2">PHP</option>
                                    <option value="3">Python</option>
                                    <option value="4">C++</option>
                                </select>                            
                            </div>
                            <div className="select-block">
                                <label htmlFor="weekday">Dia da semana: </label>
                                <select name="weekday" id="weekday">
                                    <option value="" disabled="" hidden="" >Selecione uma opção</option>
                                    <option value="0">Domingo</option>
                                    <option value="1">Segunda-feira</option>
                                    <option value="2">Terça-feira</option>
                                    <option value="3">Quarta-feira</option>
                                    <option value="4">Quinta-feira</option>
                                    <option value="5">Sexta-feira</option>
                                    <option value="6">Sábado</option>
                                </select>                            
                            </div>
                            <div className="input-block">
                                <label htmlFor="time">Das: </label>
                                <input 
                                    type="time" 
                                    name="time" 
                                    id="time" 
                                    value={time_from} 
                                    onChange={event => setTime_from(event.target.value)} />
                            </div>
                            <div className="input-block">
                                <label htmlFor="time">Até: </label>
                                <input 
                                    type="time" 
                                    name="time" 
                                    id="time" 
                                    value={time_to} 
                                    onChange={event => setTime_to(event.target.value)} />
                            </div>
                        </div>
                        <footer>
                            <p>
                                <img src={ warning } alt="warning"/> Importante! <br/> Preencha todos os campos.
                            </p>
                            <button type="submit" form="save-mentors">Cadastrar</button>
                        </footer>
                    </form>
                </div> 
            </div>
        )
    }
