import logo from './logo.svg';
import './App.css';
import Home from './routes/home/home.component';
import {Routes,Route} from 'react-router-dom'
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/Authentication/authentication.component';
import { CheckoutPage } from './routes/checkout/checkout.component';

function App() {
  return(
    <Routes>
      <Route path = '/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path = 'shop/*' element={<Shop/>}/>
        <Route path = 'auth' element={<Auth/>}/>
        <Route path = 'checkout' element={<CheckoutPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
