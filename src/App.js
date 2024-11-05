import './App.scss';
import { Header } from "./header/header";
import { Navigation } from "./nav/Navigation";
import { Homepage } from "./pages/home/Homepage";
import { Footer } from "./footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BasicPage } from "./pages/basic/BasicPage";
import { Loader } from "./loader/loader";
import './i18n';
import { useTranslation } from "react-i18next"; // Import the i18n configuration
import { useEffect } from 'react';

const Layout = () => {
    return (
        <>
            <Navigation />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

// LanguageWrapper component
const LanguageWrapper = ({ children }) => {
    const { i18n } = useTranslation();

    useEffect(() => {
        // Check the current URL path to set language
        const path = window.location.pathname;
        if (path.startsWith('/nl')) {
            i18n.changeLanguage('nl');
        } else {
            i18n.changeLanguage('en'); // Default to English or any other default language
        }
    }, [i18n]);

    return children;
};

// Define routes with the LanguageWrapper in mind
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        loader: Loader,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/pages/:slug",
                element: <BasicPage />,
                loader: Loader,
            }
        ],
    },
    {
        path: "/nl",
        element: <Layout />,
        loader: Loader,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: "/nl/pages/:slug",
                element: <BasicPage />,
                loader: Loader,
            }
        ],
    },
]);

function App() {
    return (
        <div className="App">
            <LanguageWrapper>
                <RouterProvider fallbackElement={<p>Loading...</p>} router={router} />
            </LanguageWrapper>
        </div>
    );
}

export default App;
