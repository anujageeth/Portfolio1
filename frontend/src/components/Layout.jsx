import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/Layout.css';

const Layout = ({ children }) => {
    const location = useLocation();

    const isActive = (path) => {
        // Check if the current location starts with the given path
        if (path === '/creative') {
            return location.pathname === '/creative' || 
                   location.pathname.startsWith('/creative/');
        }
        return location.pathname === path;
    };

    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;