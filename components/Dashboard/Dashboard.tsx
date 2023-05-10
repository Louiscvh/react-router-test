import {useNavigate} from "react-router-dom";
import {getCurrentUser, logout} from "../../services/auth.service";

export default function Dashboard() {
    const navigate = useNavigate();
    const currentUser = getCurrentUser();
    const handleLogout = () => {
        logout();
        navigate('/login');
    }
    return (
        <>
            <h1>
                Dashboard
            </h1>
            <h2>{currentUser?.name}</h2>
            <button onClick={handleLogout}>Log out</button>
        </>
);
}
