import './globals.css';
import './gruvbox.css';

import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';

import { UserProvider } from '@auth0/nextjs-auth0/client';

export const metadata = {
    title: 'Ben Franks Portfolio',
    description: 'Portfolio and blog website for Ben Franks',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <UserProvider>
                <body>
                    <Navbar></Navbar>
                    {children}
                    <ThemeToggle></ThemeToggle>
                </body>
            </UserProvider>
        </html>
    );
}
