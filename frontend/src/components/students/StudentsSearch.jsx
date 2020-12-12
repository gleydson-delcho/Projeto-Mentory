import React, { useEffect, useState } from 'react';
// import classe from '../../../../backend/api/classe';
// import { Link } from 'react-router-dom';
import api from '../services/api';

import './StudentsSearch.css';


export default 

    
    function Content() {

        const [mentors, setMentors] = useState([]);
        const [classes, setClasses] = useState([]);
        const link = 'http://api.whatsapp.com/send?1=pt_BR&phone=55{mentor.whatsapp}&text=Tenho interesse na sua aula de {classe.subject} {mentor.name}'

    useEffect(() => {        
            api.get('mentors').then(response => {
                setMentors(response.data)
            })  
            api.get('classes').then(response => {
                setClasses(response.data)
            })
    }, []);

    return (
        <div id="container-content">             
            <div className="header-content">            
                <form id="search-teachers">
                    <div className="form">
                        <div className="select-block">
                            <label htmlFor="subject">Matéria</label>
                            <select name="subject" id="subject">
                                <option value="" disabled="" hidden="">Selecione uma opção</option>
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="select-block">
                            <label htmlFor="weekday">Dia da semana</label>
                            <select name="weekday" id="weekday">
                                <option value="" disabled="" hidden="">Selecione uma opção</option> 
                                <option value=""></option>  
                            </select>
                        </div>
                        <div className="input-block">
                            <label htmlFor="time">Hora</label>
                            <input type="time" id="time" name="time" value=""/>
                        </div>
                        <button type="button">Filtrar</button>
                    </div>
                </form>          

                    {mentors.map(mentor => {                                                                                
                        return (
                            <main key={mentor.id}> 

                                    <p className="no-results">Nenhum professor encontrado com a sua pesquisa</p>                                    
                                {classes.map(classe => {
                                    return(
                                    <div className="info" key={classe.id}>
                                        <img src={mentor.avatar} alt={mentor.name}/>
                                        <span>

                                        <strong>{mentor.name}</strong>                                            
                                        <span>{classe.subject}</span> 
                                        <p> {mentor.bio} </p>
                                    
                                        <p>Preço/horas:
                                            <strong >R${classe.cost}</strong>
                                        </p>
                                        </span>
                                    
                                    </div>
                                    )
                                })}                                              
                                        
                                        <button type="button" href={link} className="button" target="blank">
                                        Entrar em contato                    
                                        </button>                                          
                                    
                                </main>
                                )
                    })}
                    
            </div> 
        </div>);
    }
       
