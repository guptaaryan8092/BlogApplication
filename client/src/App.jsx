import { useState } from 'react';

import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Login from './Components/Account/Login'
import Home from './Components/home/Home'
import Header from './Components/header/Header'


function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: 70 }}>
          <Routes>
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App
