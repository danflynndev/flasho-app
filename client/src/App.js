import { useMemo, useState } from 'react';
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
import { RequireAuth } from './components/RequireAuth/RequireAuth';

const emptyUser = {
  email: '',
  id: '',
  iat: 0,
  exp: 0,
}

function App() {

  const theme = createTheme(baseTheme)
  

  const { token, setToken, clearToken } = useToken();
  // const [user, setUser] = useState({...emptyUser})


  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <CssBaseline>
          <Navbar setToken={setToken} clearToken={clearToken}/>
          <Container>
            <Toolbar />
            <Routes>
              <Route path="/" exact element={<Login setToken={setToken} /> } />
              <Route path="/dashboard" exact element={
                <RequireAuth token={token}>
                  <DashboardContainer />
                </RequireAuth>
              } />
              <Route path="/create" exact element={
                <RequireAuth token={token}>
                  <Editor mode="create" />
                </RequireAuth>
              } />
              <Route path="/edit" element={
                <RequireAuth token={token}>
                  <Editor mode="edit" />
                </RequireAuth>
              } />
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
