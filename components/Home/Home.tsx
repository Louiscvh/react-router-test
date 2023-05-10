import {Link} from "react-router-dom";

export default function Home() {
    return (<div>
        Landing page
        <br></br>
        <Link to="/login">Login</Link>
    </div>);
}
