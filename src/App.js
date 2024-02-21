import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import PasswordPage from "./components/PasswordPage";

function App() {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <SignUp />,
        },
        {
            path: "/password",
            element: <PasswordPage />,
        },
    ]);
    return (
        <Provider store={appStore}>
            <div className="App">
                <RouterProvider router={appRouter} />
            </div>
        </Provider>
    );
}

export default App;
