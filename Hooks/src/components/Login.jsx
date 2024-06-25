import { useContext, useState } from 'react';
import { AuthContext } from './AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    login(username);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
