import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import useToken from './hooks/useToken';

import { Box, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { baseTheme } from './theme';

import { Navbar } from './components/Navbar/Navbar';
import { DashboardContainer } from './components/Dashboard/DashboardContainer';
import { EditorFilledContainer } from './components/Editor/EditorFilledContainer';
import { EditorBlankContainer } from './components/Editor/EditorBlankContainer';
import { Login } from './components/Login/Login';
import { RequireAuth } from './components/RequireAuth/RequireAuth';
import { SelectDecks } from './components/Editor/SelectDecks';
import svgBkg from './assets/moroccan_bkg.svg';

function App() {

  const theme = createTheme(baseTheme)

  const { token, setToken, clearToken } = useToken();

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme} >
        <CssBaseline>
          <Navbar token={token} setToken={setToken} clearToken={clearToken} />
          <Box sx={{
            px: 0,
            py: 3,
            minHeight: '100vh',
            backgroundImage: `url(${svgBkg})`
          }}>

            <Toolbar />
            <Routes>
              <Route path="/" exact element={!token ? <Login setToken={setToken} /> : <Navigate to='/dashboard' replace/>} />
              <Route path="/dashboard" exact element={
                <RequireAuth token={token} clearToken={clearToken}>
                  <DashboardContainer />
                </RequireAuth>
              } />
              <Route path="/create" exact element={
                <RequireAuth token={token} clearToken={clearToken}>
                  <EditorBlankContainer />
                </RequireAuth>
              } />
              <Route path="/edit/:deckId" element={
                <RequireAuth token={token} clearToken={clearToken}>
                  <EditorFilledContainer />
                </RequireAuth>
              } />
              <Route path="/edit" exact element={
                <RequireAuth token={token} clearToken={clearToken}>
                  <SelectDecks />
                </RequireAuth>
              } />
            </Routes>
          </Box>
        </CssBaseline>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

/*
Sources:
basis for useToken hook - https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
auth flow inspiration - https://ui.dev/react-router-protected-routes-authentication

*/
