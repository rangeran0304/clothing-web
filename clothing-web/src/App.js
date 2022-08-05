import './App.css';
import Home from './routes/home/home.component';
import {Routes,Route} from 'react-router-dom'
import Shop from './routes/shop/shop.component';
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/Authentication/authentication.component';
import { CheckoutPage } from './routes/checkout/checkout.component';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { createUserProfileDocument } from './utils/firebase/firebase.utils';
function App() {
  const dispatch = useDispatch()
  useEffect( ()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            if(user){
                 createUserProfileDocument(user)
            }
            dispatch(setCurrentUser(user))
        });
        return unsubscribe;
    },[])
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
