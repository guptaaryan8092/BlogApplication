import './App.css'
import DataProvider from './context/DataProvider';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Login from './Components/Account/Login'
import Home from './Components/home/Home'


function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 70 }}>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App
