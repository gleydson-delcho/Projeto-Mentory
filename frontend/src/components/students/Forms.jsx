import './Forms.css'
import React from 'react';

import warning from '../../assets/images/warning.png';

export default props =>
<div className="container-content">
    <form action="save-student" id="new-student" method="POST">
        <fieldset>
            <legend>Informe seus dados</legend>
            <div className="input-block">
                <label for="name">Nome Completo: </label>
                <input name="name" id="name" required/>
            </div>
            <div className="input-block">
                <label for="email">E-mail: </label>
                <input type="text" name="email" id="email"/>
            </div>
            <div className="input-block">
                <label for="whatsapp">Telefone: <small>(Somente números)</small></label>
                <input type="number" name="whatsapp" id="whatsapp"/>
            </div>
            <div className="input-block">
                <label for="password">Senha: </label>
                <input type="password" name="password" required/>
            </div>
            <div className="input-block">
                <label for="confirmPassword">Senha: </label>
                <input type="password" name="confirmPassword" required/>
            </div>
        </fieldset>
            <legend>Escolha os horários</legend>
        <div className="schedule-item">
            <div className="select-block">
                <label for="subject">Matéria: </label>
                <select name="subject" id="subject">
                    <option value="" disabled="" hidden="" >Selecione uma opção</option>
                    <option value="0">Javascript</option>
                    <option value="1">React</option>
                    <option value="2">Vue</option>
                    <option value="3">React Native</option>
                    <option value="4">HTML + CSS</option>
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
                <label for="time">Horário: </label>
                <input type="time" name="time" id="time" />
            </div>
        </div>
        <footer>
            <p>
                <img src={ warning } alt="warning"/>
            </p>
            <button type="submit" form="save-student">Cadastrar</button>
        </footer>
    </form>
</div> 