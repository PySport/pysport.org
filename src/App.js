import './App.scss';
import {Header} from "./header/header";


import { Navigation} from "./nav/Navigation";
import {Homepage} from "./pages/home/Homepage";
import {Footer} from "./footer/Footer";


import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import {BasicPage} from "./pages/basic/BasicPage";
import {Loader} from "./loader/loader";
import './i18n';
import {useTranslation} from "react-i18next"; // Import the i18n configuration

const Layout = ({children})=>{
    return <>
        <Navigation/>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
}
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
            },
            {
                path: "/nl",
                element: <Homepage/>,
                loader: ()=>{
                    window.i18n.changeLanguage('nl')
                    return <Loader/>
                }
            }


        ],
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider fallbackElement={<p>Loading...</p>}  router={router} />
        </div>
    );
}



export default App;
