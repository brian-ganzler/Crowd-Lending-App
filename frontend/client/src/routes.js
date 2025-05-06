import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateUserPage from "./pages/CreateUserPage";
import CreateInvestorPage from "./pages/CreateInvestorPage";



const ROUTES = {
    HOME: {
        path: "/",
        element: < HomePage />
    },
    LOGIN: {
        path: "/login",
        element: < LoginPage />
    },
    CREATE_USER: {
        path: "/create-account",
        element: < CreateUserPage />
    },
    CREATE_INVESTOR: {
        path: "/create-investor",
        element: < CreateInvestorPage />
    }
};

export default ROUTES;