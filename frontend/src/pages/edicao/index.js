import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

export default function Pessoa() {

    const idusuario = localStorage.getItem('idusuario');
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

//Mudança de dados do usuário selecionado
    async function updatePessoa() {
        const data = {
            nome,
            idade
        };

        try {
            await api.post(`pessoa/${idusuario}`, data);  
            alert('Alterado com sucesso');
        } catch (err) {
            alert('Erro na alteração, tente novamente');
        }      
    }

    return(
        <div class="tela-cadastro">
            <h1>Edição de cadastro</h1>
            <form onSubmit={updatePessoa}>
                <input placeholder="Novo nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input placeholder="Nova idade"
                    value={idade}
                    onChange={e => setIdade(e.target.value)}
                />
                <button type="submit">ALTERAR</button>
            </form>
            <div className="acesso-listagem">
                <a href="listagem">LISTAR PESSOAS</a>
                <Link to="listagem"><FiArrowRight size={18} color="black" cursor="pointer"/></Link>
            </div>    
        </div>
    );
}