import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {useState} from "react";
import Navbar from "./components/Navbar";
import ROUTES from "./routes"


function AppContent() {
    const navigate = useNavigate();
    const [userID, setUserID] = useState(localStorage.getItem("user_id"));
    const publicLinks = [
        {label: "Home", onClick: () => navigate("/")},
        {label: "Login", onClick: () => navigate("/login")},
        {label: "Create Account", onClick: () => navigate("/create-account")}
    ];
    const privateLinks = [
        {label: "Home", onClick: () => navigate("/")},
        {label: "Dashboard", onClick: () => navigate("/dashboard")},
        {label: "Logout", onClick: () => {
            localStorage.removeItem("user_id")
            setUserID(null)
            navigate("/");
        }}
    ];
    const linksToUse = userID ? privateLinks : publicLinks;
    return (
        <>
            <Navbar links={linksToUse}/>
            <Routes>
                {Object.values(ROUTES).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </>
    );
}

function App() {
       return (
        <BrowserRouter>
           <AppContent/>
        </BrowserRouter>
    );
}

export default App;
