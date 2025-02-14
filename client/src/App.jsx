import React, { useState } from 'react';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';

//Components
import Login from './Components/Account/Login'
import Home from './Components/home/Home'
import Header from './Components/header/Header'
import CreatePost from './Components/create/CreatePost';
import DetailView from './Components/details/DetailView';
import Update from './Components/create/Update';

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
  // Load authentication state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Function to update authentication state
  const isUserAuthenticated = (status) => {
    setIsAuthenticated(status);
    localStorage.setItem('isAuthenticated', status);  // Persist login state
  };

  return (
    <DataProvider>
      <BrowserRouter>

        <div style={{ marginTop: 70 }}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />

            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element={<Home />} />
            </Route>

            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/create' element={<CreatePost />} />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/details/:id' element={<DetailView />} />
            </Route>

            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
            <Route path='/update/:id' element={<Update />} />
            </Route>


          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App
