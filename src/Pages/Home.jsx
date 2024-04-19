import { useState } from 'react';
import './App.css';
import JoinFlakebookForm from '../components/JoinFlakebookForm';
import UserList from '../components/UserList';

function Home() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <h2>Flakebook</h2>

      <h3>..join Flakebook now..</h3>
      <JoinFlakebookForm setUsers={setUsers} />

      <h3>User List</h3>
      <UserList users={users} setUsers={setUsers}  />
    </div>
  );
}

export default Home;
