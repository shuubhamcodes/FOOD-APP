// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import Body from './components/Body';
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About"
// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />, // Wrapper Component
//     children: [
//       { path: "", element: <Body /> }, // Default home page
//       { path: "about", element: <About /> }, // About page
//     ],
//   },
// ]);

// function Layout(){
//   return(
//     <div className='app'>
//       <Header />
//       <Outlet /> {/* This will render either <Body /> or <About /> based on the route */}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="app">
//       <RouterProvider router={appRouter} />;
//       <Header />
//       <Body />
      
//     </div>
//   );
// }

// export default App;



import React from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

// 1️⃣ Define Routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Wrapper Component
    errorElement: <Error />,
    children: [
      { path: "", element: <Body /> }, // Default home page
      { path: "about", element: <About /> }, // About page
      { path: "contact", element: <Contact /> }, // About page
    ],
  },
]);

// 2️⃣ Layout Component (Contains Persistent Header & Dynamic Content via <Outlet />)
function Layout() {
  return (
    <div className='app'>
      <Header />
      <Outlet /> {/* This dynamically renders Body or About */}
    </div>
  );
}

// 3️⃣ App Component (Only Contains RouterProvider)
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
