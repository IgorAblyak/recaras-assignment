import React from "react";
import { Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Catalog from './pages/Catalog';
import Favorite from './pages/Favorite';


const App = () => {

  
  return (
    <React.Fragment>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<Catalog />}/>
        <Route path='/favorite' element={<Favorite />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;