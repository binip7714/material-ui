import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const SiteRoutes = ({
    isRegistered,
    isLoggedIn,
    setIsRegistered,
    setIsLoggedIn,
}) => {
    return (
        <>
            <Routes>
                {isRegistered ? (
                    isLoggedIn ? (
                        <>
                            <Route path="/" element={<HomePage />} />
                            <Route path="about-us" element={<AboutUs />} />
                        </>
                    ) : (
                        <Route
                            path="login"
                            element={
                                <LoginForm
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            }
                        />
                    )
                ) : (
                    <Route
                        path="register"
                        element={
                            <RegisterForm
                                isRegistered={isRegistered}
                                setIsRegistered={setIsRegistered}
                            />
                        }
                    />
                )}
            </Routes>
            <Routes>
                <Route path="login" element={<LoginForm />} />
            </Routes>
            {isRegistered ? (
                isLoggedIn ? (
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="about-us" element={<AboutUs />} />
                    </Routes>
                ) : (
                    <Routes>
                        <Route
                            path="login"
                            element={
                                <LoginForm
                                    isLoggedIn={isLoggedIn}
                                    setIsLoggedIn={setIsLoggedIn}
                                />
                            }
                        />
                    </Routes>
                )
            ) : (
                <Routes>
                    <Route
                        path="register"
                        element={
                            <RegisterForm
                                isRegistered={isRegistered}
                                setIsRegistered={setIsRegistered}
                            />
                        }
                    />
                </Routes>
            )}
        </>
    );
};

export default SiteRoutes;