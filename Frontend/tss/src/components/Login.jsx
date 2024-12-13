import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; // To redirect after login

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post('/api/admins/login', { username, password }, { withCredentials: true });
            alert('Login successful');
            history.push('/dashboard'); // Redirect to the dashboard after successful login
        } catch (error) {
            console.error(error);
            alert('Login failed');
        }
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
