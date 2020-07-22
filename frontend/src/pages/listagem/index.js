import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiEdit } from 'react-icons/fi';
import {MdDeleteForever} from 'react-icons/md';
import './styles.css';
import api from '../../services/api';

export default function ListarPessoas() {

//lista as pessoas cadastradas
const [listagem, setLista] = useState([]);

    useEffect(() => {
        api.get('pessoa').then(response => {
                setLista(response.data);
        })
    }, []);

//Deleta a pessoa selecionada
async function deletePessoa(idpessoa) {
    try{
        await api.delete(`pessoa/${idpessoa}`, {});  
        setLista(listagem.filter(pessoa => pessoa.idpessoa !== idpessoa));
        window.location.reload();
        alert('Pessoa deletada com sucesso.');
    }catch(err){
        alert('Erro ao deletar cliente, tente novamente.');
    }
}

//envia o id da pessoa a ser editada para a pag. de edicao
async function editarPessoa(idpessoa) {
    localStorage.setItem('idusuario', idpessoa);
}

    return(
        <div className="listar-clientes-container">           
            <div className="content">
                
                <h1>Clientes Cadastrados</h1>
                <table border="1" cellspacing="0" cellpadding="2" bordercolor="#000000">
                    <thead>
                        <tr>
                            <th>NOME</th>
                            <th>IDADE</th>
                            <th>EDITAR</th>
                            <th>EXCLUIR</th>
                        </tr> 
                    </thead>
                    <tbody>
                        {listagem.map(lista => (
                            <tr key={lista.idusuario}>
                                <td>{lista.nome}</td>
                                <td>{lista.idade}</td>
                                <td><Link to="/edicao"><FiEdit size={23} color="black" cursor="pointer" onClick= {() => editarPessoa(lista.idusuario)}/></Link></td>
                                <td><MdDeleteForever size={23} color="black" cursor="pointer" value="Refresh Page" onClick= {() => deletePessoa(lista.idusuario)}/></td>
                            </tr>
                        ))}
                    </tbody> 
                </table>                            
            </div>
            <form>
                <input placeholder="Pesquisar pessoa"/>
                <button type="submit">PESQUISAR</button>
            </form>
            <div className="voltar">
                <a href="/">CADASTRAR NOVA PESSOA</a>
                <Link to="/"><FiArrowRight size={18} color="black" cursor="pointer"/></Link>
            </div>
        </div>    
    )
}