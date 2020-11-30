import './Footer.css'

import warning from '../../assets/images/warning.png';
import React from 'react';
import hundleSubmit from '../mentor/Forms';

export default props =>
    <footer>
        <p>
            <img src={ warning } alt="warning"/> Importante! <br/> Preencha todos os campos.
        </p>
        <button type="submit" form="save-student" onClick={ hundleSubmit }>Cadastrar</button>
    </footer>