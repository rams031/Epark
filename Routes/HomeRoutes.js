import { backButton } from "../Api/GlobalScript";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

export const HomeRoutes = [
    {
        name: 'Login',
        component: Login,
        option: { headerShown: false }
    },
    {
        name: 'Register',
        component: Register,
        option: { ...backButton }
    }
]