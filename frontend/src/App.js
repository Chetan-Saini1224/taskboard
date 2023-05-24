import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from "./Components/Navbar";
import UserProvider from './contexts/userContext';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> }
      ],
    },
]);



function App() {
  return (
  <>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider> 
    </>
  );
}

export default App;
