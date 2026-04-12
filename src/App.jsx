import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import NotFoundPage from "./Pages/NotFoundPage";
import SignUp from "./Pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "signup",
        element: <SignUp />
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;