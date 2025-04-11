import { useEffect, useState } from 'react';
import { consult } from '../../../services/Service';

interface Usuario {
  id: number;
  name: string;
}

function ListUsers() {

  const [users, setUsers] = useState<Usuario[]>([]);

  async function consultUsers() {

    try {
      await consult('/users', setUsers);
    } catch (error: any) {
      alert('Error!')
    }
    
  }

  useEffect(() => {
    consultUsers();
  }, []);

  return (
    <div className='lista'>
      <h1>Lista de usuários - Gerada pelo Axios</h1>
      <ul>
        {users.map( (user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;