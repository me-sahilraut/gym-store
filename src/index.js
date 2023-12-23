import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/main/Navigation';
import Home from './components/main/Home';
import Footer from './components/main/Footer';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './components/main/AboutUs';
import Shop from './components/main/Shop';
import ContactUs from './components/main/ContactUs';


const AppLayout = () => {
  return (
    <div >
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([


  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },


    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
