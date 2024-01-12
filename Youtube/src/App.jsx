import Header from './components/Header'
import Home from './components/Home'

import SideBar from './components/SideBar'
import { useSelector } from 'react-redux'

function App() {
  const toggle=  useSelector(store => store.toggle)

  return (
    <>
    <Header toggle={toggle}/>
    <div className='d-flex'>
      <SideBar toggle={toggle}/>
      <Home/>
    </div>
    </>
  )
}

export default App
