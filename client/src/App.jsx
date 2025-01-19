import { useState } from 'react';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';

//Components
import Login from './Components/Account/Login'
import Home from './Components/home/Home'
import Header from './Components/header/Header'

// Here aunthenticated user is allowed to access the page.
const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Header />
      <Outlet />
    </>
    :
    <Navigate replace to='/login' />
}


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        
        <div style={{ marginTop: 70 }}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App
