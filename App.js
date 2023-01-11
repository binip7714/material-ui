import { CssBaseline } from '@mui/material';
import './App.css';
// import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './HomePage';
// import AboutUs from './AboutUs';
import Layout from './Layout';
import SiteRoutes from './SiteRoutes';
import RegisterForm from './RegisterForm';
import { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">
          <HomePage/>
            <CssBaseline />
            <RegisterForm
                isRegistered={isRegistered}
                setIsRegistered={setIsRegistered}
            />
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
            <Router>
                <Layout>
                    <SiteRoutes
                        setIsRegistered={setIsRegistered}
                        isRegistered={isRegistered}
                        isLoggedIn={isLoggedIn}
                    />
                </Layout>
            </Router>
        </div>
    );
}

export default App;
