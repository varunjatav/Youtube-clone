import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import youTubeStore from './store/index.js'
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Video from './components/Video'
import Home from './components/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/:videoId",
        element: <Video/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={youTubeStore}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
