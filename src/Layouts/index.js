import React, { useState } from 'react';
import { Topbar, TopBarWithCTA } from '../components';

const Layouts = ({ children, questionTimer }) => {

    return (
        <>
            <main>
                <Topbar />
                <TopBarWithCTA withTimer={questionTimer ? true : false} />
                {children}
            </main>
        </>
    );
};
export default Layouts;