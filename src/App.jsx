import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Button, Card } from '@material-tailwind/react'
import Home from './pages/home/Home'
import NoPage from './pages/noPage/NoPage'
import ProductInfo from './pages/productInfo/ProductInfo'
import ScrollTop from './components/scrollTop/ScrollTop'
import Cart from './pages/cart/Cart'
import AllProducts from './pages/allProduct/AllProduct'
import Signup from './pages/registration/Signup'
import Login from './pages/registration/Login'
import UserDashboard from './pages/user/UserDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import AddProductPage from './pages/admin/AddProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import MyState from './context/myState'
import { Toaster } from 'react-hot-toast'
import { ProtectedRouteForUser } from './protectedRoute/ProtectedRouteForUser'
import { ProtectedRouteForAdmin } from './protectedRoute/ProtectedRouteForAdmin'
import Category from './components/category/Category'
import CategoryPage from './pages/category/CategoryPage'
//import OrderDetail from './pages/user/OrderDetail'
import OrderDetailing from './pages/user/OrderDetailing'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <MyState>
      
        <Router>
          <ScrollTop />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/*' element={<NoPage />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/productinfo/:id' element={<ProductInfo />}></Route>
            <Route path='/allproduct' element={<AllProducts />}></Route>
            <Route path='/user' element={ <ProtectedRouteForUser><UserDashboard /></ProtectedRouteForUser> }></Route>
            <Route path='/order/:id'element={<ProtectedRouteForUser><OrderDetailing/></ProtectedRouteForUser>}/>
            <Route path='/cart' element={<ProtectedRouteForUser><Cart /></ProtectedRouteForUser>  }></Route>
            <Route path='/category/:categoryname' element={<CategoryPage/>}></Route>

            {/* protected route for admin  */}
            <Route path='/addproduct' element={<ProtectedRouteForAdmin><AddProductPage /></ProtectedRouteForAdmin>}></Route>
            <Route path='/updateproduct/:id' element={<ProtectedRouteForAdmin><UpdateProductPage /></ProtectedRouteForAdmin>}></Route>
            <Route path='/admin-dashboard' element={<ProtectedRouteForAdmin><AdminDashboard /></ProtectedRouteForAdmin> }></Route>
            
          </Routes>
          <Toaster/>
        </Router>
      


    </MyState>
  )
}

export default App
