import colors from '../style/colors';
import React from 'react';
import { NavigationDrawer } from './NavigationDrawer';
import { ContentHome } from './ContentHome';

export const Home = () => {
    return (
        <div style={{
            display: 'flex',
            backgroundColor: colors.background,
            width: '100vw',
            height: '100vh',
            padding: '10px'
        }}>
            <NavigationDrawer />
            <ContentHome />
        </div>
    );
}