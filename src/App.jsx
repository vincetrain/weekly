import { useState } from 'react';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import LandingPage from './Pages/LandingPage/LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />
    }
]);

function App() {
    // We use React's useState here to pass (and also change) user information between different components/pages. 
    // See: https://reactjs.org/docs/lifting-state-up.html
    const [isAuthenticated, setIsAuthenticated] = useState();

    return (
        <div className='app-container'>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;