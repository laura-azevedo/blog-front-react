import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function Home() {

  const { name } = useContext(UserContext);

  return (
    <div className='container'>
      <div>
        <h1>Autenticar Usuário</h1>
        <h2>Seja bem-vindo(a): <span>{name}</span></h2>
        <Link to="/login" 
            className="botao"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}

export default Home;