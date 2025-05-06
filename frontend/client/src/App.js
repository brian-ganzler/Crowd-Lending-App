import { BrowserRouter, Routes, Route } from "react-router-dom";
import ROUTES from "./routes"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {Object.values(ROUTES).map(({path, element}) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
