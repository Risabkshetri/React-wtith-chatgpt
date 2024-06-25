import { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Profile() {
  const { user, logout } = useContext(AuthContext);

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
