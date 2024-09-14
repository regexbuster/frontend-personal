import Link from 'next/link';

import style from './Navbar.module.css';

async function Navbar() {
    const links = [
        { href: '/', name: 'Home' },
        { href: '/about', name: 'About' },
        { href: '/blog', name: 'Blog' },
        { href: '/portfolio', name: 'Portfolio' },
    ];

    return (
        <div className={style.navbar}>
            {links.map((linkObj) => {
                return (
                    <Link
                        className={style.link}
                        key={linkObj.href}
                        href={linkObj.href}
                    >
                        <h1>{linkObj.name}</h1>
                    </Link>
                );
            })}
        </div>
    );
}

export default Navbar;
