import React, { useState } from 'react';
import { TopNavbar } from '../components';
import "./withnav.sass"
const WithNavBar = ({ IsLoggedIn,children }) => {

    return (
        <>
            <main className='WithNavBar'>
                <TopNavbar IsLoggedIn={IsLoggedIn}/>
                {children}
            </main>
        </>
    );
};
export default WithNavBar;