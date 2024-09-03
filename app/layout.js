import './globals.css';
import './gruvbox.css';

import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';

export const metadata = {
    title: 'Ben Franks Portfolio',
    description: 'Portfolio and blog website for Ben Franks',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar></Navbar>
                {children}
                <ThemeToggle></ThemeToggle>
            </body>
        </html>
    );
}
