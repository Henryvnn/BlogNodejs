import { createBrowserRouter } from 'react-router-dom';
import FrontendLayout from '../layouts/FrontendLayout';
import AdminLayout from '../layouts/AdminLayout';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import PostDetailPage from '../pages/PostDetailPage';
import SearchPage from '../pages/SearchPage';

const router = createBrowserRouter([
    {
        path: '/', // path
        element: <FrontendLayout />, // render
        children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/login',
                element: <LoginPage />
            },
            {
                path: '/chi-tiet/:id',
                element: <PostDetailPage />
            }, {
                path: 'search',
                element: <SearchPage />
            }
        ]
    },
    {
        //path not found
        path: '*',
        element: <div>404 not found</div>
    }
])

export default router;

// react redux toolkit