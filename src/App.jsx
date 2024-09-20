import './styles/components/app.sass'
import './styles/components/images.css'
import Header from './components/Header'
import Footer from './components/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import BlogPage from './pages/BlogPage'
import ErrorPage from './pages/ErrorPage'
import WindowsPage from './pages/projects/windowsPage';
import CreativeProcess from './pages/articles/CreativeProcess';




const Dashboard = () =>{
    return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
    {
      path:"/",
      element: <HomePage />,
    },
  ]
  },
  {
    path: "/blog",
    element: <Dashboard />,
    children: [
    {
      path: "/blog",
      element: <BlogPage />,
    },
  ]
  },
  {
    path: "/projects",
    element: <Dashboard />,
    children: [
    {
      path: "/projects",
      element: <ProjectsPage />,
    },
  ]
  },
  {
    path: "/projects/windows-desktop-erik-prado",
    element: <Dashboard />,
    children: [
    {
      path: "/projects/windows-desktop-erik-prado",
      element: <WindowsPage />,
    },
  ]
  },
  {
    path: "/blog/article-creative-process-in-creating-a-website",
    element: <Dashboard />,
    children: [
    {
      path: "/blog/article-creative-process-in-creating-a-website",
      element: <CreativeProcess />,
    },
  ]
  },
  {
    path: "*",
    element: <Dashboard />,
    children: [
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]
  },
])

function App() {

  return (
      <div>
        <RouterProvider router={router} />

      </div>
  )
}

export default App
