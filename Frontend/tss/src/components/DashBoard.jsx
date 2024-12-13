import  { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await axios.get('/api/admins/list', { withCredentials: true });
            setAdmins(response.data);
        } catch (error) {
            console.error(error); 
            console.error('Failed to fetch admins');
        }
    };

    const deleteAdmin = async (id) => {
        try {
            await axios.delete(`/api/admins/delete/${id}`, { withCredentials: true });
            fetchAdmins(); // Refresh the admin list after deletion
        } catch (error) {
            console.error(error); 
            console.error('Failed to delete admin');
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {admins.map((admin) => (
                    <li key={admin.id}>
                        {admin.username} ({admin.role})
                        <button onClick={() => deleteAdmin(admin.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
