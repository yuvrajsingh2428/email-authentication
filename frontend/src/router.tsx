import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Dashboard from "./pages/Dashboard";
import Login  from "./pages/login"

export const router = createBrowserRouter([
  {
    path: '/',               // Correct usage of path key within an object
    element: <App />,         // Use 'element' to specify the component
    children: [               // 'children' for nested routes
      {
        path: '',             // Empty path for default (index) route
        element: <Dashboard /> // Use 'element' for components
      },
      {
        path: '/login',       // Path for login route
        element: <Login />    // Use 'element' for components
      }
    ]
  }
]);
