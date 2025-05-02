import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './Layout/MainLayout'
import { Home } from './Pages/HomePage/homepage'
import { CartPage } from './Pages/CartPage/cartpage'
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route  path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/Cart' element={<CartPage />} />
      </Route>
    </Routes>

    </>
  )
}

export default App
