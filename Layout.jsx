import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            {/*header section*/}
            <Header />

            {/*main content section*/}
            {children}

            {/*footer section*/}
            <Footer />
        </>
    );
};

export default Layout;