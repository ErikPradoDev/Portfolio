import './styles/images.css'
import Header from './components/Header'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import HomePage from './pages/PageHome/HomePage'
import ProjectsPage from './pages/PageProjects/ProjectsPage'
import BlogPage from './pages/PageBlog/BlogPage'
import ErrorPage from './pages/PageError/ErrorPage'
import WindowsPage from './pages/PageProjects/projects/windowsPage/windowsPage';
import CreativeProcess from './pages/PageBlog/articles/CreativeProcess';
import McDonaldsPage from './pages/PageProjects/projects/mcDonalds/McDonaldsPage';

const Dashboard = () =>{
    return(
    <div>
      <Header />
      <Outlet />
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
    path: "/projects/mcdonalds-website-redesign",
    element: <Dashboard />,
    children: [
    {
      path: "/projects/mcdonalds-website-redesign",
      element: <McDonaldsPage />,
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

export default function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}
