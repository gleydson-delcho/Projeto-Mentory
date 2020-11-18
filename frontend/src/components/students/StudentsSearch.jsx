import React from 'react';


import './StudentsSearch.css';

export default props =>
    <div id="container-content">             
        <div class="header-content">            
            <form id="search-teachers">
                <div className="form">
                    <div class="select-block">
                        <label for="subject">Matéria</label>
                        <select name="subject" id="subject">
                            <option value="" disabled="" hidden="">Selecione uma opção</option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div class="select-block">
                        <label for="weekday">Dia da semana</label>
                        <select name="weekday" id="weekday">
                            <option value="" disabled="" hidden="">Selecione uma opção</option> 
                            <option value=""></option>  
                        </select>
                    </div>
                    <div class="input-block">
                        <label for="time">Hora</label>
                        <input type="time" id="time" name="time" value=""/>
                    </div>
                    <button type="button">Filtrar</button>
                </div>
            </form>
        </div>       
    </div>     
