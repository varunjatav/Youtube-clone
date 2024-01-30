import Header from '../components/Header'
import Home from './Home'

import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function App() {
  const toggle=  useSelector(store => store.toggle)

  return (
    <>
    <Header toggle={toggle}/>
    <div className='d-flex w-100'>
      <SideBar toggle={toggle}/>
      <Outlet/>
    </div>
    </>
  )
}

export default App
