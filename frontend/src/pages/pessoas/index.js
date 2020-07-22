import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import api from '../../services/api';

export default function Pessoa() {
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');

//Cadastra uma nova pessoa
    async function register(e) {
        const data = {
            nome,
            idade
        };
//Informa ao usuário se o cadastro ocorreu de forma correta
        try {
            await api.post('novapessoa', data);
            alert('Cadastrado com sucesso');
        } catch (err) {
            alert('Erro no cadastro, tente novamente');
        }
        
    }
    return(
        <div class="tela-cadastro">
            <h1>Cadastro de pessoas</h1>
            <form onSubmit={register}>
                <input placeholder="Nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <input placeholder="idade"
                    value={idade}
                    onChange={e => setIdade(e.target.value)}
                />
                <button type="submit">GRAVAR</button>
            </form>
            <div className="acesso-listagem">
                <a href="listagem">LISTAR PESSOAS</a>
                <Link to="listagem"><FiArrowRight size={18} color="black" cursor="pointer"/></Link>
            </div>    
        </div>
    );
}