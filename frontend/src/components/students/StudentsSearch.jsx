import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                            classes.map(classe => {                            
                                return (
                                    <main key={mentor.id}> 
                                        <p className="no-results">Nenhum professor encontrado com a sua pesquisa</p>                                    
                                        <img src={mentor.avatar} alt={mentor.name}/>
    
                                        <div>
                                            <strong>{mentor.name}</strong>
                                            <span>{classe.subject}</span> 
                                        </div>
                                    
                                        <p> {mentor.bio} </p>
                                    
                                        <p>Preço/horas:
                                            <strong>{classe.cost}</strong>
                                        </p>
                                        
                                        <Link to={link} className="button" target="_blank">
                                        Entrar em contato                    
                                        </Link>  
                                    </main>
                                )
                            })                      
                        )
                    })}
                    
            </div> 
        </div>);
    }
       
