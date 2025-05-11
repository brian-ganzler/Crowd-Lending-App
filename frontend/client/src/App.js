import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import ROUTES from "./routes"

function AppContent() {
    const navigate = useNavigate();
    const publicLinks = [
        {label: "Home", onClick: () => navigate("/")},
        {label: "Login", onClick: () => navigate("/login")},
        {label: "Create Account", onClick: () => navigate("/create-account")}
    ]

    return (
        <>
            <Navbar links={publicLinks}/>
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
