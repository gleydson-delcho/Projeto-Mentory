import './Forms.css'
import React from 'react';

import Footer from '../students/Footer';

export default props =>
<div className="container">
    <div className="container-content">
        <form action="save-student" id="new-student" method="POST">
            <fieldset>
                <legend>Informe seus dados</legend>
                <div className="input-block">
                    <label for="name">Nome Completo: </label>
                    <input name="name" id="name" required/>
                </div>
                <div className="input-block">
                    <label for="name">Inclua uma foto:<small>(use um link começando com https://)</small>
                       </label>
                    <input name="name" id="name" required/>
                </div>                
                <div className="input-block">
                    <label for="email">E-mail: </label>
                    <input type="text" name="email" id="email"/>
                </div>
                <div className="input-block">
                    <label for="whatsapp">Telefone:<small>(Somente números)</small></label>
                    <input type="number" name="whatsapp" id="whatsapp"/>
                </div>                
                <div className="input-block">
                    <label for="email">Conte para nós um pouco sobre você: </label>
                    <textarea name="bio" id="bio"></textarea>
                </div>
            </fieldset>
                <legend>Escolha suas matérias e sua disponibilidade!</legend>
            <div className="schedule-item">
                <div className="select-block">
                    <label for="subject">Matéria: </label>
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
                    <label for="weekday">Dia da semana: </label>
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
                    <label for="time">Das: </label>
                    <input type="time" name="time" id="time" />
                </div>
                <div className="input-block">
                    <label for="time">Até: </label>
                    <input type="time" name="time" id="time" />
                </div>
            </div>
            < Footer />
        </form>
    </div> 
</div>