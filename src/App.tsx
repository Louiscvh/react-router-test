import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import Home from "../components/Home/Home";
import { PrivateRoutes } from "../utils/router/PrivateRoute";
import Dashboard from "../components/Dashboard/Dashboard";
import { PublicRoutes } from "../utils/router/PublicRoutes";
import Notfound from "../components/NotFound/NotFound";

export default function App() {
    return (
    <Router>
        <Routes>
            <Route element={<PublicRoutes/>}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
            </Route>
            <Route element={<PrivateRoutes/>}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="*" element={<Notfound />}></Route>
        </Routes>
    </Router>
  )
}
