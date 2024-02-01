import Header from '../components/Header'
import Home from './Home'

import SideBar from '../components/SideBar'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

function App() {
  const toggle=  useSelector(store => store.toggle);

  return (
    <>
    <Header/>
    <div className='d-flex w-100 ' style={{marginTop:"60px"}} >
      <SideBar/>
      <div className={` ${toggle ? "width-consise" :"width-expand"} width-mobile mainVedioContainer`}>
      <Outlet/>
      </div>
    </div>
    </>
  )
}

export default App
