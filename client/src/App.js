import { useMemo } from 'react';
import useToken from './hooks/useToken';

import logo from './logo.svg';
import './App.css';

import { Container, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { DashboardContainer } from './components/Dashboard/DashboardContainer';
import { Editor } from './components/Editor/Editor';
import { Login } from './components/Login/Login';
import { createTheme } from '@mui/material/styles';
import { baseTheme } from './theme';

function App() {

  const theme = createTheme(baseTheme)
  

  const { token, setToken } = useToken((localStorage.getItem('token')));

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <CssBaseline>
          <Navbar setToken={setToken}/>
          <Container>
            <Toolbar />
            <Routes>
              <Route path="/" exact element={!token ? <Login setToken={setToken} /> : <Navigate to='/dashboard' replace /> } />
              <Route path="/dashboard" exact element={<DashboardContainer />} />
              <Route path="/create" exact element={<Editor />} />
            </Routes>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

/*
Sources: 
useToken hook - https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
useAuth hook - https://ui.dev/react-router-protected-routes-authentication

*/
