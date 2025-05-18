import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import CreateUserPage from "./pages/CreateUserPage";
import CreateInvestorPage from "./pages/CreateInvestorPage";
import DashboardPage from "./pages/DashboardPage";


export const PUBLIC_ROUTES = {
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
    }
}
export const PRIVATE_ROUTES = {
    CREATE_INVESTOR: {
        path: "/create-investor",
        element: < CreateInvestorPage />
    },
    DASHBOARD: {
        path: "/dashboard",
        element: <DashboardPage />
    }
};
