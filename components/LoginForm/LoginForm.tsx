import {FormEvent, useState} from 'react';
import {login} from "../../services/auth.service";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate();
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(username, password);
        login()
        navigate("/dashboard");
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Login</button>
        </form>
    );
}
